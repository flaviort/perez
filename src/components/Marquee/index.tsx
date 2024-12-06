'use client'

// libraries
import { useRef } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Observer } from 'gsap/Observer'
gsap.registerPlugin(Observer)

// css
import styles from './index.module.scss'

// utils
import horizontalLoop from '@/utils/horizontalLoop'

export default function Marquee({
    className
}: {
    className?: string
}) {

    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const speed = 2

        const spans = container.current?.querySelectorAll('span')
        if (!spans || spans.length === 0) return

        document.fonts.ready.then(() => {
            const loop = horizontalLoop(spans, {
                repeat: -1,
                speed: 1.5,
                paddingRight: 10
            })
    
            let tl: gsap.core.Timeline
    
            Observer.create({
                target: window,
                type: 'wheel',
                onChangeY: (self) => {
                    tl && tl.kill()
                    const factor = self.deltaY > 0 ? 1 : -1
                    tl = gsap
                        .timeline()
                        .to(loop, { timeScale: speed * factor, duration: .1 })
                        .to(loop, { timeScale: 1 * factor, duration: .1 })
                },
            })
        })
    }, { scope: container })

    return (
        <section
            className={clsx(
                styles.marquee,
                'h3',
                className
            )}
        >
            <div className={styles.wrapper} ref={container}>

                <span>
                    Chiropractic
                </span>

                <span>
                    Spinal Decompression
                </span>

                <span>
                    Knee Therapy
                </span>

                <span>
                    Neuropathy
                </span>

                <span>
                    Laser Therapy
                </span>

                <span>
                    Weight Loss
                </span>

                <span>
                    Red Light Therapy Beds
                </span>

                <span>
                    Metabolic Nutrition
                </span>

                <span>
                    Electroanalgesia Therapy
                </span>

            </div>
        </section>
    )
}