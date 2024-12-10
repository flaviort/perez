// libraries
import clsx from 'clsx'
import Image from 'next/image'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from './index.module.scss'

// utils
import { placeholder } from '@/utils/functions'

// interface
export interface InternalBannerProps {
    className?: string
    image: string
    subTitle?: string
    title?: string
    desc?: string
    children?: React.ReactNode
}

export default function InternalBanner({
    className,
    image,
    subTitle,
    title,
    desc,
    children
}: InternalBannerProps) {
    return (
        <section className={clsx(
            styles.internalBanner,
            'pt-smaller pb-md-small pb-xl-smaller',
            className
        )}>
            
            <Leaf className={styles.leaf} />
            <LeafOutline className={styles.leafOutline} />

            <div className='container relative z2'>
                <div className={styles.wrapper}>

                    <div className={styles.bgGreen}></div>

                    <div className='row relative z2'>

                        <div className={clsx('col-md-6', styles.left)}>
                            <div className={styles.image}>
                                <Image
                                    src={image}
                                    alt={title && title || ''}
                                    fill
                                    priority
                                    placeholder={`data:image/svg+xml;base64,${placeholder()}`}
                                    sizes='
                                        (min-width: 993px) 50vw,
                                        98vw
                                    '
                                    className='cover'
                                />
                            </div>
                        </div>

                        <div className={clsx('col-md-6', styles.right)}>

                            {subTitle && (
                                <h3 className={clsx('h4 white', styles.subTitle)}>
                                    {subTitle}
                                </h3>
                            )}

                            {title && (
                                <h1 className={clsx('h2 white', styles.title)}>
                                    {title}
                                </h1>
                            )}

                            {desc && (
                                <p className={styles.desc}>
                                    {desc}
                                </p>
                            )}

                            {children && children}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}