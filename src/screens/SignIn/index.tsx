import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { loadUrlFromLocalStorage } from '../../services/localStorage/serverUrl'
import { Container, Title } from './styles'

const schema = yup.object({
  serverUrl: yup.string().required('Campo obrigatório'),
})

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { login } = useAuth()
  async function handleLogin(data) {
    await login(data.serverUrl)
  }

  async function loadUrl() {
    const url = await loadUrlFromLocalStorage()
    reset({ serverUrl: url })
  }

  useEffect(() => {
    loadUrl()
  }, [])

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
