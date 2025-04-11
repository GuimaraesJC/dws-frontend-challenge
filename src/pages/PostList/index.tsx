
import { Link } from 'react-router'
import PostItem from '../../components/PostItem'
import Sidebar from '../../components/Sidebar'
import { usePosts } from '../../hooks/usePosts'

import styles from './PostList.module.css'

function PostList() {
  const { data: posts } = usePosts()


  return (
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
  )
}

export default PostList