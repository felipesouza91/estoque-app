import React from 'react'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Title } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <Input placeholder="Email" icon="mail" />
      <Input placeholder="Senha" icon="key" />
      <Button title="Entrar" />
    </Container>
  )
}

export { SignIn }
