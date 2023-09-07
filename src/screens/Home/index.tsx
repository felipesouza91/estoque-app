import React from 'react'
import { BorrowingItem } from '../../components/BorrowingItem'
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <BorrowingItem />
    </Container>
  )
}

export { Home }
