import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { Container, Title } from './styles'
WebBrowser.maybeCompleteAuthSession()
const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'apptecredirect',
})
const SignIn: React.FC = () => {
  const { user, loadTokenWithCode } = useAuth()
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

  useEffect(() => {
    if (result?.type === 'success') {
      loadTokenWithCode(result.params.code, request.codeVerifier, redirectUri)
    }
  }, [result])
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <Input placeholder="Ip/Dominio do servidor" icon="server" />
      <Button
        title="Entrar"
        onPress={() => {
          promptAsync({})
        }}
      />
    </Container>
  )
}

export { SignIn }
