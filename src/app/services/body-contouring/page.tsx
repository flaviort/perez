// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import Accordion from '@/components/Accordion'
import ThreeComponents from '@/components/ThreeComponents'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/body-contouring.jpg'
import molecule from '@/assets/img/services/molecule.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

// utils
import { placeholder } from '@/utils/functions'

export const metadata = {
	title: 'Body Contouring | Services | Perez Wellness'
}

export default function BodyContouring() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Body Contouring
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
									alt='Body Contouring'
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

								<h2 className='h4 green'>
									Non-Surgical Body Contouring is now available by our Top Doctors in your city.
								</h2>

								<p>
									Low Level Light Body Contouring is rapidly becoming one of the most sought after procedures, preferred by both men and women. Men, as well as women, have problematic areas of excess fat accumulation. While men have excessive fat accumulation in areas such as love handles, abdomen and chest, women tend to have trouble with the thighs, arms, hips, buttocks, and abdomen. All those who have excess skin or fat in any of these areas can benefit from this form of body contouring.
								</p>

							</div>
						</div>

					</div>
				</div>
			</section>

			<section className={clsx(styles.accordion, 'pt-small')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'h3 green')}>
						Got Questions?
					</h2>

					<p className={clsx(styles.center, 'pb-smaller')}>
						(Click Question to Expose Answer)
					</p>

					<div className={styles.accordions}>

						<Accordion
							title='What is LLLT?'
							children={`
								<p>
									LLLT stands for Low Level Light Therapy. This is different than a medical or aesthetic laser treatment because the energy emitted by a LLLT device is much lower than a medical or aesthetic laser system. The effects on the patient’s skin with a LLLT device are gradual, as compared with a medical or aesthetic laser that delivers an immediate response. LLLT devices are much safer to operate as compared to medical or aesthetic laser systems.
								</p>
							`}
						/>

						<Accordion
							title='What does a Contour Light treatment feel like?'
							children={`
								<p>
									The patient will lie on a treatment bed and the pads are placed over the area to be treated. The system will be turned on and the patient will feel a slight warming sensation, but no pain or discomfort. Most patients can read or use their phone/portable device, while some will even take a short nap.
								</p>
							`}
						/>

						<Accordion
							title='How long will the results last?'
							children={`
								<p>
									Results will vary from patient to patient, primarily due to the commitment by the patient to their goals. If a patient maintains a healthy lifestyle of a diet and exercise program that promotes weight control, their results can be long term.
								</p>
							`}
						/>

						<Accordion
							title='Can anyone be treated?'
							children={`
								<p>
									A Contour Light treatment is safe and effective for anyone who does not have a medical condition that reduces their ability to eliminate waste via the liver and kidneys. Patients are recommended to consult their physician before starting any type of diet or exercise program.
								</p>
							`}
						/>

						<Accordion
							title='Do patients need to follow a strict diet and exercise regimen?'
							children={`
								<p>
									The protocol associated with the Contour Light system involves simple to follow directions, but does not require a strict diet or strenuous exercise. As with any type of weight modifying program, diet and exercise will have an effect on the results, specifically if a person does not make an attempt to maintain a healthy lifestyle. A specific supplement, a small amount of exercise and a recommended level of water consumption will help with lymphatic stimulation to optimize results. The Contour Light protocol can help to motivate a person and jumpstart a person’s determination to improve their appearance, making it much easier to attain their goal of a sleeker and sexier profile.
								</p>
							`}
						/>

						<Accordion
							title='What areas of the body can be treated?'
							children={`
								<p>
									The Contour Light can be used on any part of the body; hips, waist, thighs, back, upper arms and neck.
								</p>
							`}
						/>

						<Accordion
							title='Is the Contour Light device safe?'
							children={`
								<p>
									Yes. The light emitted by the Contour Light does not generate excessive heat and will not cause a burn. The light is very bright and should not be looked at directly for an extended period of time, but is much safer than a laser device that can damage eyes with even a slight glance into the beam.
								</p>
							`}
						/>

						<Accordion
							title='What can a person do to optimize their results?'
							children={`
								<p>
									To achieve optimal results with the Contour Light treatments, the patient should follow the simple steps outlined in our protocol. This protocol involves a moderate diet, minimal exercise, reasonable water consumption and daily supplements. Any individual who is committed to improving their appearance will have no problem following these guidelines.
								</p>
							`}
						/>

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
									src={molecule}
									alt='The Technology'
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
									The Technology
								</h2>

								<p>
									Clinical studies have proven that exposure to 635nm light causes a stimulation of the subcutaneous fat cells, resulting in the release of triglycerides into the interstitial region of the body. This requires the proper balance within a person’s system to efficiently process the excess fatty acids.<br /><br />

									Results for the patient are the utmost priority and providing every patient with a complete set of tools to reach their individual goal is a necessity. The patient should drink plenty of water to flush their lymphatic system, and of course their diet is important, while some form of exercise is beneficial, but neither has to be restricting or stressful to achieve the desired effect.<br /><br />

									All light in the mid-600nm wavelength, whether it is laser or LED, will cause the reaction of the fat cells and the two key factors are the amount of light energy delivered and the wavelength.<br /><br />

									The Contour Light produces up to 100 times more light energy than competing systems in this market, at the same 635nm wavelength.
								</p>

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
