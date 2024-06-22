import styles from '../styles/components/ModalForm.module.scss';

const ModalForm = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <button className={styles.modal__close} onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
}

export default ModalForm;
