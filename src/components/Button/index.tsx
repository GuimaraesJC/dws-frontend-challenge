import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  label: string
}

function Button({ label, variant }: ButtonProps) {
  return (
    <button className={`${variant === 'primary' ? styles.btnPrimary : styles.btnSecondary} ${styles.btn}`}>   
      {label}
    </button>
  )
}

export default Button