// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import GrayBlock from '@/components/GrayBlock'
import ThreeComponents from '@/components/ThreeComponents'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/plantar.jpg'
import foot from '@/assets/img/services/foot.jpg'
import foot_02 from '@/assets/img/services/foot-2.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

export const metadata = {
	title: 'Plantar Fasciitis | Services | Perez Wellness'
}

export default function Plantar() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Plantar Fasciitis
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
									alt='Plantar Fasciitis'
									fill
									sizes='
										(min-width: 993px) 50vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.right, 'col-md-6 py-md-smaller pl-xl-smaller')}>
							<div className={styles.wrapper}>

								<h2 className='h3 green'>
									Do you suffer from unexplained foot pain or heel pain when putting your weight on your feet?
								</h2>

								<p>
									The inflammatory process known as Plantar Fasciitis is one of the most common causes of foot and heel pain. If you are a person who does a lot of standing and/or activity on your feet, you could be suffering from Plantar Fasciitis.<br /><br />

									<strong>Different Symptoms that may be Experienced with Plantar Fasciitis Include:</strong>
								</p>

								<ul className='ul'>
									<li>Pain or Stiffness in the foot when you put initial steps in the morning</li>
									<li>Pain after standing for long periods of time</li>
									<li>Pain after activity or climbing stairs</li>
									<li>Pain that worsens as the day goes on</li>
									<li>Pain that feels like a deep bruise in your heal</li>
								</ul>

								<p>
									Pain can be experienced anywhere along the bottom of the foot because the Plantar Fascia is a ligament that spans the bottom of the foot from the heel to the toes and supports your arch. However, the most common location of pain is right at the heel. Most people will describe it as a “stabbing pain” but because this condition comes on gradually, it can start as just a tight feeling or a dull ache.
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<GrayBlock
				className='mt-medium'
				title='How can I find out if I might have Plantar Fasciitis?'
				text={`
					<p>
						Since it is a musculoskeletal condition, Doctor of Chiropractic specialize in not only diagnosing these types of conditions, but also treating them. A diagnosis of Plantar Fasciitis can usually be made from reviewing your medical history and performing a clinical examination.<br /><br />

						X-rays may be taken as well and sometimes doctors will see an incidental finding called a heel spur. Heel spurs form when the plantar fascia is chronically tight and extra bone is laid down in response.
					</p>
				`}
			/>

			<section className={clsx(styles.imageText, styles.hasGradientTop, 'mt-small pt-medium pt-md-small')}>
				<div className='container z3'>
					
					<div className='row mb-smallest'>

						<div className={clsx(styles.image, 'col-md-6 col-md-push-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={foot_02}
									alt='Plantar Fasciitis'
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
									What Can I do to Treat Plantar Fasciitis?
								</h2>

								<p>
									<strong>
										We use many therapies to help Plantar Fasciitis:
									</strong>
								</p>

								<div className='row'>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Chiropractic
											</li>

											<li>
												Infrared Therapy
											</li>

											<li>
												Stretching
											</li>

											<li>
												Cold Laser
											</li>

										</ul>
									</div>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Tissue & Nerve Stimulation
											</li>

											<li>
												Lifestyle Guidance
											</li>

											<li>
												Many more options
											</li>

										</ul>
									</div>

								</div>

								<p>
									Once you meet with Blueprint Healthcare Network doctor, he or she will determine your root cause and individualized approach to your condition.
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<ThreeComponents />

			<TestimonialsSlider
				className={clsx(styles.testimonials, 'pb-big pb-md-medium')}
				title={`Hear from <span class='green'>Actual Patients</span>`}
			/>

			<BookMyAppointment />

		</main>
	)
}
