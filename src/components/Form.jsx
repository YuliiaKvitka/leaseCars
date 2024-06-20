import styles from '../styles/components/Form.module.scss'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles['form__input-group']}>
                <input type="text" className={styles.form__input} placeholder='Name' />
                <input type="email" className={styles.form__input} placeholder='E-mail' />
            </div>
            <textarea className={styles.form__textarea} placeholder='Your text'></textarea>
            <button className={styles.form__button} type='submit'>SUBMIT</button>
        </form>
    )
}

export default Form;


