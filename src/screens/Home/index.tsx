import React from 'react'
import { BorrowingItem } from '../../components/BorrowingItem'
import { Container } from './styles'

const list = [1, 2, 3, 4, 5, 6, 7, 8]

const Home: React.FC = () => {
  return (
    <Container>
      <BorrowingItem />
    </Container>
  )
}

export { Home }
