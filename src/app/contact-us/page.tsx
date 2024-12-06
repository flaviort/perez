// libraries
import clsx from 'clsx'
import Link from 'next/link'

// components
import InternalBanner from '@/components/InternalBanner'
import { Form, Input, Textarea } from '@/components/Form'

// images
import banner from '@/assets/img/photo-13.jpg'

// svg
import { Pin, Phone, Direction, Spinner } from '@/assets/svg/ux'

// css
import styles from './index.module.scss'

// utils
import { contact } from '@/utils/routes'
import { phone } from '@/utils/functions'

// metadata
export const metadata = {
	title: 'Contact Us | Perez Wellness'
}

export default function ContactUs() {
	return (
		<main className={styles.contactUs}>

			<InternalBanner
				image={banner.src}
				title='Contact us'
				desc="Let's get in Touch"
			/>

			<section className={clsx(styles.form, 'py-medium')}>
				<div className='container'>
					<div className='row'>

						<div className={clsx(styles.left, 'col-md-6')}>

							<div className={styles.block}>

								<div className={clsx(styles.title, 'green')}>

									<div className={styles.circle}>
										<Pin />
									</div>

									<h3 className='h4 uppercase'>
										Address
									</h3>

								</div>

								<p className={styles.desc}>
									Perez Wellness <br />
									8080 N. Central Expressway <br />
									Suite 160 <br />
									Dallas, TX 75206
								</p>

							</div>

							<div className={styles.block}>

								<div className={clsx(styles.title, 'green')}>

									<div className={styles.circle}>
										<Phone />
									</div>

									<h3 className='h4 uppercase'>
										Call Us
									</h3>

								</div>

								<p className={styles.desc}>
									Phone: <Link href={phone(contact.phone)} className='hover-underline'>{contact.phone}</Link><br />
									Fax: <Link href={phone(contact.phone_02)} className='hover-underline'>{contact.phone_02}</Link>
								</p>

							</div>

							<div className={styles.block}>

								<div className={clsx(styles.title, 'green')}>

									<div className={styles.circle}>
										<Direction />
									</div>

									<h3 className='h4 uppercase'>
										Map and Directions
									</h3>

								</div>

								<p className={styles.desc}>
									<Link
										href={contact.gmaps}
										className='hover-underline'
										target='_blank'
										rel='noopener noreferrer'
									>
										View on Google Maps
									</Link><br />
									On the first floor
								</p>

							</div>

						</div>

						<div className={clsx(styles.right, 'col-md-6')}>
							<Form name='Contact Us'>

								<div className={styles.flex}>

									<Input
										id='contact-name'
										label='Name'
										type='text'
										placeholder='Full Name'
										required
										maxLength={200}
										minLength={2}
									/>

									<Input
										id='contact-email'
										label='Email'
										type='email'
										required
										placeholder='email@email.com'
										maxLength={100}
									/>

									<Input
										id='contact-subject'
										label='Subject'
										type='text'
										placeholder='Type here'
										required
										maxLength={200}
										minLength={2}
									/>

									<Textarea
										id='contact-message'
										label='Message'
										placeholder='Type here'
										required
										maxLength={5000}
										minLength={5}
									/>

								</div>

								<button
									className={clsx(
										styles.submit,
										'button button--green button--green-dark-hover font-title text-24'
									)}
									type='submit'
								>
									<span className='button__text'>
										Send Message
									</span>

									<span className='button__loading'>
										<span className='rotation' style={{ '--speed': '.5' } as any}>
											<Spinner />
										</span>
									</span>

								</button>

							</Form>
						</div>

					</div>
				</div>
			</section>

		</main>
	)
}
