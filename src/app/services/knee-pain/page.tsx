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
import banner from '@/assets/img/services/knee-pain.jpg'
import hand from '@/assets/img/services/hand.jpg'
import knee from '@/assets/img/services/knee.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

export const metadata = {
	title: 'Knee Pain | Services | Perez Wellness'
}

export default function KneePain() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Knee Pain
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
									alt='Knee Pain'
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
									Knee Pain Sufferers Can Finally Find Fast Relief With A New Non-Invasive, Non-Surgical Knee Pain Treatment.
								</h2>

								<p>
									<strong>End Knee Pain without Dangerous Drugs or Surgery.</strong> Breakthrough Treatment has an Astounding Success Rate. There is a new FDA cleared, safe, gentle, and effective therapy for people who suffer from knee pain due to Osteoarthritis, Bone Spurs, Trauma Related Knee Pain, Degenerative Arthritis, and other conditions that lead to Chronic Knee Pain including.
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.imageText, styles.hasGradientTop, 'mt-small mb-smaller pt-medium pt-md-small')}>
				<div className='container z3'>
					
					<div className='row mb-smaller'>

						<div className={clsx(styles.image, 'col-md-6 col-md-push-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={knee}
									alt='Knee Pain'
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
									Symptoms of Knee Pain
								</h2>

								<p>
									Knee pain can be quite debilitating, as it is one of the most used and complex joints of the human body. The stability of the knee is due to four ligaments, muscles and the actual joint structure. During the course of a normal day, the knee goes through a whole range of motions, from sitting, walking, twisting etc.<br /><br />
								
									The knee also supports our weight in conjunction to the feet. Because of the abuse we put our knees through, there can be damage to the muscle, cartilage, or the joint itself. Some of the pain can be alleviated with the use of anti-inflammatory ointments or tablets, more severe cases need medical attention for a more effective treatment while some patients have even had their knee or knees replaced.
								</p>

							</div>
						</div>

					</div>

					<p className={styles.center}>
						<strong>
							These can vary from person to person and can range from nagging to acute pain, or discomfort while doing normal daily chores.
						</strong>
					</p>

					<div className='row mt-smaller'>

						<div className='col-sm-6 col-lg-4 col-xl-3'>
							<ul className='ul'>
								<li>Inflammation of the joint</li>
								<li>Tenderness around the area</li>
								<li>Instability [knee gives way for no reason]</li>
							</ul>
						</div>

						<div className='col-sm-6 col-lg-4 col-xl-3'>
							<ul className='ul'>
								<li>Locking</li>
								<li>A feeling of grinding</li>
							</ul>
						</div>

						<div className='col-sm-6 col-lg-4 col-xl-3'>
							<ul className='ul'>
								<li>Popping</li>
								<li>Stiffness</li>
							</ul>
						</div>

						<div className='col-sm-6 col-lg-4 col-xl-3'>
							<ul className='ul'>
								<li>Injury to the knee</li>
								<li>Can manifest it-self with body aches and back pain</li>
							</ul>
						</div>

					</div>

				</div>
			</section>

			<GrayBlock
				className=''
				title='We provide a Safe and Effective, New Choice for Knee Pain Sufferers.'
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
							Our Knee Pain Protocol
						</span>
					</h2>

					<div className={styles.accordions}>

						<Accordion
							title='Atomic Spin Technology Knee Therapy'
							children={`
								<p>
									Chronic pain is often perpetuated by abnormal, small nerve networks stuck in a rut of constant inflammation. PEMF stimulation (especially with high intensities) quiets down nerves and facilitates recovery from injury and inflammation. Even patients suffering from stubborn or systemic sources of pain have found pain relief using magnetic therapies.
								</p>
							`}
						/>

						<Accordion
							title='Electromagnetic Infrared Therapy'
							children={`
								<p>
									Peer reviewed studies show that BluePrint’s patient-wearable infrared home device has a 90 percent  knee pain reduction to improve lower body function. Infrared decreases acute and chronic pain by stimulating a cascade of many natural biological processes. It increases metabolism of the injured tissue and production of ATP. Cell membranes are repolarized to increase circulation thus reducing inflammation and edema. Infrared also prevents the release of biochemicals that stimulate pain receptors to directly relieve pain.
								</p>
							`}
						/>

						<Accordion
							title='Advanced Knee Decompression'
							children={`
								<p>
									We use a revolutionary product that provides knee decompression. The knee traction system offers benefits for those suffering with chronic knee pain due to osteoarthritis, previous injury, failed surgery and more. Studies show that mechanical traction is more effective at decreasing pain and improving quality of life than ultrasound and exercise combined. With chronic knee pain affecting the steps you take on a daily basis, improving quality of life is of utmost importance.
								</p>
							`}
						/>

						<Accordion
							title='Advanced Nutrition Therapy'
							children={`
								<p>
									Proper nutrition in support of our other VITAL COMPONENTS is vital for optimal tissue and joint repair. Our Advanced Nutritional Therapies have been to designed to accelerate the healing process by affecting the complex processes of inflammation, blood flow, and bioavailable nitric oxide.
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
