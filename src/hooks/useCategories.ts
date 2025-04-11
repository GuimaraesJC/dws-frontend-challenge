import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/categoryService'
import { Category } from '../types'

export const useCategories = () => {
  return useQuery<Category[], AxiosError>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
}