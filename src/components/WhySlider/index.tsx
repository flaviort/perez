'use client'

// libraries
import clsx from 'clsx'
import { useRef } from 'react'
import { Swiper as SwiperCore } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'

// css
import styles from './index.module.scss'

export default function WhySlider() {

    const sliderRef = useRef<SwiperCore | null>(null)
    
    return (
        <section className={clsx(styles.why, 'py-small')}>
            <div className='container z3'>

                <div className={clsx(styles.top, 'pb-smaller')}>

                    <h2 className='h2'>
                        Why Choose Perez Wellness Center?
                    </h2>

                    <p>
                        At Perez Wellness Center, <strong>your health comes first.</strong> Dr. Perez takes a thoughtful, holistic approach to chiropractic care, understanding that each individual is different, and so are their health goals. She believes in:
                    </p>

                </div>

                <Swiper
                    modules={[Mousewheel]}
                    className={styles.slider}
                    spaceBetween={15}
                    slidesPerView={1.1}
                    loop={false}
                    mousewheel={{  
                        forceToAxis: true
                    }}
                    onSwiper={(swiper) => (sliderRef.current = swiper)}
                    breakpoints={{
                        575: {
                            slidesPerView: 2.2,
                            spaceBetween: 15
                        },
                        992: {
                            slidesPerView: 3.2,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    {[
                        {
                            title: 'Empathy and Understanding:',
                            text: 'Because Dr. Perez has walked her own health journey, she deeply understands the importance of feeling listened to and cared for.'
                        },
                        {
                            title: 'Personalized Wellness Plans:',
                            text: 'No two patients are alike. Your treatment plan is designed specifically for you, with a focus on addressing your immediate concerns while promoting long-term health.'
                        },
                        {
                            title: 'Comprehensive Care for All Ages:',
                            text: 'From children to seniors, Dr. Perez’s approach is safe, gentle, and effective for every stage of life.'
                        },
                        {
                            title: 'Commitment to Education:',
                            text: 'We believe that knowledge is power. Dr. Perez ensures you’re informed every step of the way, helping you understand your body and empowering you to make the best choices for your health.'
                        }
                    ].map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className={clsx(styles.block, 'bg-gray-darker p-smaller p-md-smallest')}>

                                <h3 className='h4 green'>
                                    {item.title}
                                </h3>

                                <p className='white'>
                                    {item.text}
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    )
}