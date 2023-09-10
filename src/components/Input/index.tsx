import { Feather } from '@expo/vector-icons'
import type { Icon as Icon_ } from '@expo/vector-icons/build/createIconSet'
import React from 'react'
import { TextInputProps } from 'react-native/types'
import { Container, Icon, TextInput } from './styles'

interface IInputProps extends TextInputProps {
  icon?: typeof Feather extends Icon_<infer Type, string> ? Type : never
}

const Input: React.FC<IInputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      {icon && <Icon name="mail" size={24} />}
      <TextInput {...rest} />
    </Container>
  )
}

export { Input }
