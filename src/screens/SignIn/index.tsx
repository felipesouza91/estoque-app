import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { Container, Title } from './styles'

const schema = yup.object({
  serverUrl: yup.string().required('Campo obrigatório'),
})

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { login } = useAuth()
  async function handleLogin(data) {
    await login(data.serverUrl)
  }
  return (
    <Container>
      <Title>Acesse sua conta</Title>
      <Controller
        control={control}
        name="serverUrl"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            placeholder="Ip/Dominio do servidor"
            icon="server"
            value={value}
            onChangeText={onChange}
            errorMessage={errors.serverUrl?.message}
          />
        )}
      />
      <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
    </Container>
  )
}

export { SignIn }
