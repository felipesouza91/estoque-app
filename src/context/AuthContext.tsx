import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import jwtDecode from 'jwt-decode'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'
import { UserDTO } from '../services/dto/UserDTO'
import {
  loadTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  saveTokenInLocalStorage,
} from '../services/localStorage/TokenLocalStorage'
import {
  loadUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserInLocalStorage,
} from '../services/localStorage/UserLocalStrorage'
import {
  loadUrlFromLocalStorage,
  saveUrlInLocalStorage,
} from '../services/localStorage/serverUrl'

interface ITokenResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

interface ITokenData {
  aud: string
  authorities: string[]
  exp: number
  iat: number
  iss: string
  nbf: number
  sub: string
  userId: string
  userName: string
}

interface IAuthContextData {
  user?: UserDTO
  isLoading: boolean
  logout: () => void
  login: (serverUrl: string) => Promise<void>
}
WebBrowser.maybeCompleteAuthSession({
  skipRedirectCheck: true,
})
const redirectUriApp = AuthSession.makeRedirectUri({
  path: 'authorize',
  scheme: 'dev.fsantana.estoqueapp',
})
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

interface IAuthProviderProps {
  children?: ReactNode
}

const AuthContextProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | undefined>({} as UserDTO)
  const [isLoading, setIsLoading] = useState(false)
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: 'code',
      clientId: 'angular',
      state: '123456789',
      redirectUri: redirectUriApp,
      scopes: ['READ WRITE'],
      codeChallengeMethod: AuthSession.CodeChallengeMethod.S256,
    },
    {
      authorizationEndpoint: `http://local/oauth2/authorize`,
      tokenEndpoint: `http://local/oauth2/token`,
    },
  )

  async function authLogin(serverUrl: string) {
    await saveUrlInLocalStorage(serverUrl)
    const params = encodeURI(
      `response_type=${request.responseType}&client_id=${request.clientId}&state=${request.state}&redirect_uri=${request.redirectUri}&scope=${request.scopes}&code_challange=${request.codeChallenge}&code_challange_method=${request.codeChallengeMethod}`,
    )
    request.url = `http://${serverUrl}/oauth2/authorize?${params}`
    api.defaults.baseURL = `http://${serverUrl}`
    await promptAsync({})
  }

  async function loadTokenWithCode(
    code: string,
    codeVerifier: string,
    redirectUri: string,
  ) {
    try {
      setIsLoading(true)
      const { data } = await api.post<ITokenResponse>(
        '/oauth2/token',
        `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&code_verifier=${codeVerifier}`,
        {
          headers: {
            Authorization: 'Basic YW5ndWxhcjpwYXNzd29yZA==',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      if (data.access_token) {
        await saveTokenInLocalStorage({
          token: data.access_token,
          refreshToken: data.refresh_token,
        })
        const userData = jwtDecode<ITokenData>(data.access_token)
        await saveUserInLocalStorage({
          name: userData.userName,
          permissions: userData.authorities,
        })

        api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
        setUser({ name: userData.userName, permissions: userData.authorities })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function logout() {
    const serverUrl = await loadUrlFromLocalStorage()
    const token = await loadTokenFromLocalStorage()
    if (!token) {
      return
    }
    await WebBrowser.openBrowserAsync(
      `http://${serverUrl}/logout?redirectTo=${redirectUriApp}`,
    )
    await removeTokenFromLocalStorage()
    await removeUserFromLocalStorage()
    setUser(undefined)
  }

  useEffect(() => {
    if (result?.type === 'success') {
      loadTokenWithCode(
        result.params.code,
        request.codeVerifier,
        redirectUriApp,
      )
    }
  }, [request, result])

  async function startApplication() {
    try {
      setIsLoading(true)
      const url = await loadUrlFromLocalStorage()
      api.defaults.baseURL = `http://${url}`
      const data = await loadUserFromLocalStorage()
      const { token } = await loadTokenFromLocalStorage()
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    startApplication()
  }, [])

  return (
    <AuthContext.Provider value={{ user, logout, login: authLogin, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
