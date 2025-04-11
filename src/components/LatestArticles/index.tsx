
import { Link } from 'react-router'

import PostItem from '../PostItem'

import { useBlogStore } from '../../store/blogStore'
import styles from './LatestArticles.module.css'

function LatestArticles() {
  const posts = useBlogStore(state => state.posts)

  return (
    <section className={styles.container}>
      {posts.slice(0, 3).map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <PostItem post={post} />
        </Link>
      ))}

    </section>
  )
}

export default LatestArticles