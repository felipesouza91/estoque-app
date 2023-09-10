import React from 'react'
import { BorrowingItem } from '../../components/BorrowingItem'
import Header from '../../components/Header'
import { BorrowingList, Container, ItemSeparator } from './styles'

const list = [1, 2, 3, 4, 5, 6, 7, 8]

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <BorrowingList
          data={list}
          renderItem={(item) => <BorrowingItem />}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </Container>
    </>
  )
}

export { Home }
