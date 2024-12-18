// libraries
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

// components
import Marquee from '@/components/Marquee'
import News from './news'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import about from '@/assets/img/photo-03.jpg'
import services_01 from '@/assets/img/photo-05.jpg'
import services_02 from '@/assets/img/photo-06.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// data / utils
import { pages } from '@/utils/routes'
import { placeholder } from '@/utils/functions'

// css
import styles from './index.module.scss'

// graphql
import { getPosts } from '@/utils/graphql'

export default async function Home() {

	const posts = await getPosts()

	return (
		<main className={styles.home}>

			<section className={styles.banner}>

				<Leaf className={styles.leaf} />
				<LeafOutline className={styles.leafOutline} />

				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.right, 'col-lg-6 col-lg-push-6 col-xl-7 col-xl-push-5')}>
							<div className={styles.block}>
								<video
									className='cover'
									autoPlay
									playsInline
									muted
									loop
								>
									<source src='/videos/banner.mp4' type='video/mp4' />
								</video>
							</div>
						</div>

						<div className={clsx(styles.left, 'col-lg-6 col-lg-pull-6 col-xl-5 col-xl-pull-7')}>
							<div className={styles.wrapper}>

								<h1 className='h1'>
									Chiropractor <br />
									<span className='green'>in Dallas</span>
								</h1>

								<p className={styles.desc}>
									Our goal at Perez Chiropractic and Wellness is to educate and serve as many patients as we can with chiropractic care, proper nutrition, and the use of acupuncture. We determine what your body needs to elicit proper changes and to stay healthy in all aspects of life!
								</p>

								<Link
									href={pages.appointment}
									className='button button--green-dark-hover font-title text-32'
								>
									Book An Appointment
								</Link>

							</div>
						</div>

					</div>
				</div>

			</section>

			<Marquee className='py-small' />

			<section className={styles.about}>
				<div className='container'>
					<div className='row'>

						<div className={clsx('col-md-6', styles.left)}>

							<Leaf className={styles.leafBig} />
							<Leaf className={styles.leafSmall} />

							<div className={styles.photo}>
								<Image
									src={about}
									alt='Photo of a patient being treated by Dra Erica Perez'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
									sizes='
										(min-width: 993px) 45vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx('col-md-6', styles.right)}>

							<h2 className={styles.title}>
								<span className='h4 green'>Your Health Journey</span><br />
								<span className='h2'>is Our Passion</span>
							</h2>

							<p className={styles.desc}>
								At Perez Wellness Center, we believe that every step of your health journey matters. Whether you’re here for pain relief, weight management, or overall wellness, we understand the importance of feeling truly supported and understood in your care. <br /><br />

								<strong>Dr. Erica Perez's</strong> personal journey into chiropractic medicine is rooted in a deep commitment to healing and empowering others to live healthier, fuller lives.
							</p>

							<Link href={pages.about} className='button button--green-dark-hover h4'>
								Meet Us
							</Link>

						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.services, 'py-small')}>

				<Leaf className={styles.leaf} />
				<LeafOutline className={styles.leafOutlineLeft} />
				<LeafOutline className={styles.leafOutlineRight} />

				<div className='container'>
					<div className={styles.greenBlock}>
						<div className='row'>

							<div className={clsx(styles.left, 'col-md-6')}>

								<h2 className='white'>
									<span className='h4'>Why Choose</span><br />
									<span className='h2'>
										Perez Wellness <br />
										Center
									</span>
								</h2>

								<Link href={pages.services.index} className='button button--dark h4'>
									Our Services
								</Link>

							</div>

							<div className={clsx(styles.right, 'col-md-6')}>

								<p>
									At Perez Wellness Center, your health comes first. Dr. Perez takes a thoughtful, holistic approach to chiropractic care, understanding that each individual is different, and so are their health goals.
								</p>

								<Link href={pages.services.index} className='button button--dark h4'>
									Our Services
								</Link>

								<div className={styles.photos}>

									<div className={styles.small}>
										<Image
											src={services_01}
											alt='Dra Erica Perez treating a client'
											fill
											loading='lazy'
                        					placeholder={`data:image/svg+xml;base64,${placeholder()}`}
											sizes='
												(min-width: 993px) 20vw,
												45vw
											'
											className='cover'
										/>
									</div>

									<div className={styles.big}>
										<Image
											src={services_02}
											alt='Dra Erica Perez'
											fill
											loading='lazy'
                        					placeholder={`data:image/svg+xml;base64,${placeholder()}`}
											sizes='
												(min-width: 993px) 20vw,
												45vw
											'
											className='cover'
										/>
									</div>

								</div>

							</div>

						</div>
					</div>
				</div>

			</section>

			<News posts={posts} />

			<TestimonialsSlider
				className='py-small'
				title={`Find out what we can do for your <span class='green'>health</span>`}
			/>

			<BookMyAppointment />

		</main>
	)
}
