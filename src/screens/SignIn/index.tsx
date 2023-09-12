import { AxiosError } from 'axios'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import React, { useEffect } from 'react'
import { api } from '../../api'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title } from './styles'
WebBrowser.maybeCompleteAuthSession()
const useProxy = true
const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'apptecredirect',
})
console.log(redirectUri)
const SignIn: React.FC = () => {
  // Create and load an auth request
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      responseType: 'code',
      clientId: 'angular',
      clientSecret: 'password',
      state: '123456789',
      redirectUri,
      scopes: ['READ', 'WRITE'],
      codeChallengeMethod: AuthSession.CodeChallengeMethod.S256,
    },
    {
      authorizationEndpoint: 'http://192.168.0.113:8080/oauth2/authorize',
      tokenEndpoint: 'http://192.168.0.113:8080/oauth2/token',
    },
  )

  async function loadToken(code: string, codeVerifier) {
    try {
      const { data } = await api.post(
        '/oauth2/token',
        `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&code_verifier=${codeVerifier}`,
        {
          headers: {
            Authorization: 'Basic YW5ndWxhcjpwYXNzd29yZA==',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      console.log(data)
    } catch (error) {
      console.log(error)
      const erroAxios = error as AxiosError
    }
  }
  useEffect(() => {
    if (result?.type === 'success') {
      console.log(result)
      loadToken(result.params.code, request.codeVerifier)
    }
  }, [result])
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      {/* <Input placeholder="Email" icon="mail" />
      <Input placeholder="Senha" icon="key" secureTextEntry /> */}
      <Input placeholder="Ip/Dominio do servidor" icon="server" />
      <Button
        title="Entrar"
        onPress={() => {
          console.log('test')
          promptAsync({})
        }}
      />
    </Container>
  )
}

export { SignIn }
