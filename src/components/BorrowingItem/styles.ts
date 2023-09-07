import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 5px;
`

export const Content = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`
export const ContentRow = styled.View`
  flex-direction: row;
`
export const Subtext = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
`
