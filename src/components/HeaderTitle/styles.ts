import { Feather } from '@expo/vector-icons'

import styled from 'styled-components/native'
export const Header = styled.View`
  padding: 30px 32px 20px 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const IconButton = styled.TouchableOpacity``

export const Icon = styled(Feather).attrs({
  size: 24,
})`
  color: ${({ theme }) => theme.colors['gray-200']};
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors['gray-100']};
`
