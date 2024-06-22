'use client'

import { useState } from 'react';
import ModalForm from './ModalForm';
import styles from '../styles/components/Form.module.scss';

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Симуляция отправки данных
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setIsModalOpen(true);

            // Сброс состояния isSubmitted через 5 секунд
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 2000);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles['form__input-group']}>
                    <input type="text" className={styles.form__input} placeholder='Name' required />
                    <input type="email" className={styles.form__input} placeholder='E-mail' required />
                </div>
                <textarea className={styles.form__textarea} placeholder='Your text' required></textarea>
                <button 
                    className={`${styles.form__button} ${isSubmitting ? styles.submitting : ''} ${isSubmitted ? styles.submitted : ''}`} 
                    type='submit' 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'SUBMIT'}
                </button>
            </form>

            <ModalForm isOpen={isModalOpen} onClose={closeModal}>
                <h3 className={styles['modal__title']}>Message Received</h3>
                <p className={styles['modal__text']}>Thank you for contacting us. We will respond to you shortly.</p>
                <button className={styles['modal__button']} onClick={closeModal}>Close</button>
            </ModalForm>
        </>
    );
}

export default Form;
