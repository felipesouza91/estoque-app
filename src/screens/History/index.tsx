import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { BorrowingItem } from '../../components/BorrowingItem'
import EmptyList from '../../components/EmptyList'
import FilterSelectors from '../../components/FilterSelectors'
import { AppStackNavigationProp } from '../../routes/app.stack.route'
import {
  Container,
  Content,
  FilterIcon,
  Header,
  HeaderTitle,
  IconButton,
  Press,
  Separator,
} from './styles'
const data = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const History: React.FC = () => {
  const nativation = useNavigation<AppStackNavigationProp>()
  const [showFilter, setShowFilter] = useState(false)
  function handleNavigate(item: any) {
    nativation.navigate('BorrowDetail', { data: item })
  }

  function handleShowFilter() {
    setShowFilter(!showFilter)
  }

  function showResultSearch(item) {
    setShowFilter(!showFilter)
  }

  return (
    <Container>
      <FilterSelectors
        visible={showFilter}
        onDismiss={handleShowFilter}
        searchResult={showResultSearch}
      />
      <Header>
        <View />
        <HeaderTitle>Historico</HeaderTitle>
        <IconButton onPress={handleShowFilter}>
          <FilterIcon name="filter" />
        </IconButton>
      </Header>
      <Content
        data={data}
        renderItem={({ item }) => (
          <Press onPress={() => handleNavigate(item)}>
            <BorrowingItem />
          </Press>
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <EmptyList message="Nenhum resultado disponivel" />
        )}
      />
    </Container>
  )
}

export { History }
