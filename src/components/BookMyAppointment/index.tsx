// libraries
import clsx from 'clsx'
import Link from 'next/link'

// css
import styles from './index.module.scss'

// utils
import { pages } from '@/utils/routes'

export default function BookMyAppointment() {
    return (
        <section className={clsx(styles.bookMyAppointment, 'py-medium py-lg-small py-xl-smaller bg-gray-darker')}>
            <div className='container'>
                <div className={styles.wrapper}>

                    <p className='font-24 white'>
                        If you would like to speak with us directly, <br />
                        <b>please call or visit our office today!</b>
                    </p>

                    <Link
                        href={pages.contact}
                        className='button button--green font-title text-24'
                    >
                        Book An Appointment
                    </Link>

                </div>
            </div>
        </section>
    )
}