import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-500']};
  gap: 5px;
`

export const Content = styled.View`
  flex: 1;
  padding: 10px 32px;
  gap: 10px;
`

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  flex-direction: row;
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

export const ResultList = styled.FlatList.attrs({
  contentContainerStyle: {
    flex: 1,
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
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors['gray-200']};
`
export const OptionSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors['gray-200']};
`

export const EmptyContainer = styled.View`
  flex: 1;
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
