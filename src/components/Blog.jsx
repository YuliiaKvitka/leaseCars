import styles from '../styles/components/Blog.module.scss'
import Button from './Button'

const Blog = () => {
    return (
        <div className='container'>
            <div className={styles.blog__items}>
                <div className={styles.blog__item}>
                    <img src="/assets/blog/1.jpg" alt="" className={styles['blog__item-img']} width={580} height={260} loading='lazy' />
                    <h4 className={styles['blog__item-title']}>An easier way to buy your next Toyota</h4>
                    <a href="##" className={styles['blog__item-link']}>more</a>
                </div>

                <div className={styles.blog__item}>
                    <img src="/assets/blog/2.jpg" alt="" className={styles['blog__item-img']} width={580} height={260} loading='lazy' />
                    <h4 className={styles['blog__item-title']}>A Guide to Road-Tripping With Pets</h4>
                    <a href="##" className={styles['blog__item-link']}>more</a>
                </div>

            </div>

            <Button/>
        </div>
    )
}

export default Blog
