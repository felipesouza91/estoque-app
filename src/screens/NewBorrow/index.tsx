import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import * as yup from 'yup'
import Button from '../../components/Button'
import HeaderTitle from '../../components/HeaderTitle'
import { Input } from '../../components/Input'
import { InputSearch } from '../../components/InputSearch'
import Signature from '../../components/Signature'
import { Container, Form, InputForm } from './styles'

const formSchema = yup.object({
  client: yup.string().required('O campo é obrigatório'),
  product: yup.string().required('O campo é obrigatório'),
  technician: yup.string().required('O campo é obrigatório'),
  orderNumber: yup.number(),
})

type FormSchemaData = yup.InferType<typeof formSchema>

interface Test {
  data: string
}

const NewBorrow: React.FC = () => {
  const [showSignatureModal, setShowSignatureModal] = useState(false)
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaData>({
    resolver: yupResolver(formSchema),
  })

  function handleSignature(status: boolean) {
    setShowSignatureModal(status)
  }

  function handleComplete(uri?: string) {
    setShowSignatureModal(false)
    if (!uri) {
      Alert.alert('Atenção', 'Assianura do técnico é obrigatória')
      return
    }
    console.log(uri)
  }

  function handleValidateAndSignature(data: string) {
    console.log(data)
    handleSignature(true)
  }

  function searchClient(query: string) {
    console.log(query)
    return [
      { index: 1, name: 'teste1' },
      { index: 2, name: 'teste2' },
      { index: 3, name: 'teste3' },
      { index: 4, name: 'teste4' },
      { index: 5, name: 'teste5' },
      { index: 6, name: 'teste6' },
    ].filter((item) => Number(query) === item.index)
  }

  return (
    <Container>
      <HeaderTitle title="Nova Saida" />
      <Signature visible={showSignatureModal} onComplete={handleComplete} />
      <Form>
        <InputForm>
          <Controller
            name="client"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSearch
                placeholder="Selecione o cliente"
                value={value}
                searchFunction={searchClient}
                onSelectItem={onChange}
                errorMessage={errors.client?.message}
              />
            )}
          />
          <Controller
            name="technician"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSearch
                placeholder="Selecione o técnico"
                value={value}
                searchFunction={searchClient}
                onSelectItem={onChange}
                errorMessage={errors.technician?.message}
              />
            )}
          />
          <Controller
            name="product"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputSearch
                placeholder="Selecione o produto"
                value={value}
                searchFunction={searchClient}
                onSelectItem={onChange}
                errorMessage={errors.product?.message}
              />
            )}
          />
          <Controller
            name="orderNumber"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Número da ordem de serviço"
                onBlur={onBlur}
                value={value && String(value)}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            )}
          />
        </InputForm>
        <Button
          title="Cadastrar"
          onPress={handleSubmit(handleValidateAndSignature)}
        />
      </Form>
    </Container>
  )
}

export { NewBorrow }
