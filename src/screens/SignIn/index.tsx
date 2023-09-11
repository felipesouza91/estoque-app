import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title } from './styles'
WebBrowser.maybeCompleteAuthSession()
const useProxy = true
const redirectUri = AuthSession.makeRedirectUri()
console.log(redirectUri)
const SignIn: React.FC = () => {
  // Create and load an auth request
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: 'angular',
      redirectUri,
      scopes: ['READ', 'WRITE'],
      usePKCE: true,
      responseType: 'code',
      state: '123456789',
      codeChallenge: '12345689',
    },
    {
      authorizationEndpoint: 'http://192.168.0.113:8080/oauth2/authorize',
      tokenEndpoint: 'http://192.168.0.113:8080/oauth2/token',
    },
  )
  console.log(JSON.stringify(result, null, 2))
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
