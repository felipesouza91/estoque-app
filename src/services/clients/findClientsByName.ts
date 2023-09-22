import { AxiosError } from 'axios'
import { api } from '../../api'
import { ClientDTO } from '../dto/ClientDTO'

export async function findClientsByName(name: string): Promise<ClientDTO[]> {
  try {
    const { data } = await api.get('/clientes', {
      params: {
        fantazia: name,
      },
    })
    const result = data.content.map(({ id, fantazia, razaoSocial }) => ({
      id,
      tradingName: fantazia,
      companyName: razaoSocial,
    }))
    return result
  } catch (error) {
    console.log(error)
    const { request } = error as AxiosError
  }
}
