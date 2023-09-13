import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AppTabRoutes } from './app.tab.route'

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  )
}

export { AppRoutes }
