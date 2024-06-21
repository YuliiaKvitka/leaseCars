'use client'
import { usePathname } from 'next/navigation'
import styles from '../styles/components/Header.module.scss'
import Logo from './Logo'
import Menu from './Menu'
import { useState } from 'react'
import Burger from './Burger'
import Modal from './Modal'
import Link from 'next/link'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

   const handleLinkClick = () => {
    closeMenu(); // Закрыть модальное окно при клике на ссылку
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className={`${styles.header} ${styles.header__main} ${isHomePage ? styles.header__transparent : styles.header__black}`}>
      <div className={`container`}>
        <div className={styles.header__inner}>
          <Logo/>
          <Menu />
           {/* Кнопка гамбургера для малых экранов */}
          {!menuOpen && (
            <Burger toggleMenu={toggleMenu} />
          )}

          {/* Модальное окно для маленьких экранов */}
          {menuOpen && 
            <Modal isOpen={menuOpen} onClose={closeMenu} onClick={handleLinkClick}/>}
        </div>
      </div>
    </header>
  )
}

export default Header
