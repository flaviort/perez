// libraries
import clsx from 'clsx'
import Link from 'next/link'

// components
import InternalBanner from '@/components/InternalBanner'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/photo-03.jpg'

// svg
import { Download } from '@/assets/svg/ux'

// css
import styles from './index.module.scss'

// metadata
export const metadata = {
	title: 'Online Forms | Perez Wellness'
}

export default function OnlineForms() {

	return (
		<main className={styles.onlineForms}>

			<InternalBanner
				image={banner.src}
				title='Online Form'
				desc='Please fill out our online forms before your appointment to save time in our office.'
			/>

			<section className={clsx(styles.blocks, 'py-medium')}>
				<div className='container'>
					<div className={styles.grid}>
						{[
							{
								title: 'Health History and Questionnaire',
								desc: 'This lets us know what’s happened, but perhaps more important, where do you want to take your health?',
								download: {
									text: 'Download',
									href: '/downloads/health-history.pdf',
									isPdf: true
								}
							},
							{
								title: 'HIPAA',
								desc: 'Please read and sign our HIPAA form.',
								download: {
									text: 'Download',
									href: '/downloads/hippa.pdf',
									isPdf: true
								}
							},
							{
								title: 'Car Accident Questionnaire',
								desc: 'Please fill out if your condition is a result of a recent motor vehicle accident.',
								download: {
									text: 'Download',
									href: '/downloads/car-accident.pdf',
									isPdf: true
								}
							},
							{
								title: 'Free AdobeReader',
								desc: 'Each form is a PDF document file. If you do not already have AdobeReader® installed on your computer, click the Adobe® image to download for free.',
								download: {
									text: 'Download',
									href: 'https://get.adobe.com/br/reader/',
									isPdf: false
								}
							}
						].map((item, i) => (
							<div className={styles.block} key={i}>

								<div className={styles.top}>

									<h3 className='h4 white'>
										{item.title}
									</h3>

									<p className='white'>
										{item.desc}
									</p>

								</div>

								<Link
									href={item.download.href}
									target='_blank'
									className='button button--green font-title text-20'
									download={item.download.isPdf ? item.download.href.split('/').pop() : undefined}
								>
									<Download />
									{item.download.text}
								</Link>

							</div>
						))}
					</div>
				</div>
			</section>

			<BookMyAppointment />

		</main>
	)
}
