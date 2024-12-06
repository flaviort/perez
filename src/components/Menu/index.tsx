'use client'

// libraries
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// img
import { Logo } from '@/assets/svg/logo'

// css
import styles from './index.module.scss'

// utils
import { pages, socialLinks } from '@/utils/routes'

export default function Menu() {

    // animation ref
    const menuAnimationRef = useRef<gsap.core.Timeline | null>(null)

    // open / close fs menu
    const [isShown, setIsShown] = useState(false)

	const openCloseFsMenu = () => {
		setIsShown(!isShown)
	}

    const closeFsMenu = () => {
		setIsShown(false)
	}

    useEffect(() => {
		setIsShown(isShown)

        if (menuAnimationRef.current) {
            if (isShown) {
                menuAnimationRef.current.play()
                document.body.style.overflowY = 'scroll'
                document.body.style.position = 'fixed'
            } else {
                menuAnimationRef.current.reverse()
                document.body.style.overflowY = 'auto'
                document.body.style.position = 'relative'
            }
        }
	}, [isShown])

    // menu animation
    useGSAP(() => {
        const menuAnimation = gsap.timeline({
            paused: true
        })

        menuAnimation.to('#fs-menu', {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'power2.inOut',
            duration: 1
        })

        menuAnimation.to('#logo-menu svg path', {
            fill: '#F3F2EC',
            ease: 'power2.inOut',
            duration: .6
        }, '-=1')
    
        menuAnimation.fromTo('#fs-menu li', {
            y: 50,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: .05
        }, '-=.7')

        menuAnimation.to('#fs-menu', {
            overflowY: 'auto',
            duration: 0
        })
        
        // store the animation timeline in the ref
        menuAnimationRef.current = menuAnimation
    })

    return (
        <>

            <section className={styles.topMenu}>
                <div className='container'>

                    <div className={styles.flex}>

                        <Link
                            href={pages.home}
                            aria-label='Go to homepage'
                            className={styles.logo}
                            id='logo-menu'
                            onClick={closeFsMenu}
                        >
                            <Logo />
                        </Link>

                        <div className={styles.right}>

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
                                        <Link
                                            href={item.href}
                                            className='font-18 hover-underline'
                                            onClick={closeFsMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={pages.contact}
                                className={clsx(
                                    styles.contact,
                                    'font-title button button--green-dark-hover text-24'
                                )}
                                id='top-contact'
                                onClick={closeFsMenu}
                            >
                                Contact
                            </Link>

                            <button
                                aria-label='Open Menu'
                                className={clsx(
                                    styles.openFs,
                                    isShown && styles.active
                                )}
                                onClick={openCloseFsMenu}
                                type='button'
                            >
                                
                                <span></span>
                                <span></span>
                                <span></span>

                                <span className={styles.open}>
                                    <span></span>
                                    <span></span>
                                </span>

                            </button>

                        </div>

                    </div>

                </div>
            </section>

            <section className={styles.fsMenu} id='fs-menu'>
                <div className='container'>
                    <div className={styles.flex}>

                        <ul className={styles.menu}>
                            {[
                                {
                                    name: 'Home',
                                    href: pages.home
                                },
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
                                },
                                {
                                    name: 'Contact',
                                    href: pages.contact
                                }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className='h3'
                                        onClick={closeFsMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

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
                </div>
            </section>

        </>
    )
}