import { AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getPosts, getPostById } from '../services/postService'
// import { useBlogStore } from '../store/blogStore'
import { Post } from '../types'

export const usePosts = () => {
  // const { selectedAuthors, selectedCategories } = useBlogStore()

  return useQuery<Post[], AxiosError>({
    queryKey: ['posts'],
    queryFn: getPosts,
    // Next improvement would be to use the selectedAuthors and selectedCategories to filter the posts
    // enabled: !selectedAuthors.length && !selectedCategories.length,
  })
}

export const usePost = (id: string) => {
  return useQuery<Post, AxiosError>({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  })
}