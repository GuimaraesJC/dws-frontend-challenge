import styles from './Topbar.module.css'

import SearchIcon from '../../assets/icons/search.svg?react'

function Topbar() {
  return (
    <header className={styles.container}>
      <h1>DWS</h1>
      <div className={styles.searchWrapper}>
      <input className={styles.input} type="text" placeholder="Search" />
      <button className={styles.button}>
        <SearchIcon className={styles.icon} />
      </button>
      </div>
    </header>
  )
}

export default Topbar