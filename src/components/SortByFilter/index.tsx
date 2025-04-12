import { BiSortAlt2 } from 'react-icons/bi'
import styles from './SortByFilter.module.css'

function SortByFilter() {
  return (
    <div className={styles.container}>
      <p className={styles.sortLabel}>Sort by:</p>
      <span className={styles.sortDirection}>
        Newest first
        <BiSortAlt2 className={styles.icon} />
      </span>
    </div>
  )
}

export default SortByFilter