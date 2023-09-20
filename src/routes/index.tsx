import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { SignIn } from '../screens/SignIn'
import { AppTabRoutes } from './app.tab.route'

const AppRoutes: React.FC = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user?.name ? <AppTabRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}

export { AppRoutes }
