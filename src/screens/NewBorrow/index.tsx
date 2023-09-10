import React from 'react'
import Button from '../../components/Button'
import HeaderTitle from '../../components/HeaderTitle'
import { Input } from '../../components/Input'
import { Container, Form, InputForm } from './styles'

const NewBorrow: React.FC = () => {
  return (
    <Container>
      <HeaderTitle title="Nova Saida" />
      <Form>
        <InputForm>
          <Input placeholder="Nome do Cliente" />
          <Input placeholder="Codigo do equipamento" />
          <Input placeholder="Nome do Tecnico" />
          <Input placeholder="Número da ordem de serviço" />
        </InputForm>
        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}

export { NewBorrow }
