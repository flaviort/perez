// libraries
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

// components
import Fancybox from '@/components/utils/fancybox'

// css
import styles from './index.module.scss'

// utils
import { placeholder } from '@/utils/functions'

// interface
export interface FeaturedArticleProps {
    title: string
    image: string
    videoUrl?: string
    href?: string
}

export default function FeaturedArticle({
    title,
    image,
    videoUrl,
    href
}: FeaturedArticleProps) {
    return (
        videoUrl ? (
            <Fancybox
                options={{
                    autoFocus: true,
                    dragToClose: false,
                    idle: false,
                    mainClass: 'fullscreen-fancybox'
                }}
            >
                <a
                    href={videoUrl}
                    data-fancybox='featured-video'
                    className={styles.featuredArticle}
                >

                    <Image
                        src={image}
                        alt={title && title || ''}
                        fill
                        loading='lazy'
                        placeholder={`data:image/svg+xml;base64,${placeholder()}`}
                        sizes='
                            (min-width: 993px) 80vw,
                            95vw
                        '
                        className={clsx(styles.image, 'cover')}
                    />

                    <div className={styles.bottom}>

                        <span className={styles.sub}>
                            Video
                        </span>

                        <span className={clsx('h3', styles.title)}>
                            {title && title}
                        </span>

                        <span className="button button--green font-title text-24">
                            Watch Now
                        </span>

                    </div>

                </a>
            </Fancybox>
        ) : (
            <Link
                href={href !== undefined ? href : ''}
                className={styles.featuredArticle}
            >
                <Image
                    src={image}
                    alt={title && title || ''}
                    fill
                    loading='lazy'
                    placeholder={`data:image/svg+xml;base64,${placeholder()}`}
                    sizes='
                        (min-width: 993px) 80vw,
                        95vw
                    '
                    className={clsx(styles.image, 'cover')}
                />

                <div className={styles.bottom}>

                    <span className={styles.sub}>
                        Blog
                    </span>

                    <span className={clsx('h3', styles.title)}>
                        {title && title}
                    </span>

                    <span className="button button--green font-title text-24">
                        Read article
                    </span>

                </div>
            </Link>
        )
    )
}