
import { useEffect } from 'react'
import { Link } from 'react-router'
import PostItem from '../../components/PostItem'
import Sidebar from '../../components/Sidebar'
import SortByFilter from '../../components/SortByFilter'

import { usePosts } from '../../hooks/usePosts'
import { useBlogStore } from '../../store/blogStore'

import styles from './PostList.module.css'

function PostList() {
  const { data: posts } = usePosts()
  const setPosts = useBlogStore(state => state.setPosts)

  useEffect(() => {
    if (posts) {
      setPosts(posts)
    }
  }, [posts, setPosts])

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.blogName}>DWS Blog</h1>
        <SortByFilter />
      </div>
      <section className={styles.home}>
        <Sidebar />
        <main className={styles.main}>
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