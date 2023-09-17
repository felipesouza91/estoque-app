import React from 'react'
import { EmptyContainer, EmptyIcon, EmptyText } from './styles'

interface IEmptyListProps {
  message: string
}

const EmptyList: React.FC<IEmptyListProps> = ({ message }) => {
  return (
    <EmptyContainer>
      <EmptyIcon name="list" />
      <EmptyText>{message}</EmptyText>
    </EmptyContainer>
  )
}

export default EmptyList
