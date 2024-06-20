'use client'
import { usePathname } from 'next/navigation'
import styles from '../styles/components/Header.module.scss'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className={`${styles.header} ${styles.header__main} ${isHomePage ? styles.header__transparent : styles.header__black}`}>
      <div className={`container`}>
        <div className={styles.header__inner}>
          <Logo/>
          <Menu/>
        </div>
      </div>
    </header>
  )
}

export default Header
