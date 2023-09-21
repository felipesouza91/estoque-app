import AsyncStorage from '@react-native-async-storage/async-storage'
import { TOKEN_STORAGE } from '../../config/storageConfig'

interface ITokenStorageInput {
  token: string
  refreshToken: string
}

export async function saveTokenInLocalStorage(data: ITokenStorageInput) {
  await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(data))
}

export async function removeTokenFromLocalStorage() {
  await AsyncStorage.removeItem(TOKEN_STORAGE)
}

export async function loadTokenFromLocalStorage(): Promise<
  ITokenStorageInput | undefined
> {
  const data = await AsyncStorage.getItem(TOKEN_STORAGE)
  if (!data) {
    return undefined
  }
  return JSON.parse(data)
}
