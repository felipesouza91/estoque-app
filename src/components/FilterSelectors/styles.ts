import { styled } from 'styled-components/native'

export const Container = styled.Modal``

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  padding: 0 32px 15px 32px;

  gap: 10px;
`
export const Title = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.colors['gray-100']};
  align-self: center;
`
export const Form = styled.View`
  gap: 10px;
  margin-bottom: auto;
`
