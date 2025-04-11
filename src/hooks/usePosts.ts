import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../services/postService'
import { Post } from '../types'

export const usePosts = () => {
  return useQuery<Post[], AxiosError>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}