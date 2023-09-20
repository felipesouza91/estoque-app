import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import {
  Container,
  Icon,
  IconButton,
  Span,
  Text,
  TitleContainer,
} from './styles'
const Header: React.FC = () => {
  const { logout } = useAuth()

  function handleLogout() {
    logout()
  }

  return (
    <Container>
      <TitleContainer>
        <Span>Bem Vindo</Span>
        <Text>Felipe Souza</Text>
      </TitleContainer>
      <IconButton onPress={handleLogout}>
        <Icon name="log-out" size={26} />
      </IconButton>
    </Container>
  )
}

export default Header
