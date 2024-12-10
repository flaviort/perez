// libraries
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

// img
import logo from '@/assets/svg/logo.svg'

// css
import styles from './index.module.scss'

// utils
import { pages, contact, socialLinks } from '@/utils/routes'
import { phone } from '@/utils/functions'

export default function Footer() {
    return (
        <footer className={clsx(styles.footer, 'py-small py-md-smallest')}>
            <div className='container'>

                <div className={styles.top}>

                    <div className={styles.logoWrapper}>
                        <Link href={pages.home} aria-label='Go to homepage'>
                            <Image
                                src={logo}
                                width={220}
                                alt='Perez Wellness'
                                loading='lazy'
                            />
                        </Link>
                    </div>

                    <ul className={styles.menu}>
                        {[
                            {
                                name: 'About',
                                href: pages.about
                            },
                            {
                                name: 'Services',
                                href: pages.services.index
                            },
                            {
                                name: 'Zone Technique',
                                href: pages.zone_technique
                            },
                            {
                                name: 'Online Forms',
                                href: pages.online_forms
                            },
                            {
                                name: 'Testimonials',
                                href: pages.testimonials
                            },
                            {
                                name: 'Media',
                                href: pages.media
                            }
                        ].map((item, i) => (
                            <li key={i}>
                                <Link href={item.href} className='font-18 hover-underline'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.line}></div>

                    <div className={styles.contact}>

                        <p className='font-title text-32'>
                            Contact
                        </p>

                        <Link
                            href={phone(contact.phone)}
                            className='bold text-24 hover-underline'
                        >
                            {contact.phone}
                        </Link>

                    </div>

                    <div className={styles.address}>
                        <p className='bold'>
                            {contact.address}
                        </p>
                    </div>

                    <ul className={styles.social}>
                        {socialLinks.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={item.name}
                                >
                                    <item.icon />
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className={clsx(styles.bottom, 'pt-smallest mt-smallest')}>
                    <p className='text-14 bold'>
                        © {new Date().getFullYear()} Copyright. Perez Wellness
                    </p>
                </div>

            </div>
        </footer>
    )
}