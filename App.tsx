/* eslint-disable camelcase */
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './src/routes'
import { SignIn } from './src/screens/SignIn'
import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  if (!fontsLoaded) {
    return null
  }
  const isLogin = true
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          style="light"
          translucent
          backgroundColor={theme.colors['gray-600']}
        />
        {isLogin ? <AppRoutes /> : <SignIn />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
