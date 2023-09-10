import React from 'react'
import { ContainerList, Image, Separator } from './styles'

interface IImageListProps {
  data: string[]
}

const ImageList: React.FC<IImageListProps> = ({ data }) => {
  return (
    <ContainerList
      data={data}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => <Image source={{ uri: item }} />}
    />
  )
}

export { ImageList }
