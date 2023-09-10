/* eslint-disable camelcase */
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { BorrowDetail } from './src/screens/BorrowDetail'
import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          style="light"
          translucent
          backgroundColor={theme.colors['gray-600']}
        />
        <BorrowDetail />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
