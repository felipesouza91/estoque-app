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

interface IIpuntSearProps {
  placeholder?: string
  value?: string
  errorMessage?: string
  searchFunction: (query: string) => any
  onSelectItem: (selectItem: any) => void
}

const InputSearch: React.FC<IIpuntSearProps> = ({
  placeholder,
  value,
  errorMessage,
  onSelectItem,
  searchFunction,
}) => {
  const [query, setQuery] = useState('')
  const [searchResult, setSearchResult] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const result = searchFunction(query)
    setSearchResult(result)
  }, [query])

  function handleSelectItem(item: any) {
    onSelectItem(item)
    setShowModal(!showModal)
  }

  return (
    <Container onPress={() => setShowModal(!showModal)}>
      <InputContainer error={!!errorMessage}>
        {value ? (
          <TextInput>{value}</TextInput>
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
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Option onPress={() => handleSelectItem(item)}>
                <OptionName>Nome do cliente: {item}</OptionName>
                <OptionSubtitle>Codigo: {item}</OptionSubtitle>
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
