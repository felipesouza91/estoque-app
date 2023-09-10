import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import { Container, Icon, StatusTag, Title } from './styles'
const BorrowDetail: React.FC = () => {
  const isOpen = true
  return (
    <Container>
      <HeaderTitle title="Editar Saida" />
      <StatusTag>
        <Icon isOpen={isOpen} name={isOpen ? 'checkmark' : 'checkmark-done'} />
        <Title isOpen={isOpen}>{isOpen ? 'em andamento' : 'concluido'}</Title>
      </StatusTag>
    </Container>
  )
}

export { BorrowDetail }
