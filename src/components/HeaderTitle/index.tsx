import React from 'react'
import { View } from 'react-native'
import { Header, Icon, IconButton, Title } from './styles'

interface IHeaderTitleProps {
  title: string
}

const HeaderTitle: React.FC<IHeaderTitleProps> = ({ title }) => {
  return (
    <Header>
      <IconButton>
        <Icon name="arrow-left" />
      </IconButton>
      <Title>{title}</Title>
      <View style={{ width: 24 }} />
    </Header>
  )
}

export default HeaderTitle
