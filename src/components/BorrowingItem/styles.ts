import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

interface IBorderProps {
  isFinish?: boolean
}

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray-600']};
  border-radius: 5px;
  overflow: 'hidden';
`
export const Border = styled.View<IBorderProps>`
  width: 8px;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme, isFinish }) =>
    isFinish ? theme.colors['green-700'] : theme.colors['secondary-700']};
  margin-right: 10px;
`
export const Content = styled.View`
  padding: 21px 0;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
  gap: 4px;
`
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors['gray-100']};
`

export const TimeContainer = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-items: center;
`

export const TimeIcon = styled(MaterialIcons).attrs({
  size: 18,
})`
  color: ${({ theme }) => theme.colors['gray-300']};
`

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors['gray-200']};
`

export const StatusIcon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${({ theme }) => theme.colors['secondary-700']};
`

export const Rounded = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['gray-500']};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 24px;
`

export const FinishIcon = styled(Ionicons).attrs({ size: 24 })`
  color: ${({ theme }) => theme.colors['green-700']};
`
