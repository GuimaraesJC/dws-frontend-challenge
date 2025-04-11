import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SortBy = 'asc' | 'desc'

type InterfaceStoreState = {
  // UI State
  selectedAuthors: string[]
  selectedCategories: string[]
  sortBy: SortBy

  // Actions
  setSelectedAuthors: (authors: string[]) => void
  setSelectedCategories: (categories: string[]) => void
  setSortBy: (sortBy: SortBy) => void
}

export const useInterfaceStore = create<InterfaceStoreState>()(
  persist(
    (set) => ({
      selectedAuthors: [],
      selectedCategories: [],
      sortBy: 'asc',

      setSelectedAuthors: (authors) => set({ selectedAuthors: authors }),
      setSelectedCategories: (categories) => set({ selectedCategories: categories }),
      setSortBy: (sortBy) => set({ sortBy }),
    }),
    {
      name: 'user-interface-store',
    })
)