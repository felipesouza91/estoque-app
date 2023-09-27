import React, { useEffect, useState } from 'react'
import EmptyList from '../EmptyList'
import { Input } from '../Input'
import {
  Container,
  ErrorMessage,
  HeaderTitle,
  InputContainer,
  ModalContainer,
  Option,
  OptionName,
  OptionSubtitle,
  Placeholder,
  ResultList,
  SearchModal,
  Separator,
  TextInput,
} from './styles'

export interface ISearchItem {
  id: string
  title: string
  subTitle: string
}

interface IIpuntSearProps {
  placeholder?: string
  value?: string
  errorMessage?: string
  searchFunction: (query: string) => Promise<ISearchItem[]>
  onSelectItem: (selectItem: any) => void
}

const InputSearch: React.FC<IIpuntSearProps> = ({
  placeholder,
  value,
  errorMessage,
  onSelectItem,
  searchFunction,
}) => {
  const [title, setTitle] = useState(value)
  const [query, setQuery] = useState('')
  const [searchResult, setSearchResult] = useState<ISearchItem[]>([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (query.length > 3) {
      searchFunction(query).then((result) => {
        setSearchResult(result)
      })
    }
  }, [query])

  function handleSelectItem(item: ISearchItem) {
    console.log(item)
    onSelectItem(item)
    setTitle(item.title)
    setSearchResult([])
    setShowModal(!showModal)
  }
  return (
    <Container onPress={() => setShowModal(!showModal)}>
      <InputContainer error={!!errorMessage}>
        {title ? (
          <TextInput>{title}</TextInput>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
      </InputContainer>
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <SearchModal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowModal(!showModal)
        }}
      >
        <ModalContainer>
          <HeaderTitle>Selecione o cliente</HeaderTitle>
          <Input placeholder="Pesquisar" onChangeText={setQuery} />
          <ResultList
            data={searchResult}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Option onPress={() => handleSelectItem(item)}>
                <OptionName>Nome do cliente: {item.title}</OptionName>
                <OptionSubtitle>Codigo: {item.subTitle}</OptionSubtitle>
              </Option>
            )}
            ItemSeparatorComponent={() => <Separator />}
            ListEmptyComponent={() => (
              <EmptyList message="Nenhum resultado encontrado" />
            )}
          />
        </ModalContainer>
      </SearchModal>
    </Container>
  )
}

export { InputSearch }
