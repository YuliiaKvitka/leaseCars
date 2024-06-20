// src/app/page.jsx

import styles from './Home.module.scss'; 
import Slider from '@/components/Slider';


export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <div className="container">
          <h1 className={styles.top__title}>Leasing From D&M</h1>
          <a href="##" className={styles.top__link}>
            FIND A CAR
          </a>
        </div>
      </section>
      <Slider/>

{/* --------------------------------------------- */}
      <section className={styles['why-lease']}>
        <div className="container">
          <h2 className='section-title'>Why Lease with D&M?</h2>

          <ul className={styles["why-lease__list"]}>

            <li className={styles["why-lease__item"]}>
              <img src="/assets/why-lease/1.svg" alt="" className={styles["why-lease__item-img"]} width={150 } height={150 } loading='lazy' />
              <h3 className={styles["why-lease__item-title"]}>Top Dealers</h3>
              <p className={styles["why-lease__item-text"]}>TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.</p>
            </li>

            <li className={styles["why-lease__item"]}>
              <img src="/assets/why-lease/2.svg" alt="" className={styles["why-lease__item-img"]} width={150 } height={150 } loading='lazy' />
              <h3 className={styles["why-lease__item-title"]}>Discounted Pricing</h3>
              <p className={styles["why-lease__item-text"]}>View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.</p>
            </li>

            <li className={styles["why-lease__item"]}>
              <img src="/assets/why-lease/3.svg" alt="" className={styles["why-lease__item-img"]} width={150 } height={150 } loading='lazy' />
              <h3 className={styles["why-lease__item-title"]}>Lower Payments</h3>
              <p className={styles["why-lease__item-text"]}>Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.</p>
            </li>

            <li className={styles["why-lease__item"]}>
              <img src="/assets/why-lease/4.svg" alt="" className={styles["why-lease__item-img"]} width={150 } height={150 } loading='lazy' />
              <h3 className={styles["why-lease__item-title"]}>Easy Upgrade</h3>
              <p className={styles["why-lease__item-text"]}>Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable.</p>
            </li>

          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      <section className={styles['how-does']}>
        <div className="container">
          <div className={styles["how-does__inner"]}>
            <h2 className='section-title'>How Does Leasing Work?</h2>
            <p className={styles['how-does__text']}>Leasing a vehicle is essentially entering into a long term rental agreement for that vehicle. Unlike a traditional car purchase, you don’t actually own the vehicle. Instead, a leasing company purchases the vehicle from the dealer on your behalf and then you make monthly payments to the leasing company for the duration of your lease. Some leases however, do provide the option to purchase the vehicle at the end of the lease.</p>
            <h4 className="how-does__title">Similar to a short term car rental, there are rules that define:</h4>

            <ol className={styles["how-does__list"]}>

              <li className={styles["how-does__item"]}>How much you can drive, stated as annual miles (excess miles are charged at a specified rate)</li>

              <li className={styles["how-does__item"]}>Types of damage that you may be liable for at the end of your lease</li>

              <li className={styles["how-does__item"]}>The procedures and costs when you return the vehicle at the end of your lease</li>

            </ol>

            <p className={styles['how-does__text']}>Lease contracts are a commitment and ending them early can be difficult and expensive so it is important to consider your circumstances carefully before you decide.</p>
            </div>
        </div>
      </section>
      {/* ------------------------------------------- */}
      <section className={styles.video} >
        <div className="container">
          <h2 className={`section-title ${styles.video__title}`}>WELCOME TO D&M LEASING</h2>
          <p className={styles.video__text}>Find out how easy it is to lease from D&M</p>
          <iframe className={styles.video__content} width="1000" height="500" src="https://www.youtube.com/embed/-KkY8Hon2nA?si=Fp33lQ5kECBfrXJj&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      {/* ------------------------------------------- */}
      <section className={styles.important}>
        <div className="container">
          <h2 className={`section-title ${styles.important__title}`}>Important Things to Consider</h2>
          <p className={styles.important__text}>Depending on your circumstances and what is important to you, a lease could be a great option for your next vehicle. Below are some important factors that may influence your decision.</p>

          <ul className={styles.important__list}>

            <li className={styles.important__item}>
              <img src="/assets/important/1.jpg" alt="" className={styles['important__item-img']} width={270}
                height={150} loading='lazy' />
              <p className={styles['important__item-text']}>Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
            </li>

            <li className={styles.important__item}>
              <img src="/assets/important/2.jpg" alt="" className={styles['important__item-img']} width={270}
                height={150} loading='lazy' />
              <p className={styles['important__item-text']}>You may be eligible for a tax break if you use the leased vehicle for business purposes</p>
            </li>

            <li className={styles.important__item}>
              <img src="/assets/important/3.jpg" alt="" className={styles['important__item-img']} width={270}
                height={150} loading='lazy' />
              <p className={styles['important__item-text']}>Easy to upgrade to the newest vehicle model every few years</p>
            </li>

            <li className={styles.important__item}>
              <img src="/assets/important/4.jpg" alt="" className={styles['important__item-img']} width={270}
                height={150} loading='lazy' />
              <p className={styles['important__item-text']}>There are often fees charged if you drive more than your lease's mileage allowance</p>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}
