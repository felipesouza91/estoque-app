import { styled } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-600']};
  justify-content: center;

  gap: 16px;
  padding: 0 32px;
`

export const Title = styled.Text`
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
`
