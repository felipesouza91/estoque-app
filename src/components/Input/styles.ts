import { Feather } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

interface IContainerProps {
  isFocused?: boolean
  isError?: boolean
}

interface IIconProps {
  isFilled?: boolean
  isError?: boolean
}

export const Container = styled.View<IContainerProps>`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  padding: 16px;
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border: 1px solid ${theme.colors['green-500']};
    `}
  ${({ theme, isError }) =>
    isError &&
    css`
      border: 1px solid ${theme.colors['red-500']};
    `}
`

export const Icon = styled(Feather)<IIconProps>`
  color: ${({ theme }) => theme.colors['gray-300']};
  ${({ theme, isFilled }) =>
    isFilled &&
    css`
      color: ${theme.colors['green-700']};
    `}
  ${({ theme, isError }) =>
    isError &&
    css`
      color: ${theme.colors['red-500']};
    `}
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors['gray-300'],
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors['gray-200']};
  line-height: ${({ theme }) => theme.fontSize.lg * 1.6}px;
`
