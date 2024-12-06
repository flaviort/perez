// libraries
import clsx from 'clsx'

// components
import InternalBanner from '@/components/InternalBanner'
import ServiceBlock from '@/components/ServiceBlock'

// images
import banner from '@/assets/img/photo-09.jpg'

// css
import styles from './index.module.scss'

// db
import { services } from '@/db/services'

// metadata
export const metadata = {
	title: 'Services | Perez Wellness'
}

export default function Services() {
	return (
		<main className={styles.services}>

			<InternalBanner
				image={banner.src}
				title='What would you like to know more about?'
				desc='Our goal is to get you living again!'
			/>

			<section className={clsx(styles.blocks, 'py-medium')}>
				<div className='container'>
					<div className={styles.grid}>
						{services.map((item, i) => (
							<ServiceBlock
								key={i}
								{...item}
							/>
						))}
					</div>
				</div>
			</section>

		</main>
	)
}
