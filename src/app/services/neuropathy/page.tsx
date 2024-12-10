// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import GrayBlock from '@/components/GrayBlock'
import Accordion from '@/components/Accordion'
import ThreeComponents from '@/components/ThreeComponents'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/neuropathy.jpg'
import hand from '@/assets/img/services/hand.jpg'
import foot from '@/assets/img/services/foot.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

// utils
import { placeholder } from '@/utils/functions'

export const metadata = {
	title: 'Neuropathy | Services | Perez Wellness'
}

export default function Neuropathy() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Neuropathy
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
									alt='Dra Erica Perez treating a client'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
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
									Non-Medication Treatment for Neuropathy and Chronic Nerve Discomfort is Available
								</h2>

								<p>
									Peripheral neuropathy is a condition where nerves are damaged causing weakness, burning pain, numbness, tingling, and debilitating balance problems. The damage to the nerves can be caused by many different problems in the body. Poor blood flow to the nerves, toxic levels of sugar in the blood (diabetes), chronic infections, pesticide exposure and genetic variants are a few of the causes of this debilitating condition. The cause is different for every patient and it must be discovered to help the nerves heal!
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.imageText, styles.hasGradientTop, 'mt-small mb-medium pt-medium pt-md-small')}>
				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.image, 'col-md-6 col-md-push-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={foot}
									alt='Foot injury'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
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
									What is Peripheral Neuropathy?
								</h2>

								<p>
									<strong>
										Generally, symptoms of peripheral neuropathy in an effected area include:
									</strong>
								</p>

								<div className='row'>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Numbness / Tingling
											</li>

											<li>
												Burning Pain
											</li>

											<li>
												Unusual and/or loss of sensations
											</li>

										</ul>
									</div>

									<div className='col-lg-6'>
										<ul className='ul'>

											<li>
												Muscle weakness
											</li>

											<li>
												Deep Stabbing Pain
											</li>

											<li>
												Balance Problems
											</li>

										</ul>
									</div>

								</div>

								<p>
									<b>Another common cause of nerve damage is auto-immunity.</b> Auto-immune diseases are diseases where the immune system mistakenly starts to attack the body. That’s right! Many times the immune system is actually killing the nerves of peripheral neuropathy sufferers. This is why thorough testing is vitally important to helping peripheral neuropathy.
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.imageText, 'mb-small')}>
				<div className='container'>
					
					<div className='row mb-smallest'>

						<div className={clsx(styles.image, 'col-md-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={hand}
									alt='Hand injury'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
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
									Can peripheral nerves heal?
								</h2>

								<p>
									Yes! It is well established in the scientific literature that peripheral nerves can and do heal. The key issue is that not only do we need to get the nerves healing but we have to stop whatever is causing the nerve damage in the first place. When the underlying cause of the neuropathy is discovered and proper support for the nerves are provided it optimizes the ability for the nerves to heal!
								</p>

								<ul className='ul'>

									<li>
										What is the underlying cause of the nerve damage?
									</li>

									<li>
										How severe is the nerve damage?
									</li>

									<li>
										What types of nerve fibers are damaged?
									</li>

								</ul>

								<p>
									You have sensory nerves (both small fiber nerves and large diameter nerves) and motor nerves (that control movement of your muscles) NOTE: If there is muscle weakness from neuropathy for greater than two years the damage to the muscles will probably be permanent!
								</p>

							</div>
						</div>

					</div>

					<Accordion
						title='How much treatment will the nerves require to heal?'
						children={`
							<p>
								This will be dependent on the degree of nerve damage and what types of fibers are damaged.<br /><br />

								The treatment we provide has four main goals... This will be dependent on the degree of nerve damage and what types of fibers are damaged.
							</p>

							<ul class='ul'>

								<li>
									Optimize the environment within the body for nerve healing.
								</li>

								<li>
									Increase blood flow to the nerves.
								</li>

								<li>
									Stimulate the nerves that are damaged (small fiber, large diameter, or motor nerves) to reduce pain and improve balance.
								</li>

								<li>
									Decrease brain-based pain.
								</li>

							</ul>
						`}
					/>

				</div>
			</section>

			<GrayBlock
				className=''
				title='We provide a Safe and Effective, New Choice for Neuropathy Sufferers.'
				text={`
					<p>
						Our clinic offers a NEW, Non-Invasive and Non-Surgical therapy protocol that combines the best of cutting edge medical treatments to help resolve your neuropathy suffering. We want to make sure that you have the confidence that you need, so we’ve designed an extensive diagnostic evaluation process to help us find out if you’re a candidate for our program.<br /><br />

						This extensive evaluation will give you ALL the information that you need to know before starting treatment so you can be assured if you will have success with your neuropathy pain program.
					</p>
				`}
			/>

			<section className={clsx(styles.accordion, 'pt-small')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'pb-smaller')}>
						<span className='h4 green'>
							There are 4 vital components to
						</span><br />
						<span className='h2'>
							Our Neuropathy Protocol
						</span>
					</h2>

					<div className={styles.accordions}>

						<Accordion
							title='Electromagnetic Infrared Therapy'
							children={`
								<p>
									One of the treatment technologies we use to increase blood flow and repair the nerve is our new Low-Level Light Therapy (LLLT). The light therapy signals Vasoendothelial Growth (VEGF), which signals the production of angiogenesis. Angiogenesis is the creation of the new blood vessels, which is needed to repair nerve damage. These blood vessels grow back around the peripheral nerves and provide them with the proper nutrients to heal and repair. This technology has 21 peer-reviewed studies with a 97% success rate with peripheral neuropathy.
								</p>
							`}
						/>

						<Accordion
							title='Electrostimulation'
							children={`
								<p>
									We use state of the art digital electro therapeutic stimulation to assist in the growth of the nerves called Nerve Re-Education. This is used by the Cancer Centers of America in order to help those going through Chemotherapy rebuild the nerves. Nerve Re-Education can even be done at home, so therapy can be done daily! The results can be immediate in both pain relief and restoration of normal sensation.
								</p>
							`}
						/>

						<Accordion
							title='Advanced Nutrition Therapy'
							children={`
								<p>
									Proper nutrition in support of our other VITAL COMPONENTS is vital for optimal tissue and nerve repair. Our Advanced Nutritional Therapies have been to designed to accelerate the healing process by affecting the complex processes of inflammation, blood flow, and bioavailable nitric oxide.
								</p>
							`}
						/>

						<Accordion
							title='In-Clinic Visits & Online Education'
							children={`
								<p>
									In synergy with your home infrared electromagnetic & electrostimulation therapy you will visit the office 1x per week for our in-clinic protocol. Each vital component is equally important for patient results.
								</p>
							`}
						/>

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
