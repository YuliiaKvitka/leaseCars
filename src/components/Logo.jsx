import styles from '../styles/components/Logo.module.scss'

const Logo = () => {
  return (
      <a href="/" className={styles.logo}>
      <img src="/assets/logo/logo.svg" alt="" className={styles.logo__img} width={83 } height={55} loading='lazy' />
          </a>
  )
}

export default Logo
