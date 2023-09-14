import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useTheme } from 'styled-components'
import { History } from '../screens/History'
import { AppStackRouter } from './app.stack.route'
const Tab = createBottomTabNavigator()

const AppTabRoutes: React.FC = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors['primary-700'],
        tabBarInactiveTintColor: theme.colors['gray-200'],
        tabBarStyle: {
          height: 70,
          backgroundColor: theme.colors['gray-500'],
        },
        tabBarLabelStyle: {
          fontFamily: theme.fontFamily.regular,
          fontSize: theme.fontSize.lg,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={AppStackRouter}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          title: 'Historico',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-search-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export { AppTabRoutes }
