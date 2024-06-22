import React from 'react';
import styles from '../styles/components/CarCard.module.scss';

const CarCard = ({ image, title, startingPrice, monthlyPrice, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__image} loading="lazy" />
      <div className={styles.card__content}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__text}>starting from ${startingPrice}</p>
        <p className={styles.card__price}>${monthlyPrice}/mo</p>
      </div>
      <a href={link} className={styles.card__link}>see details</a>
    </div>
  );
};

export default CarCard;
