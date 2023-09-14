import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import { BorrowDetail } from '../screens/BorrowDetail'
import { Home } from '../screens/Home'
import { NewBorrow } from '../screens/NewBorrow'

type IRootStackParamList = {
  Home: undefined
  NewBorrow: undefined
  BorrowDetail: { data: any }
}

export type AppStackNavigationProp = StackNavigationProp<IRootStackParamList>

const Stack = createStackNavigator<IRootStackParamList>()

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
