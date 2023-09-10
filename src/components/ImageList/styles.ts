import { FlatList, FlatListProps } from 'react-native'
import { styled } from 'styled-components/native'

export const ContainerList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>,
).attrs({
  horizontal: true,
})``

export const Separator = styled.View`
  width: 10px;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`
