import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Container, Content, ContentRow, Subtext, Title } from './styles'
const BorrowingItem: React.FC = () => {
  return (
    <Container>
      <MaterialIcons name="arrow-circle-up" size={40} color="red" />
      <Content>
        <Title>Casa do Felipe Souza</Title>
        <Subtext>Produto: Pendrive 16</Subtext>
        <Subtext>Nome do técnico: Joao</Subtext>
        <ContentRow>
          <Subtext>Data entrega:</Subtext>
          <Subtext> 20/30/2023</Subtext>
        </ContentRow>
      </Content>
    </Container>
  )
}

export { BorrowingItem }
