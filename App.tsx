/* eslint-disable camelcase */
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './src/context/AuthContext'
import { AppRoutes } from './src/routes'
import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  if (!fontsLoaded) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <SafeAreaProvider>
          <StatusBar
            style="light"
            translucent
            backgroundColor={theme.colors['gray-600']}
          />
          <AppRoutes />
        </SafeAreaProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}
