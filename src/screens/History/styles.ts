import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-700']};
  gap: 10px;
`
export const Header = styled.View`
  flex-direction: row;
  padding: 40px 32px 20px 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors['gray-100']};
`
export const FilterIcon = styled(Feather).attrs({
  size: 26,
})`
  color: ${({ theme }) => theme.colors['gray-200']};
  align-self: flex-end;
`

export const IconButton = styled.TouchableOpacity``

export const Content = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  padding: 0 24px;
  flex: 1;
`
export const Separator = styled.View`
  height: 15px;
`
