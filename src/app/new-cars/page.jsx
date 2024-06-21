"use client";

import { useState } from "react";
import Blog from "@/components/Blog";
import styles from "../../styles/pages/NewCars.module.scss";
import Button from "@/components/Button";

export default function NewCars() {
  const [activeTab, setActiveTab] = useState(0); // Установка начального состояния

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className={styles['new-cars']}>
      <div className="container">
        <div className="container-wrapper">
          <h2 className={`${styles['new-cars__title']} section-title`}>Choose your car</h2>
          <div className={styles.tabs}>
            <div className={styles.tabs__btn}>
              {/* ---------------------------------------- */}
              <button
                className={`${styles['tabs__btn-item']} ${activeTab === 0 ? styles.active : ''}`}
                onClick={() => handleTabClick(0)}
              >
                Car and Minivan
              </button>
              <button
                className={`${styles['tabs__btn-item']} ${activeTab === 1 ? styles.active : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Trucks
              </button>
              <button
                className={`${styles['tabs__btn-item']} ${activeTab === 2 ? styles.active : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Crossovers & SUVs
              </button>
              <button
                className={`${styles['tabs__btn-item']} ${activeTab === 3 ? styles.active : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Electrified
              </button>
              
            </div>
            {/* ------------------------------------------------------ */}
            <div className={styles.tabs__content}>
              <div className={`${styles['tabs__content-item']} ${activeTab === 0 ? styles.active : ''}`}>
                {/* Содержимое для вкладки "Car and Minivan" */}
                <div className={styles.card}>
                  <img src="/assets/cars/1.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Toyota Crown 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$ 650/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/2.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}> $ 450/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/3.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>  $ 400/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>


                <div className={styles.card}>
                  <img src="/assets/cars/4.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Hyundai Kona 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$510/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/1.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Toyota Crown 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$ 650/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/2.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}> $ 450/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/3.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>  $ 400/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>


                <div className={styles.card}>
                  <img src="/assets/cars/4.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Hyundai Kona 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$510/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/1.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Toyota Crown 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$ 650/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/2.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}> $ 450/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>

                <div className={styles.card}>
                  <img src="/assets/cars/3.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Prius Prime 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>  $ 400/mo</p>
                  </div>
                  <a href="##" className={styles.card__link}>see details</a>
                </div>


                <div className={styles.card}>
                  <img src="/assets/cars/4.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Hyundai Kona 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$510/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>

              </div>
              <div className={`${styles['tabs__content-item']} ${activeTab === 1 ? styles.active : ''}`}>
                {/* Содержимое для вкладки "Trucks" */}

                <div className={styles.card}>
                  <img src="/assets/cars/5.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Ford Explorer 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$1,013/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>
              </div>
              <div className={`${styles['tabs__content-item']} ${activeTab === 2 ? styles.active : ''}`}>
                {/* Содержимое для вкладки "Crossovers & SUVs" */}
                <div className={styles.card}>
                  <img src="/assets/cars/6.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>Santa  Fe 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$739/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>
              </div>
              <div className={`${styles['tabs__content-item']} ${activeTab === 3 ? styles.active : ''}`}>
                {/* Содержимое для вкладки "Electrified" */}
                <div className={styles.card}>
                  <img src="/assets/cars/7.jpg" alt='' className={styles.card__image} loading="lazy" />
                  <div className={styles.card__content}>
                    <h4 className={styles.card__title}>KIA Niro 2023</h4>
                    <p className={styles.h2card__text}>starting from $ 39900</p>
                    <p className={styles.card__price}>$554/mo</p>
                    </div>
                    <a href="##" className={styles.card__link}>see details</a>
                </div>
              </div>
            </div>
          </div>
          <Button/>
          {/* <Blog/> */}
        </div>
      </div>
    </section>
  );
}
