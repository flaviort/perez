// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import WhySlider from '@/components/WhySlider'
import FirstStep from '@/components/FirstStep'

// images
import banner from '@/assets/img/photo-10.jpg'
import about from '@/assets/img/photo-07.jpg'
import approach_01 from '@/assets/img/photo-04.jpg'
import approach_02 from '@/assets/img/photo-01.jpg'
import vision from '@/assets/img/photo-02.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from './index.module.scss'

// utils
import { placeholder } from '@/utils/functions'

export const metadata = {
	title: 'About Us | Perez Wellness'
}

export default function AboutUs() {
	return (
		<main className={styles.aboutUs}>

			<section className={clsx(styles.banner, 'pt-smaller')}>

				<Leaf className={styles.leaf} />
				<LeafOutline className={styles.leafOutline} />

				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.left, 'col-md-6 col-lg-7')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={banner}
									alt='Dra Erica Perez clinic entrance'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
									sizes='
										(min-width: 993px) 60vw,
										95vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.right, 'col-md-6 col-lg-5 py-md-smallest')}>
							<div className={styles.wrapper}>

								<h1>
									<span className='green h4'>Your Health Journey</span><br />
									<span className='h2'>Is Our Passion</span>
								</h1>

								<p className={styles.desc}>
									At Perez Wellness Center, we believe that every step of your health journey matters. Whether you’re here for pain relief, weight management, or overall wellness, we understand the importance of feeling truly supported and understood in your care.<br /><br />

									<span className='text-20'>
										<strong>Dr. Erica Perez's</strong> personal journey into chiropractic medicine is rooted in a deep commitment to healing and empowering others to live healthier, fuller lives.
									</span>
								</p>

							</div>
						</div>

					</div>
				</div>

			</section>

			<section className={clsx(styles.about, 'pt-sm-small')}>
				<div className='container'>
					<div className={clsx(styles.greenWrapper, 'white bg-green py-small px-sm-small')}>

						<h2 className={clsx(styles.title, 'pb-smaller')}>
							<span className='h4'>A Passion for Healing</span><br />
							<span className='h2'>Born from Experience</span>
						</h2>

						<div className='row'>

							<div className={clsx('col-lg-6 col-lg-push-6', styles.right)}>

								<LeafOutline className={styles.leaf} />

								<div className={styles.photo}>
									<Image
										src={about}
										alt='Dra Erica Perez'
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

							<div className={clsx('col-lg-6 col-lg-pull-6', styles.left)}>
								<p className={styles.desc}>
									Dr. Erica Perez’s path to wellness wasn’t just about studying medicine—it was a calling inspired by her own experiences with pain, injury, and recovery. Having faced physical and emotional challenges that many of her patients struggle with today, she understands the frustration and limitations that come from living with chronic pain or unaddressed health issues.<br /><br />

									Driven by a passion to not only find answers but to <strong>help others reclaim their health,</strong> Dr. Perez discovered chiropractic medicine. She recognized the power of holistic, non-invasive care that treats the root causes of discomfort, rather than just addressing surface symptoms. It was this discovery that led her to dedicate her life to creating a space where your health and well-being are always the priority.
								</p>
							</div>

						</div>
					</div>
				</div>
			</section>

			<section className={clsx(styles.approach, 'py-small')}>

				<div className={styles.gradient} />

				<div className='container z3'>
					<div className='row'>

						<div className={clsx(styles.left, 'col-md-6')}>

							<Leaf className={styles.leafTop} />
							<Leaf className={styles.leafBottom} />

							<div className={styles.photoFront}>
								<Image
									src={approach_01}
									alt='Dra Erica Perez'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
									sizes='
										(min-width: 993px) 30vw,
										50vw
									'
									className='cover'
								/>
							</div>

							<div className={styles.photoBack}>
								<Image
									src={approach_02}
									alt='Dra Erica Perez'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
									sizes='
										(min-width: 993px) 30vw,
										50vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.right, 'col-md-6 py-lg-smaller')}>

							<h2 className={styles.title}>
								<span className='h4 green'>A Unique Approach to</span><br />
								<span className='h2'>
									Chiropractic and Wellness
								</span>
							</h2>

							<p>
								Dr. Perez is known for blending traditional chiropractic techniques with <strong>innovative therapies</strong> designed to promote healing, balance, and long-term health. Her personalized, patient-centered approach reflects a genuine care for the whole person, not just the condition or pain they may be experiencing.<br /><br />

								She’s not just here to treat symptoms—she’s committed to empowering you to take control of your health, through education, customized care, and a focus on prevention. From her specialized use of the <strong>Zone Technique</strong> to advanced therapies like <strong>laser therapy</strong> and <strong>red light therapy</strong>, Dr. Perez and her team offer comprehensive solutions that <strong>fit your unique wellness needs.</strong>
							</p>

						</div>

					</div>
				</div>

			</section>

			<WhySlider />

			<section className={clsx(styles.vision, 'pt-md-smallest')}>
				<div className='container'>
					<div className='row'>

						<div className={clsx(styles.right, 'col-md-6 col-md-push-6')}>

							<Leaf className={styles.leafTop} />
							<Leaf className={styles.leafBottom} />

							<div className={styles.photo}>
								<Image
									src={vision}
									alt='Dra Erica Perez'
									fill
									loading='lazy'
                        			placeholder={`data:image/svg+xml;base64,${placeholder()}`}
									sizes='
										(min-width: 993px) 30vw,
										50vw
									'
									className='cover'
								/>
							</div>

						</div>

						<div className={clsx(styles.left, 'col-md-6 col-md-pull-6 pt-smaller pb-md-smaller')}>

							<h2 className={styles.title}>
								<span className='h4 green'>A Holistic Vision</span><br />
								<span className='h2'>for Health</span>
							</h2>

							<p>
								For Dr. Perez, <strong>wellness isn’t just about being pain-free—it’s about thriving.</strong> Her mission is to guide you toward <strong>total wellness</strong>, addressing the physical, emotional, and metabolic factors that affect your well-being. Whether you’re seeking relief from chronic pain, recovering from injury, or looking to improve your overall health, Perez Wellness Center offers the expertise and compassion to help you succeed.
							</p>

						</div>

					</div>
				</div>
			</section>

			<FirstStep />

		</main>
	)
}
