// libraries
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

// css
import styles from './index.module.scss'

// utils
import { placeholder } from '@/utils/functions'

// interface
export interface ServiceBlockProps {
    title: string
    image: string
    href?: string
}

export default function ServiceBlock({
    title,
    image,
    href
}: ServiceBlockProps) {
    return (
        <Link
            href={href !== undefined ? href : ''}
            className={styles.serviceBlock}
        >
            <Image
                src={image && image}
                alt={title && title || ''}
                fill
                loading='lazy'
                placeholder={`data:image/svg+xml;base64,${placeholder()}`}
                sizes='
                    (min-width: 993px) 30vw,
                    (min-width: 993px) 50vw,
                    95vw
                '
                className={clsx(styles.image, 'cover')}
            />

            <p className={clsx('h4', styles.title)}>
                {title && title}
            </p>

        </Link>
    )
}