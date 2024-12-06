// libraries
import clsx from 'clsx'

// css
import styles from './index.module.scss'

// interface
export interface GrayBlockProps {
    className?: string
    title?: string
    text: string
}

export default function GrayBlock({
    className,
    title,
    text
}: GrayBlockProps) {
    return (
        <div className={clsx(styles.grayBlock, className)}>
            <div className='container'>
                <div className={clsx(styles.block, 'bg-gray-darker white p-small px-md-medium px-lg-big px-xl-bigger')}>

                    {title && (
                        <h2 className='h3'>
                            {title}
                        </h2>
                    )}

                    <div
                        className={styles.text}
                        dangerouslySetInnerHTML={{ __html: text }}
                    />

                </div>
            </div>

        </div>
    )
}