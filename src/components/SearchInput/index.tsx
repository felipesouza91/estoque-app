import React, { useEffect, useState } from 'react'
import { Modal, ModalProps } from 'react-native'
import HeaderTitle from '../HeaderTitle'
import {
  Container,
  Content,
  EmptyContainer,
  EmptyIcon,
  EmptyText,
  InputContainer,
  Option,
  OptionName,
  OptionSubtitle,
  ResultList,
  Separator,
  TextInput,
} from './styles'

const data = [1, 2, 3, 4, 5, 6]
type ISearchInput = ModalProps & {
  title: string
  goBack: () => void
  searchFunction: (query: string) => any
  onSelectItem: (selectItem: any) => void
}
const SearchInput: React.FC<ISearchInput> = ({
  title,
  searchFunction,
  goBack,
  onSelectItem,
  ...rest
}) => {
  const [searchData, setSearchData] = useState('')
  const [serchResult, setSearchResult] = useState<number[]>()
  useEffect(() => {
    const result = searchFunction(searchData)
    setSearchResult(result)
  }, [searchData])

  return (
    <Modal {...rest}>
      <Container>
        <HeaderTitle title={title} goBack={goBack} />
        <Content>
          <InputContainer>
            <TextInput value={searchData} onChangeText={setSearchData} />
          </InputContainer>
          <ResultList
            data={serchResult}
            renderItem={({ item }) => (
              <Option onPress={() => onSelectItem(item)}>
                <OptionName>Nome do cliente: {item}</OptionName>
                <OptionSubtitle>Codigo: {item}</OptionSubtitle>
              </Option>
            )}
            ItemSeparatorComponent={() => <Separator />}
            ListEmptyComponent={() => (
              <EmptyContainer>
                <EmptyIcon name="list" />
                <EmptyText>Nenhum resultado encontrado</EmptyText>
              </EmptyContainer>
            )}
          />
        </Content>
      </Container>
    </Modal>
  )
}

export { SearchInput }
