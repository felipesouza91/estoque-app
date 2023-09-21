import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_STORAGE } from '../../config/storageConfig'
import { UserDTO } from '../dto/UserDTO'

export async function saveUserInLocalStorage(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function loadUserFromLocalStorage(): Promise<UserDTO | undefined> {
  const data = await AsyncStorage.getItem(USER_STORAGE)
  if (!data) {
    return undefined
  }
  return JSON.parse(data)
}

export async function removeUserFromLocalStorage() {
  await AsyncStorage.removeItem(USER_STORAGE)
}
