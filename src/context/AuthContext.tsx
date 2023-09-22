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

  logout: () => void
  login: () => Promise<void>
}
WebBrowser.maybeCompleteAuthSession({
  skipRedirectCheck: true,
})
const redirectUriApp = AuthSession.makeRedirectUri({
  scheme: 'apptecredirect',
})
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

interface IAuthProviderProps {
  children?: ReactNode
}

const AuthContextProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | undefined>({} as UserDTO)

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: 'code',
      clientId: 'angular',
      clientSecret: 'password',
      state: '123456789',
      redirectUri: redirectUriApp,
      scopes: ['READ', 'WRITE'],
      codeChallengeMethod: AuthSession.CodeChallengeMethod.S256,
    },
    {
      authorizationEndpoint: 'http://192.168.0.113:8080/oauth2/authorize',
      tokenEndpoint: 'http://192.168.0.113:8080/oauth2/token',
    },
  )

  async function authLogin() {
    await promptAsync({})
  }

  async function loadTokenWithCode(
    code: string,
    codeVerifier: string,
    redirectUri: string,
  ) {
    try {
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
    }
  }

  async function logout() {
    const token = await loadTokenFromLocalStorage()
    if (!token) {
      return
    }
    await WebBrowser.openBrowserAsync(
      `http://192.168.0.113:8080/logout?redirectTo=${redirectUriApp}`,
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
    const data = await loadUserFromLocalStorage()
    const { token } = await loadTokenFromLocalStorage()
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setUser(data)
  }

  useEffect(() => {
    startApplication()
  }, [])

  return (
    <AuthContext.Provider value={{ user, logout, login: authLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }
