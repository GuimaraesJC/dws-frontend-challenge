import { useBlogStore } from '../../store/blogStore'

import { BiSortAlt2 } from 'react-icons/bi'
import styles from './SortByFilter.module.css'

function SortByFilter() {
  const { setSortBy, sortBy } = useBlogStore()

  const handleToggleSortBy = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className={styles.container} onClick={handleToggleSortBy}>
      <p className={styles.sortLabel}>Sort by:</p>
      <span className={styles.sortDirection}>
        {sortBy === 'asc' ? 'Oldest first' : 'Newest first'}
        <BiSortAlt2 className={styles.icon} />
      </span>
    </div>
  )
}

export default SortByFilter