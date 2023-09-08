import React from 'react'
import {
  Container,
  Icon,
  IconButton,
  Span,
  Text,
  TitleContainer,
} from './styles'
const Header: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Span>Bem Vindo</Span>
        <Text>Felipe Souza</Text>
      </TitleContainer>
      <IconButton>
        <Icon name="log-out" size={26} />
      </IconButton>
    </Container>
  )
}

export default Header
