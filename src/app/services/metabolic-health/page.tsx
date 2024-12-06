// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import GrayBlock from '@/components/GrayBlock'
import Accordion from '@/components/Accordion'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/metabolic-health.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

export const metadata = {
	title: 'Metabolic Health | Services | Perez Wellness'
}

export default function MetabolicHealth() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Metabolic Health
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
									alt='Metabolic Health'
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

								<h2 className='h3 green'>
									Scientific Breakthrough to Reverse Aging, Neutralize Stress & Barricade Disease Naturally
								</h2>

								<p>
									Peripheral neuropathy is a condition where nerves are damaged causing weakness, burning pain, numbness, tingling, and debilitating balance problems. The damage to the nerves can be caused by many different problems in the body. Poor blood flow to the nerves, toxic levels of sugar in the blood (diabetes), chronic infections, pesticide exposure and genetic variants are a few of the causes of this debilitating condition. The cause is different for every patient and it must be discovered to help the nerves heal!
								</p>

								<div className='row'>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Hormonal Imbalances
											</li>

											<li>
												Thyroid Problems
											</li>

											<li>
												Digestive Issues
											</li>

											<li>
												Chronic Fatigue (Low Energy)
											</li>

										</ul>
									</div>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Blood Sugur Challenges
											</li>

											<li>
												Stubborn Belly Fat
											</li>

											<li>
												Brain Fog
											</li>

											<li>
												Elvated Cholesterol
											</li>

										</ul>
									</div>

								</div>

							</div>
						</div>

						<div className={clsx(styles.bottom, 'col-12 mt-small')}>

							<h2 className='h3 mb-smallest'>
								What is the Trust Your Gut Formula?
							</h2>

							<p>
								Simply put, it’s a program that reverses the Aging process & Neutralizes Stress, Balances Hormones, and Barricades Disease Naturally. In the modern world, people have access to a great deal of information on health and wellness. From the internet, to magazines, and even tips from friends—it can be tough to cut through the clutter and find the best way to follow your doctor’s recommendations. The Blueprint Healthcare Network Trust Your Gut Formula is where we want to come in and help support you.<br /><br />
							
								Physicians typically have just 3-4 minutes of a patient’s visit time to spare for lifestyle guidance. Blueprint’s Trust Your Gut formula helps support you and take action toward your best health journey when it comes to reducing and/or resolving the above aliments.<br /><br />

								We recognize that patient care does not end with diagnosis. Patients need support to understand their condition and make healthy changes. The Trust Your Gut formula will help you establish a track and follow a plan to reach your best health.<br /><br />
								
								Whether you are working with our doctors or need some support with your own, we are here to serve you and bridge the gap that can be created in such a fast-paced medical system.
							</p>

						</div>

					</div>
				</div>
			</section>

			<GrayBlock
				className='mt-small'
				title='How are we different?'
				text={`
					<p>
						Our approach can be described as neither traditional nor alternative. Blueprint’s Trust Your Gut formula approaches the human body as a biological system, a colony of cells that interact with each other and the surrounding environment. Based on the principle of the father of medicine “First do no harm”, we address the human body as a biological system that has the tendency to balance towards the best possible health condition.<br /><br />
						
						Patients that reach our offices seek to identify the real cause of their health problems and learn what they can do to improve and support their health.<br /><br />
						
						The Trust Your Gut Formula’s approach does not conflict with combined pharmaceutical or homeopathic treatment. On the contrary, it improves the individual’s response, compliance, and outcomes while reducing any side effects that could be part of pharmacological prescriptions and treatments.
					</p>
				`}
			/>

			<section className={clsx(styles.accordion, 'pt-small mb-medium')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'pb-smallest')}>
						<span className='h4 green'>
							There are 3 vital components to
						</span><br />
						<span className='h2'>
							Our Trust Your Gut Formula
						</span>
					</h2>

					<p className={clsx(styles.center, 'mb-smaller')}>
						We trust that healing your gut can resolve a lot of common chronic illnesses, without relying on medications to resolve you concerns.
					</p>

					<div className={styles.accordions}>

						<Accordion
							title='The Root Cause'
							children={`
								<p>
									The critical factor that holds the key to reversing aging, neutralize Stress, and Barricade Disease, but is being ignored!
								</p>
							`}
						/>

						<Accordion
							title='The No-Guess Discovery Test'
							children={`
								<p>
									How to eliminate the guess work with One simple test anyone can do and very few doctors know about!
								</p>
							`}
						/>

						<Accordion
							title='The one Hormone'
							children={`
								<p>
									The Four-Letter Hormone that hold the key to your health
								</p>
							`}
						/>

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
