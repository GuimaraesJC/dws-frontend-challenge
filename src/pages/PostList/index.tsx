
import { useEffect } from 'react'
import { Link } from 'react-router'
import PostItem from '../../components/PostItem'
import Sidebar from '../../components/Sidebar'
import SortByFilter from '../../components/SortByFilter'
import Dropdown from '../../components/Dropdown'

import { usePosts } from '../../hooks/usePosts'
import { useAuthors } from '../../hooks/useAuthors'
import { useCategories } from '../../hooks/useCategories'
import { useBlogStore } from '../../store/blogStore'

import { Author, Category } from '../../types'
import styles from './PostList.module.css'

function PostList() {
  const { data: posts } = usePosts()
  const { data: authors } = useAuthors()
  const { data: categories } = useCategories()

  const setPosts = useBlogStore(state => state.setPosts)
  const setAuthors = useBlogStore(state => state.setAuthors)
  const setCategories = useBlogStore(state => state.setCategories)

  const {
    setSelectedCategories,
    setSelectedAuthors,
    resetSelectedCategories,
    resetSelectedAuthors,
    selectedCategories,
    selectedAuthors,
  } = useBlogStore()

  const onSelectCategory = (category: Category) => {
    setSelectedCategories(category)
  }

  const onSelectAuthor = (author: Author) => {
    setSelectedAuthors(author)
  }

  useEffect(() => {
    if (posts) {
      setPosts(posts)
    }

    if (authors) {
      setAuthors(authors)
    }

    if (categories) {
      setCategories(categories)
    }
  }, [posts, authors, categories, setAuthors, setCategories, setPosts])

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.blogName}>DWS Blog</h1>
        <SortByFilter />
      </div>
      <section className={styles.home}>
        <Sidebar />
        <section className={styles.mobileFilters}>
          <Dropdown
            label="Category"
            options={categories || []}
            onSelectFn={(option) => onSelectCategory(option as Category)}
            onClearFn={resetSelectedCategories}
            selectedOptions={selectedCategories}
          />

          <Dropdown
            label="Authors"
            options={authors || []}
            onSelectFn={(option) => onSelectAuthor(option as Author)}
            onClearFn={resetSelectedAuthors}
            selectedOptions={selectedAuthors}
          />

          <SortByFilter />

        </section>
        <main className={styles.main}>
          {/* Next improvement would be to use the list of filtered posts if available on the store */}
          {posts?.map(post => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <PostItem post={post} />
            </Link>
          ))}
        </main>
      </section>
    </>
  )
}

export default PostList