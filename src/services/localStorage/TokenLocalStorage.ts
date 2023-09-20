import AsyncStorage from '@react-native-async-storage/async-storage'
import { TOKEN_STORAGE } from '../../config/storageConfig'

interface ITokenSaveStorageInput {
  token: string
  refreshToken: string
}

export async function saveTokenInLocalStorage(data: ITokenSaveStorageInput) {
  await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(data))
}

export async function removeTokenFromLocalStorage() {
  await AsyncStorage.removeItem(TOKEN_STORAGE)
}
