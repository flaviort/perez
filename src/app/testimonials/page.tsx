// libraries
import clsx from 'clsx'
import Link from 'next/link'

// components
import InternalBanner from '@/components/InternalBanner'
import TestimonialCard from '@/components/TestimonialCard'
import GoogleReview from '@/components/GoogleReview'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/photo-14.jpg'

// svg
import { Google } from '@/assets/svg/others'

// data / utils
import { testimonials } from '@/db/testimonials'
import { googleReviews } from '@/db/google-reviews'

// css
import styles from './index.module.scss'

export const metadata = {
	title: 'Testimonials | Perez Wellness'
}

export default function Testimonials() {
	return (
		<main className={styles.testimonials}>

			<InternalBanner
				className={styles.banner}
				image={banner.src}
				title='Testimonials'
			/>

			<section className={clsx(styles.videoTestimonials, 'pt-small pb-medium')}>
				<div className='container relative z2'>
					<div className={styles.grid}>
						{testimonials.map((item, i) => (
							<TestimonialCard
								key={i}
								name={item.name}
								image={item.image}
								videoUrl={item.videoUrl}
							/>
						))}
					</div>
				</div>
			</section>

			<section className={clsx(styles.reviews, 'pt-medium pb-big')}>
				<div className='container'>

					<div className={styles.top}>

						<h2 className='h1'>
							Reviews
						</h2>

						<div className={styles.google}>

							<p>
								<b>
									powered by
								</b>
							</p>

							<Google />

						</div>

						<Link
							href='https://search.google.com/local/writereview?placeid=ChIJqz4gw2yfToYRo1Uc1t-Y_xs'
							target='_blank'
							rel='noreferrer nofollow'
							className='hover-underline'
						>
							<b>
								Based on 121 reviews
							</b>
						</Link>

					</div>

					<div className={clsx(styles.bottom, 'pt-small')}>
						{googleReviews.map((item, i) => (
							<GoogleReview
								key={i}
								name={item.name}
								date={item.date}
								review={item.review}
							/>
						))}
					</div>

				</div>
			</section>

			<BookMyAppointment />

		</main>
	)
}
