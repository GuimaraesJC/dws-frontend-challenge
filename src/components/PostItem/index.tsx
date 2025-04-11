import Tag from '../Tag'
import { formatDate } from '../../utils/formatDate'
import { Post } from '../../types'
import styles from './PostItem.module.css'

interface PostItemProps {
  post: Post
}

function PostItem({ post: { author, content, title, thumbnail_url, createdAt, categories } }: PostItemProps) {
  return (
    <article className={styles.container}>
      <img className={styles.thumbnail} src={thumbnail_url} alt="Description of thumbnail for better UX" />
      <main className={styles.main}>
        <div className={styles.metadata}>
          <span className={styles.createdAt}>{formatDate(createdAt)}</span>
          <span>{author.name}</span>
        </div>
        <p className={styles.postContent}>
          <h3 className={styles.postTitle}>{title}</h3>
          <p className={styles.postDescription}>{content}</p>
        </p>
      </main>
      <footer className={styles.footer}>
        {categories.map(category => (
          <Tag key={category.id} content={category.name} />
        ))}
      </footer>
    </article>
  )
}

export default PostItem