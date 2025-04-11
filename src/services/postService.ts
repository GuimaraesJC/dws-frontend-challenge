import api from './api'
import { Post } from '../types'

export const getPosts = async () => {
  const response = await api.get<Post[]>('/posts')
  return response.data
}

export const getPostById = async (id: string) => {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}