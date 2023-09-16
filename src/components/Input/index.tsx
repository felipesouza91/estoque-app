import { Feather } from '@expo/vector-icons'
import type { Icon as Icon_ } from '@expo/vector-icons/build/createIconSet'
import React from 'react'
import { TextInputProps } from 'react-native/types'
import {
  Container,
  ErrorMessage,
  Icon,
  InputContainer,
  TextInput,
} from './styles'

interface IInputProps extends TextInputProps {
  icon?: typeof Feather extends Icon_<infer Type, string> ? Type : never
  errorMessage?: string
}

const Input: React.FC<IInputProps> = ({ errorMessage, icon, ...rest }) => {
  return (
    <Container>
      <InputContainer isError={!!errorMessage}>
        {icon && <Icon name={icon} size={24} />}
        <TextInput {...rest} />
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}

export { Input }
