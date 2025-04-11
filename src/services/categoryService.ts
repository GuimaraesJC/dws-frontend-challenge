import api from './api'
import { Category } from '../types'

export const getCategories = async () => {
  const response = await api.get<Category[]>('/categories')
  return response.data
}

export const getCategoryById = async (id: string) => {
  const response = await api.get<Category>(`/categories/${id}`)
  return response.data
}