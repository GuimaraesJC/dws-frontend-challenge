import { Link, useParams } from 'react-router'

import Button from '../../components/Button'
import LatestArticles from '../../components/LatestArticles'

import { usePost } from '../../hooks/usePosts'
import { formatDate } from '../../utils/formatDate'

import styles from './PostDetail.module.css'


function PostDetail() {
  const { id } = useParams()
  const { data: post } = usePost(id || '')

  return (
    <main className={styles.container}>
      <div className={styles.returnButtonContainer}>
        <Link to='/'>
          <Button action='return' variant='secondary' label='Back' />
        </Link>
      </div>
      <article className={styles.article}>
        <div>
          <h1 className={styles.title}>{post?.title}</h1>
        </div>

        <div className={styles.metadata}>
          <img src={post?.author.profilePicture} alt={`Picture of ${post?.author.name}`} />
          <div>
            <p>
              Written by: <span className={styles.authorName}>{post?.author.name}</span>
            </p>
            <span className={styles.createdAt}>{formatDate(post?.createdAt || '')}</span>
          </div>
        </div>

        <img className={styles.thumbnail} src={post?.thumbnail_url} alt="Descriptive image of this nice post :)" />

        <p className={styles.content}>{post?.content}</p>
      </article>

      <footer className={styles.latestArticles}>
        <span className={styles.latestLabel}>Latest Articles</span>
        <LatestArticles />
      </footer>
    </main>
  )
}

export default PostDetail