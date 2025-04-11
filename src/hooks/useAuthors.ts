import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getAuthors } from '../services/authorService'
import { Author } from '../types'

export const useAuthors = () => {
  return useQuery<Author[], AxiosError>({
    queryKey: ['authors'],
    queryFn: getAuthors,
  })
}