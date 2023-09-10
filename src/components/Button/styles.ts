import styled from 'styled-components/native'

interface IContainerProps {
  type?: 'default' | 'cancel'
}

export const Container = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: 0.5,
}))<IContainerProps>`
  height: 56px;
  max-height: 56px;
  padding: 16px 24px;
  background-color: ${({ theme, type }) =>
    type === 'cancel' ? theme.colors['red-500'] : theme.colors['green-700']};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`
