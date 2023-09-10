import React from 'react'
import { TouchableOpacityProps } from 'react-native/types'
import { Container, Title } from './styles'
interface IButtonProps extends TouchableOpacityProps {
  title: string
  type?: 'default' | 'cancel'
}
const Button: React.FC<IButtonProps> = ({
  title,
  type = 'default',
  ...rest
}) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
