import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import * as yup from 'yup'
import Button from '../../components/Button'
import HeaderTitle from '../../components/HeaderTitle'
import { Input } from '../../components/Input'
import Signature from '../../components/Signature'
import { Container, Form, InputForm } from './styles'

const formSchema = yup.object({
  clientName: yup.string().required('O campo é obrigatório'),
  productCode: yup.string().required('O campo é obrigatório'),
  technicianName: yup.string().required('O campo é obrigatório'),
  orderNumber: yup.number(),
})

type FormSchemaData = yup.InferType<typeof formSchema>

const NewBorrow: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaData>({
    resolver: yupResolver(formSchema),
  })

  function handleSignature(status: boolean) {
    setShowModal(status)
  }

  function handleComplete(uri?: string) {
    setShowModal(false)
    if (!uri) {
      Alert.alert('Atenção', 'Assianura do técnico é obrigatória')
      return
    }
    console.log(uri)
    console.log(watch())
  }

  function handleValidateAndSignature(data: string) {
    handleSignature(true)
  }

  return (
    <Container>
      <Signature visible={showModal} onComplete={handleComplete} />
      <HeaderTitle title="Nova Saida" />
      <Form>
        <InputForm>
          <Controller
            name="clientName"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Nome do Cliente"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.clientName?.message}
              />
            )}
          />
          <Controller
            name="productCode"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Codigo do equipamento"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.productCode?.message}
              />
            )}
          />

          <Controller
            name="technicianName"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Nome do Tecnico"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.technicianName?.message}
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
