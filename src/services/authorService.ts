import api from './api'
import { Author } from '../types'

export const getAuthors = async () => {
  const response = await api.get<Author[]>('/authors')
  return response.data
}

export const getAuthorById = async (id: string) => {
  const response = await api.get<Author>(`/authors')/${id}`)
  return response.data
}