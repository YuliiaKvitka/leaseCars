import Link from 'next/link'
import styles from '../styles/components/Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>

                <li className={styles['menu__list-item']}>
                    <a href="/new-cars" className={styles['menu__list-link']}>NEW CARS</a>
                </li>

                <li className={styles['menu__list-item']}>
                    <Link href="##" className={styles['menu__list-link']}>PRE-OWNED CARS</Link>
                </li>

                <li className={styles['menu__list-item']}>
                    <Link href="##" className={styles['menu__list-link']}>FINANCE</Link>
                </li>

                <li className={styles['menu__list-item']}>
                    <Link href="##" className={styles['menu__list-link']}>LEASE VS BUY</Link>
                </li>

                <li className={styles['menu__list-item']}>
                    <Link href="/contacts" className={styles['menu__list-link']} >CONTACT US</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Menu
