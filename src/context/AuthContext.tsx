import jwtDecode from 'jwt-decode'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api'
import { UserDTO } from '../services/dto/UserDTO'
import {
  removeTokenFromLocalStorage,
  saveTokenInLocalStorage,
} from '../services/localStorage/TokenLocalStorage'
import {
  loadUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserInLocalStorate,
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
  loadTokenWithCode: (
    code: string,
    codeVerifier: string,
    redirectUri: string,
  ) => void
  logout: () => void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

interface IAuthProviderProps {
  children?: ReactNode
}

const AuthContextProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | undefined>({} as UserDTO)
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
        await saveUserInLocalStorate({
          name: userData.userName,
          permissions: userData.authorities,
        })
        setUser({ name: userData.userName, permissions: userData.authorities })
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function logout() {
    await removeTokenFromLocalStorage()
    await removeUserFromLocalStorage()
    setUser(undefined)
  }

  useEffect(() => {
    loadUserFromLocalStorage().then((data) => setUser(data))
  }, [])

  return (
    <AuthContext.Provider value={{ user, loadTokenWithCode, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }
