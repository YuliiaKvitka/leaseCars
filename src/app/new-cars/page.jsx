

'use client';

import { useState } from 'react';
import Blog from '@/components/Blog';
import Button from '@/components/Button';
import CarCard from '@/components/CarCard';
import carData from '../../../public/data/CardData.js';
import styles from '../../styles/pages/NewCars.module.scss';

export default function NewCars() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderCars = (categoryIndex) => {
    return carData[categoryIndex].cars.map((car, index) => (
      <CarCard
        key={index}
        image={car.image}
        title={car.title}
        startingPrice={car.startingPrice}
        monthlyPrice={car.monthlyPrice}
        link={car.link}
      />
    ));
  };

  return (
    <section className={styles['new-cars']}>
      <div className="container">
        <div className="container-wrapper">
          <h2 className={`${styles['new-cars__title']} section-title`}>Choose your car</h2>
          <div className={styles.tabs}>
            <div className={styles.tabs__btn}>
              {carData.map((category, index) => (
                <button
                  key={index}
                  className={`${styles['tabs__btn-item']} ${activeTab === index ? styles.active : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {category.category}
                </button>
              ))}
            </div>
            <div className={styles.tabs__content}>
              {carData.map((category, index) => (
                <div
                  key={index}
                  className={`${styles['tabs__content-item']} ${activeTab === index ? styles.active : ''}`}
                >
                  {renderCars(index)}
                </div>
              ))}
            </div>
          </div>
          <Button />
          <Blog />
        </div>
      </div>
    </section>
  );
}
