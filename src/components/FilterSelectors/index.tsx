import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../Button'
import { Input } from '../Input'
import { Container, Content, Form, Title } from './styles'

const schema = yup.object({
  clientName: yup.string(),
  technicianName: yup.string(),
  productCode: yup.number(),
})
type FormData = yup.InferType<typeof schema>
interface IFilterSelectorsProps {
  visible: boolean
  onDismiss: () => void
  searchResult: (data: any) => void
}

const FilterSelectors: React.FC<IFilterSelectorsProps> = ({
  visible,
  onDismiss,
  searchResult,
}) => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  function handleSearch(data: FormData) {
    searchResult(data)
  }

  return (
    <Container
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onDismiss}
    >
      <Content>
        <Title>Filtros</Title>
        <Form>
          <Controller
            control={control}
            name="clientName"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome do Cliente"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="technicianName"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Nome do Tecnico"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="productCode"
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Codigo do produto"
                onChangeText={onChange}
                value={value?.toString()}
              />
            )}
          />
        </Form>
        <Button
          title="Pesquisar"
          onPress={handleSubmit(handleSearch)}
          style={{ marginTop: 15, marginBottom: 15 }}
        />
      </Content>
    </Container>
  )
}

export default FilterSelectors
