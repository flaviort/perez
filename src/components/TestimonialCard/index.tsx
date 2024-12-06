// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import Fancybox from '@/components/utils/fancybox'

// svg
import { Play } from '@/assets/svg/ux'

// css
import styles from './index.module.scss'

// interface
export interface TestimonialCardProps {
    name: string
    image: {
        url: string
        blurDataURL?: string
        priority?: boolean
    }
    videoUrl: string
}

export default function TestimonialCard({
    name,
    image,
    videoUrl
}: TestimonialCardProps) {
    return (
        <Fancybox
            options={{
                autoFocus: true,
                dragToClose: false,
                idle: false,
                mainClass: 'fullscreen-fancybox'
            }}
        >
            <a
                href={videoUrl && videoUrl || ''}
                data-fancybox='testimonial-card'
                className={styles.testimonialCard}
            >

                <Image
                    src={image.url && image.url}
                    alt={name && name || ''}
                    fill
                    priority={image.priority}
                    sizes='
                        (min-width: 993px) 33vw,
                        50vw
                    '
                    className={clsx(styles.image, 'cover')}
                />

                <div className={styles.bottom}>

                    <span className={clsx('h3', styles.name)}>
                        {name && name}
                    </span>

                    <span className={styles.play}>
                        <Play />
                    </span>

                </div>

            </a>
        </Fancybox>
    )
}