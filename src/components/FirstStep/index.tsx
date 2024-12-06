// libraries
import clsx from 'clsx'

// css
import styles from './index.module.scss'

export default function FirstStep() {
    return (
        <section className={clsx(styles.firstStep, 'pt-smaller pt-md-small')}>
            <div className='container'>
                <div className={styles.wrapper}>

                    <h2 className='h2'>
                        Ready to Take <br />
                        the First Step?
                    </h2>

                    <p>
                        Your health journey is important, and <strong>you deserve care that reflects that.</strong> At Perez Wellness Center, we’re committed to walking alongside you—every step of the way. Schedule a consultation today and discover the difference that personalized, holistic care can make in your life.
                    </p>

                </div>
            </div>
        </section>
    )
}