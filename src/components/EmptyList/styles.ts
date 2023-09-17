import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 15px;
`
export const EmptyIcon = styled(Feather).attrs({
  size: 40,
})`
  color: ${({ theme }) => theme.colors['gray-100']};
`

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.colors['gray-200']};
  text-align: center;
`
