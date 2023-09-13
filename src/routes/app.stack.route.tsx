import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { BorrowDetail } from '../screens/BorrowDetail'
import { Home } from '../screens/Home'
import { NewBorrow } from '../screens/NewBorrow'

const Stack = createStackNavigator()

const AppStackRouter: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewBorrow" component={NewBorrow} />
      <Stack.Screen name="BorrowDetail" component={BorrowDetail} />
    </Stack.Navigator>
  )
}

export { AppStackRouter }
