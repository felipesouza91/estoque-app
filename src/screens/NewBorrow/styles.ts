import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
})`
  padding: 10px 32px;
`

export const InputForm = styled.View`
  gap: 16px;
`
