import { useCategories } from '../../hooks/useCategories'
import { useAuthors } from '../../hooks/useAuthors'

import Button from '../Button'
import FilterIcon from '../../assets/icons/filter.svg?react'

import styles from './Sidebar.module.css'

function Sidebar() {
  const { data: categories } = useCategories()
  const { data: authors } = useAuthors()

  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <FilterIcon className={styles.icon} />
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