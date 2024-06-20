'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { images } from '../../public/lib/images.js'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade' // Импорт стилей для эффекта fade

import styles from '../styles/components/Slider.module.scss';

export default function Slider() {
    const paginationOptions = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} ${styles['swiper-pagination-bullet']}"></span>`;
        },
    };

    return (
        <Swiper
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            speed={1000} // Установлено для более мягкого перехода
            pagination={paginationOptions}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.slideContainer}>
                        <Image
                            className={styles.img}
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            
                            loading='lazy'
                        />
                        <div className={styles.slideOverlay} />
                    </div>
        
                </SwiperSlide>
            ))}
        </Swiper>
    );
}