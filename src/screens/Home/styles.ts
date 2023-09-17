import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-700']};
  padding: 0 24px;
`

export const PressWrapper = styled.TouchableOpacity``

export const BorrowingList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'center',
  },
})``

export const ItemSeparator = styled.View`
  height: 16px;
`

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 24px;
  height: 58px;
  width: 58px;
  border-radius: 29px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['green-500']};
`

export const PlusIcon = styled(MaterialIcons)``
