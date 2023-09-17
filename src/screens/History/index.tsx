import React from 'react'
import { View } from 'react-native'
import { BorrowingItem } from '../../components/BorrowingItem'
import EmptyList from '../../components/EmptyList'
import {
  Container,
  Content,
  FilterIcon,
  Header,
  HeaderTitle,
  IconButton,
  Separator,
} from './styles'
const data = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const History: React.FC = () => {
  return (
    <Container>
      <Header>
        <View />
        <HeaderTitle>Historico</HeaderTitle>
        <IconButton>
          <FilterIcon name="filter" />
        </IconButton>
      </Header>
      <Content
        data={data}
        renderItem={({ item }) => <BorrowingItem />}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <EmptyList message="Nenhum resultado disponivel" />
        )}
      />
    </Container>
  )
}

export { History }
