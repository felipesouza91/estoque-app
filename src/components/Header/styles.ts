import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'
export const Container = styled.View`
  padding: 30px 32px 20px 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const TitleContainer = styled.View``
export const Span = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors['gray-200']};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
`

export const IconButton = styled.TouchableOpacity``
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors['gray-300']};
`
