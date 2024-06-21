// Modal.js
import React from 'react';
import styles from '../styles/components/Modal.module.scss';
import Link from 'next/link';

const Modal = ({ isOpen, onClose,  onClick}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <nav className={styles.modalMenu}>
          <ul className={styles.modalMenu__list}>
            <li className={styles.modalMenu__item}><Link onClick={onClick} href="/new-cars">NEW CARS</Link></li>
                  <li className={styles.modalMenu__item}><Link onClick={onClick} href="/#sec2">PRE-OWNED CARS</Link></li>
                  <li className={styles.modalMenu__item}><Link onClick={onClick} href="/#sec3">FINANCE</Link></li>
                  <li className={styles.modalMenu__item}><Link onClick={onClick} href="/#sec4">LEASE VS BUY</Link></li>
                  <li className={styles.modalMenu__item}><Link onClick={onClick} href="/contacts">CONTACT US</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Modal;