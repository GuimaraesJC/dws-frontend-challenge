import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Post } from '../types'

type SortBy = 'asc' | 'desc'

type BlogStoreState = {
  // Data
  posts: Post[]

  // UI State
  selectedAuthors: string[]
  selectedCategories: string[]
  sortBy: SortBy

  // Actions
  setPosts: (posts: Post[]) => void
  setSelectedAuthors: (authors: string[]) => void
  setSelectedCategories: (categories: string[]) => void
  setSortBy: (sortBy: SortBy) => void
}

export const useBlogStore = create<BlogStoreState>()(
  persist(
    (set) => ({
      posts: [],
      selectedAuthors: [],
      selectedCategories: [],
      sortBy: 'asc',

      setPosts: (posts) => set({ posts }),
      setSelectedAuthors: (authors) => set({ selectedAuthors: authors }),
      setSelectedCategories: (categories) => set({ selectedCategories: categories }),
      setSortBy: (sortBy) => set({ sortBy }),
    }),
    {
      name: 'blog-store',
    })
)