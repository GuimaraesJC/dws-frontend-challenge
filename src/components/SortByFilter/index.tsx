import SortIcon from '../../assets/icons/sort.svg?react'

import styles from './SortByFilter.module.css'

function SortByFilter() {
  return (
    <div className={styles.container}>
      <p className={styles.sortLabel}>Sort by:</p>
      <span className={styles.sortDirection}>
        Newest first
        <SortIcon className={styles.icon} />
      </span>
    </div>
  )
}

export default SortByFilter