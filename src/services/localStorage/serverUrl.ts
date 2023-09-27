import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_STORAGE } from '../../config/storageConfig'

export async function loadUrlFromLocalStorage() {
  const storage = await AsyncStorage.getItem(URL_STORAGE)
  return storage
}

export async function saveUrlInLocalStorage(url: string) {
  await AsyncStorage.setItem(URL_STORAGE, url)
}
