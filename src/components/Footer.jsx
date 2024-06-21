import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>

        <nav className={styles.footer__menu}>

          <ul className={styles["footer__menu-list"]}>
            <li className={styles["footer__menu-item"]}><h2  className={styles["footer__menu-title"]}>Products</h2></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Used</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>New</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Sell your car</a></li>
          </ul>

          <ul className={styles["footer__menu-list"]}>
            <li className={styles["footer__menu-item"]}><h2 href="##" className={styles["footer__menu-title"]}>Resources</h2></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Blog</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>FAQ</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Contact us</a></li>
          </ul>

          <ul className={styles["footer__menu-list"]}>
            <li className={styles["footer__menu-item"]}><h2 href="##" className={styles["footer__menu-title"]}>Work With TrueCar</h2></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Dealers</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Partners</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}></a></li>
          </ul>

          <ul className={styles["footer__menu-list"]}>
            <li className={styles["footer__menu-item"]}><h2 href="##" className={styles["footer__menu-title"]}>About</h2></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>About us</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Team</a></li>
            <li className={styles["footer__menu-item"]}><a href="##" className={styles["footer__menu-link"]}>Careers</a></li>
          </ul>

        </nav>

        <ul className={styles.footer__app}>

          <li className={styles.app__item}>
            <a href="##" className={styles.app__link}>
              <img src="/assets/app/app-ios.svg" alt="App Store" className="app__img" width={168} height={50} loading='lazy'/>
            </a>
          </li>

          <li className={styles.app__item}>
            <a href="##" className={styles.app__link}>
              <img src="/assets/app/app-android.svg" alt="Google play" className="app__img" width={168} height={50} loading='lazy'/>
            </a>
          </li>

        </ul>

        <div className={styles.footer__copyright}>
          <p className={styles['footer__copyright-text']}>For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.
            Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and complete the TrueCar Dealer Certification Program.
          </p>
          <p className={styles['footer__copyright-text']}>TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles     shown on this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className={styles['footer__nav-extra']}>
          <ul className={styles['footer__nav-extra-list']}>
            <li className={styles['footer__nav-extra-item']}><a href='##' className={styles['footer__nav-extra-link']} target='_blank'>Terms of Service</a></li>
            <li className={styles['footer__nav-extra-item']}><a href='##' className={styles['footer__nav-extra-link']} target='_blank'>Privacy Policy</a></li>
            <li className={styles['footer__nav-extra-item']}><a href='##' className={styles['footer__nav-extra-link']} target='_blank'>Do Not Sell My Personal Information</a></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer
