// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import ThreeComponents from '@/components/ThreeComponents'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/services/chiropractic.jpg'
import skeleton from '@/assets/img/services/skeleton.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

// utils
import { placeholder } from '@/utils/functions'

export const metadata = {
	title: 'Chiropractic | Services | Perez Wellness'
}

export default function Chiropractic() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Chiropractic
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
									alt='Chiropractic'
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
									Chiropractors first evaluate and diagnose the spine to find any mis-alignments in the spine.
								</h2>

								<p>
									These mis-alignments in the spine are commonly called “Sub-luxations”, in simpler terms, a “shift”.<br /><br />

									We find these areas by using x-rays, other diagnostic equipment, or by palpating the spine using our hands to determine where and how the spine has been mis-aligned. Chiropractice is a type of medicine based on the scientific fact that our nervous system controls or influences the function of every tissue and cell in your body.<br /><br />

									Interference of the nervous system will affect how the nerves communicate to every muscle, tissue and organ in our body.<br /><br />
									
									By removing the interference of the nerve, the body will heal itself.
								</p>

							</div>
						</div>

					</div>

					<p className='mt-smaller'>
						All body functions are controlled by the nervous system. Sometimes the spinal vertebras will get misaligned which will cause pressure on the nerve which will lead you to feel discomfort/pain and even at times radiating pain to wherever the nerve is traveling.<br /><br />
					
						Once the Doctor finds these areas of misalignments the chiropractor will adjust these areas gently using his/her hands with synergistic technologies, remove the interference of the nerve, which will help reduce the pain or discomfort to the area in which the nerve is affecting.
					</p>

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
									Fun Facts:
								</h2>

								<ul className='ul'>

									<li>
										There are 33 total vertebrae in the spine and the first chiropractic adjustment was performed Sept 18th, 1895.
									</li>

									<li>
										Less than 10% of your nervous system perceives pain, the other 90% is responsible for allowing your body function properly; it is possible to have nerve interference and feel perfectly healthy. How you feel is a poor judge of your health. By the time symptoms appear, many spinal problems are advanced.
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
