import { css } from 'styled-components'
import styled from 'styled-components/native'

interface IInputContainerProps {
  error?: boolean
}

export const Container = styled.TouchableOpacity`
  gap: 5px;
`

export const InputContainer = styled.View<IInputContainerProps>`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  padding: 18px;
  gap: 8px;
  border-radius: 8px;
  flex-direction: row;
  ${({ theme, error }) =>
    error &&
    css`
      border: 1px solid ${theme.colors['red-700']};
    `}
`

export const Placeholder = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors['gray-300']};
  line-height: ${({ theme }) => theme.fontSize.lg * 1.6}px;
`

export const TextInput = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors['gray-200']};
  line-height: ${({ theme }) => theme.fontSize.lg * 1.6}px;
`

export const SearchModal = styled.Modal``

export const ModalContainer = styled.View`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  padding: 0 32px;
  justify-content: stretch;
  align-content: stretch;
  gap: 10px;
`

export const HeaderTitle = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.colors['gray-100']};
  align-self: center;
`

export const ResultList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 10,
  },
})``

export const Separator = styled.View`
  height: 15px;
`

export const Option = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray-600']};
  gap: 5px;
`
export const OptionName = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors['gray-200']};
`
export const OptionSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors['gray-200']};
`

export const ErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors['red-500']};
`
