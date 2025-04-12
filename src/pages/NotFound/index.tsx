import { Link } from 'react-router'

import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <strong>404</strong> - Page not found
        <br />
        <br />
        The page you are looking for does not exist.
        <br />
        Please check the URL or return to the homepage.
        <br />
        <br />
        <Link to="/">Go to Homepage</Link>
      </p>
    </div>
  )
}

export default NotFound