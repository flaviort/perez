// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import Accordion from '@/components/Accordion'
import ThreeComponents from '@/components/ThreeComponents'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/disc-therapy.jpg'
import skeleton from '@/assets/img/services/skeleton.jpg'
import back_pain from '@/assets/img/services/back-pain.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

export const metadata = {
	title: 'Disc Therapy | Services | Perez Wellness'
}

export default function DiscTherapy() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Disc Therapy
						</h1>
					</div>
				</div>
			</section>

			<section className={styles.banner}>

				<LeafOutline className={styles.leafOutline} />

				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.left, 'col-md-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={banner}
									alt='Disc Therapy'
									fill
									sizes='
										(min-width: 993px) 50vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.right, 'col-md-6 py-md-small pl-xl-smaller')}>
							<div className={styles.wrapper}>

								<h2 className='h4 green'>
									Patients across the country have opted out of surgery by choosing spinal decompression and disc therapy with a Blueprint Healthcare Network doctor.
								</h2>

								<p>
									<b>The Solution is here</b><br />
									We are pleased to share with you the non-surgical solution for a Herniated Disc, Ruptured Disc, Bulging Disc, Compressed Disc, Sciatica or a Pinched Nerve. Spinal Decompression is a non-invasive and non-surgical treatment.
								</p>

							</div>
						</div>

						<div className={clsx(styles.accordions, 'col-12 mt-smaller')}>

							<Accordion
								title='Herniated Discs'
								children={`
									<p>
										of all kinds can be treated without the use of surgery, whether you have herniated neck disc pain, herniated cervical disc pain, herniated back disc pain or herniated lumbar disc pain. Submit your information below to see if you qualify for a non-surgical solution for your pinched nerve, herniated disc or ruptured disc.
									</p>
								`}
							/>

							<Accordion
								title='Ruptured Discs'
								children={`
									<p>
										of all kinds can be treated without the use of surgery, whether you have ruptured neck disc pain, ruptured cervical disc pain, ruptured back disc pain or ruptured lumbar disc pain. Submit your information below to see if you qualify for a non-surgical solution for your pinched nerve, herniated disc or ruptured disc.
									</p>
								`}
							/>

							<Accordion
								title='Pinched Nerves'
								children={`
									<p>
										of all kinds can be treated without the use of surgery. Whether you have pinched nerves causing neck pain, pinched nerves causing cervical pain, pinched nerves causing back pain, pinched nerves causing lumbar pain, pinched nerves causing arm pain or pinched nerves causing foot pain, there is a treatment that does not require surgery. If you have a pinched nerve you can feel pain throughout the body including the neck, back, arms, hips, legs and feet. There are some exercises and remedies you can do to reduce the pain of a pinched nerve. But to avoid surgery you must take more action. Submit your information below to see if you qualify for a non-surgical solution for your pinched nerve, herniated disc or ruptured disc.
									</p>
								`}
							/>

						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.imageText, styles.hasGradientTop, 'mt-small pt-medium pt-md-small')}>
				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.image, 'col-md-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={back_pain}
									alt='Back Pain'
									fill
									sizes='
										(min-width: 993px) 50vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.text, 'col-md-6 py-md-smaller pl-xl-smaller')}>
							<div className={styles.wrapper}>

								<h2 className='h3'>
									How it works
								</h2>

								<p>
									Since its release, clinical studies have revealed an amazing success rate in treating spinal disc related problems with Spinal Decompression. By using technology that allows the spine to distract through gentle force, we are able to relieve nerve compression often associated with low back pain, sciatica, and stenosis.
								</p>

								<p>
									<strong>
										Ask your self these questions:
									</strong>
								</p>

								<ul className='ul'>

									<li>
										Are you missing work due to pain?
									</li>

									<li>
										Are you dependent on medications to handle your pain?
									</li>

									<li>
										Are you slowed or stopped in daily activities due to your pain?
									</li>

									<li>
										Are you contemplating surgery but scared of the outcome?
									</li>

									<li>
										Are you worried that your pain is getting worse?
									</li>

								</ul>

							</div>
						</div>

					</div>
				</div>
			</section>

			<ThreeComponents />

			<section className={clsx(styles.imageText, 'mb-small')}>
				<div className='container'>
					<div className='row'>

						<div className={clsx(styles.image, 'col-md-6 col-md-push-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={skeleton}
									alt='Skeleton'
									fill
									sizes='
										(min-width: 993px) 50vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.text, 'col-md-6 col-md-pull-6 py-md-smaller pl-xl-smaller')}>
							<div className={styles.wrapper}>

								<h2 className='h3'>
									Fun Facts:
								</h2>

								<ul className='ul'>

									<li>
										There are 33 total vertebrae in the spine and the first chiropractic adjustment was performed Sept 18th, 1895.
									</li>

									<li>
										Less than 10% of your nervous system perceives pain, the other 90% is responsible for allowing your body to function properly; it is possible to have nerve interference and feel perfectly healthy. How you feel is a poor way to judge your health. By the time symptoms appear, many spinal problems are advanced.
									</li>

									<li>
										Every pound we are overweight is 4 extra pounds of stress on our weight bearing joint like our spine, knee, and hips.
									</li>

								</ul>

							</div>
						</div>

					</div>
				</div>
			</section>

			<TestimonialsSlider
				className={clsx(styles.testimonials, 'pb-big pb-md-medium')}
				title={`Hear from <span class='green'>Actual Patients</span>`}
			/>

			<BookMyAppointment />

		</main>
	)
}
