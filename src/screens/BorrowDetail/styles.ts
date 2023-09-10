import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
interface ITitleProps {
  isOpen: boolean
}
interface IIconProps {
  isOpen: boolean
}
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`
export const StatusTag = styled.View`
  flex-direction: row;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray-500']};
  gap: 12px;
`

export const Icon = styled(Ionicons).attrs({
  size: 26,
})<IIconProps>`
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors['secondary-700'] : theme.colors['green-300']};
`

export const StatusIcon = styled(Ionicons).attrs({
  size: 26,
})`
  color: ${({ theme }) => theme.colors['secondary-700']};
`
export const FinishIcon = styled(Ionicons).attrs({ size: 26 })`
  color: ${({ theme }) => theme.colors['green-300']};
`

export const Title = styled.Text<ITitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  text-transform: uppercase;
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors['secondary-700'] : theme.colors['green-300']};
`
