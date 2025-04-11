import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getPosts, getPostById } from '../services/postService'
import { Post } from '../types'

export const usePosts = () => {
  return useQuery<Post[], AxiosError>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}

export const usePost = (id: string) => {
  return useQuery<Post, AxiosError>({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  })
}