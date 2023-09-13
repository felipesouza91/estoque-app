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
    paddingBottom: 20,
  },
})``

export const ItemSeparator = styled.View`
  height: 16px;
`
