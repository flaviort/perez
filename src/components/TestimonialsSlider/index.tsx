'use client'

// libraries
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'

// components
import TestimonialCard from '@/components/TestimonialCard'

// data / utils
import { testimonials } from '@/db/testimonials'

// css
import styles from './index.module.scss'

// interface
export interface TestimonialsSliderProps {
    className?: string
    title?: React.ReactNode
}

export default function TestimonialsSlider({
    className,
    title
}: TestimonialsSliderProps) {
    return (
        <section className={clsx(styles.testimonials, className)}>
            <div className='container'>

                {title && (
                    <h2
                        className='h2 mb-smaller'
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}

                <Swiper
                    modules={[Mousewheel]}
                    className={styles.slider}
                    spaceBetween={15}
                    slidesPerView={1.2}
                    loop={false}
                    mousewheel={{  
                        forceToAxis: true
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {testimonials.slice(0, 3).map((item, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard
                                name={item.name}
                                image={item.image}
                                videoUrl={item.videoUrl}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}