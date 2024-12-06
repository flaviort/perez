// libraries
import clsx from 'clsx'
import Image from 'next/image'

// images
import item_01 from '@/assets/svg/spine.svg'
import item_02 from '@/assets/svg/brain.svg'
import item_03 from '@/assets/svg/cell.svg'

// css
import styles from './index.module.scss'

export default function ThreeComponents() {
    return (
        <div className={styles.threeComponents}>
            <div className='container'>
                <div className={styles.greenBox}>

                    <h2 className='h3'>
                        There are 3 components we will evaluate:
                    </h2>

                    <div className={styles.grid}>
                        {[
                            {
                                image: item_01,
                                title: 'Structure Component',
                                text: 'Your Spine'
                            },
                            {
                                image: item_02,
                                title: 'Neurological Component',
                                text: 'Your Nervous System'
                            },
                            {
                                image: item_03,
                                title: 'Metabolic Component',
                                text: 'Your Metabolic Health'
                            }
                        ].map((item, i) => (
                            <div key={i} className={styles.block}>

                                <Image
                                    src={item.image.src}
                                    alt={item.title}
                                    width={120}
                                    height={120}
                                />

                                <div>

                                    <h3 className='h4'>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                            </div>
                        ))}
                    </div>

                    <p className={clsx(styles.bottom, 'text-24')}>
                        By evaluating all areas one of our practitioners will be able to uncover your individual approach back to health and healing.
                    </p>

                </div>
            </div>

        </div>
    )
}