// libraries
import clsx from 'clsx'

// css
import styles from './index.module.scss'

// interface
export interface GoogleReviewProps {
    date: string
    name: string
    review: string
}

export default function GoogleReview({
    date,
    name,
    review
}: GoogleReviewProps) {
    return (
        <div className={styles.googleReview}>

            <p className={styles.date}>
                {date}
            </p>

            <h3 className={clsx('text-24', styles.title)}>
                <strong>
                    {name}
                </strong>
            </h3>

            <p className={styles.review}>
                {review}
            </p>

        </div>
    )
}