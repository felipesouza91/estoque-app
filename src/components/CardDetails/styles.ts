import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['gray-600']};
  border-radius: 5px;
  gap: 8px;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-items: center;
`

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  color: theme.colors['primary-700'],
  size: 20,
}))``

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors['gray-300']};
  text-transform: uppercase;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors['gray-100']};
  text-transform: uppercase;
`

export const Footer = styled.View`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors['gray-500']};
  padding-top: 12px;
`
export const FooterText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors['gray-300']};
  text-transform: capitalize;
`
