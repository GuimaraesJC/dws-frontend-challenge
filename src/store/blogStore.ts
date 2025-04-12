import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Post, Author, Category } from '../types'

type SortBy = 'asc' | 'desc'

type BlogStoreState = {
  // Data
  posts: Post[]
  authors: Author[]
  categories: Category[]

  // UI State
  selectedAuthors: Author[]
  selectedCategories: Category[]
  sortBy: SortBy

  filteredPosts: Post[]

  // Actions
  setPosts: (posts: Post[]) => void
  setAuthors: (authors: Author[]) => void
  setCategories: (categories: Category[]) => void

  setSelectedAuthors: (author: Author) => void
  setSelectedCategories: (category: Category) => void
  setSortBy: (sortBy: SortBy) => void

  setFilteredPosts: () => void
  
  resetSelectedAuthors: () => void
  resetSelectedCategories: () => void
}

export const useBlogStore = create<BlogStoreState>()(
  persist(
    (set) => ({
      posts: [],
      authors: [],
      categories: [],

      selectedAuthors: [],
      selectedCategories: [],
      sortBy: 'desc',

      filteredPosts: [],

      setPosts: (posts) => set({ posts }),
      setAuthors: (authors) => set({ authors }),
      setCategories: (categories) => set({ categories }),
      setSelectedAuthors: (author) => set((state) => {
        const alreadySelected = state.selectedAuthors.includes(author)

        return {
          selectedAuthors: alreadySelected
            ? state.selectedAuthors.filter((a) => a.id !== author.id)
            : [...state.selectedAuthors, author],
        }
      }),
      setSelectedCategories: (category) => set((state) => {
        const alreadySelected = state.selectedCategories.includes(category)

        return {
          selectedCategories: alreadySelected
            ? state.selectedCategories.filter((c) => c.id !== category.id)
            : [...state.selectedCategories, category],
        }
      }),
      setSortBy: (sortBy) => set({ sortBy }),

      setFilteredPosts: () => set((state) => {
        const { posts, selectedAuthors, selectedCategories } = state
      
        const filtered = posts.filter((post) => {
          const matchesAuthor = selectedAuthors.length === 0
            || selectedAuthors.some((author) => author.id === post.author.id)
      
          const matchesCategory = selectedCategories.length === 0
            || selectedCategories.some((category) =>
              post.categories.includes(category)
            )
      
          return matchesAuthor && matchesCategory
        })

        // Sort logic would go here
      
        return { filteredPosts: filtered }
      }),

      resetSelectedAuthors: () => set({ selectedAuthors: [] }),
      resetSelectedCategories: () => set({ selectedCategories: [] }),
    }),
    {
      name: 'blog-store',
    })
)