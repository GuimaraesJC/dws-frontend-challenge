import { useBlogStore } from '../../store/blogStore'

import Button from '../Button'
import { GiSettingsKnobs } from 'react-icons/gi'

import styles from './Sidebar.module.css'

function Sidebar() {
  const { authors, categories } = useBlogStore()

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
      <GiSettingsKnobs className={styles.icon} />
        <h2 className={styles.title}>Filters</h2>
      </header>

      <main>
        <section>
          <span className={styles.filterIndicator}>
            Category
          </span>
          {categories?.map((category) => (
            <div key={category.id} className={styles.filterItem}>
              {category.name}
            </div>
          ))}
        </section>

        <section>
          <span className={styles.filterIndicator}>
            Author
          </span>
          {authors?.map((author) => (
            <div key={author.id} className={styles.filterItem}>
              {author.name}
            </div>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <Button label="Apply filters" variant="primary" />
      </footer>
    </aside>
  )
}
export default Sidebar