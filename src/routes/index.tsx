import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Loading from '../components/Loading'
import { useAuth } from '../hooks/useAuth'
import { SignIn } from '../screens/SignIn'
import { AppTabRoutes } from './app.tab.route'

const AppRoutes: React.FC = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Loading />
  }
  return (
    <NavigationContainer>
      {user?.name ? <AppTabRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}

export { AppRoutes }
