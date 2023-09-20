import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { BorrowingItem } from '../../components/BorrowingItem'
import EmptyList from '../../components/EmptyList'
import Header from '../../components/Header'
import { AppStackNavigationProp } from '../../routes/app.stack.route'
import {
  BorrowingList,
  Container,
  Content,
  IconButton,
  ItemSeparator,
  PlusIcon,
  PressWrapper,
} from './styles'
const list = [1, 2, 3, 4, 5, 6, 7, 8]

const Home: React.FC = () => {
  const navigation = useNavigation<AppStackNavigationProp>()

  function handleNavigate(item) {
    navigation.navigate('BorrowDetail', item)
  }

  function handleAdd() {
    navigation.navigate('NewBorrow')
  }
  return (
    <Container>
      <Header />
      <Content>
        <BorrowingList
          data={list}
          renderItem={({ item }) => (
            <PressWrapper onPress={() => handleNavigate(item)}>
              <BorrowingItem />
            </PressWrapper>
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListEmptyComponent={() => (
            <EmptyList message="Nenhum resultado disponivel" />
          )}
        />
        <IconButton onPress={handleAdd}>
          <PlusIcon name="add" size={24} />
        </IconButton>
      </Content>
    </Container>
  )
}

export { Home }
