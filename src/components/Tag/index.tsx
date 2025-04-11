import styles from './Tag.module.css'

interface TagProps {
  content: string
}

function Tag({ content }: TagProps) {
  return (
    <div className={styles.container}>
      <span className="tag-text">{content}</span>
    </div>
  )
}

export default Tag