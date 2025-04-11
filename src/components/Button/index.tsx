import styles from './Button.module.css'

interface ButtonProps {
  action?: 'return' // open to more actions
  variant: 'primary' | 'secondary'
  label: string
}

function Button({ action, label, variant }: ButtonProps) {
  return (
    <button className={`${variant === 'primary' ? styles.btnPrimary : styles.btnSecondary} ${styles.btn}`}>
      {action === 'return' && (
        <span className={styles.icon}>
          ←
        </span>
      )}
      <span>
        {label}
      </span>
    </button>
  )
}

export default Button