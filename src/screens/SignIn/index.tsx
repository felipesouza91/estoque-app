import React from 'react'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { Container, Title } from './styles'

const SignIn: React.FC = () => {
  const { user, login } = useAuth()
  async function handleLogin() {
    await login()
  }
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <Input placeholder="Ip/Dominio do servidor" icon="server" />
      <Button title="Entrar" onPress={handleLogin} />
    </Container>
  )
}

export { SignIn }
