import { IoMdSearch } from 'react-icons/io'
import Logo from '../../assets/logo.png'
import styles from './Topbar.module.css'


function Topbar() {
  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={Logo} alt="Dentsu World Services" />
        <span className={styles.logoComplement}>world services</span>
      </div>
      <div className={styles.searchWrapper}>
        <input className={styles.input} type="text" placeholder="Search" />
        <button className={styles.button}>
          <IoMdSearch className={styles.icon} />
        </button>
      </div>
    </header>
  )
}

export default Topbar