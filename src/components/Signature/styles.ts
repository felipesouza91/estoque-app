import styled from 'styled-components/native'

export const ModalContainer = styled.Modal``

export const Header = styled.View`
  padding: 20px 0;
  align-items: center;
  justify-content: center;
`

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
`

export const Container = styled.View`
  flex: 1;
`

export const ButtonContainer = styled.View`
  padding: 10px 32px;
  gap: 10px;
`
