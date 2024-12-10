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
import banner from '@/assets/img/services/weight-loss.jpg'
import weight from '@/assets/img/services/weight.jpg'
import weight_2 from '@/assets/img/services/weight-2.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from '../index-inner.module.scss'

// utils
import { placeholder } from '@/utils/functions'

export const metadata = {
	title: 'Weight Loss | Services | Perez Wellness'
}

export default function WeightLoss() {
	return (
		<main className={styles.servicesInner}>

			<section className={clsx(styles.pageTitle, 'my-smaller')}>
				<div className='container'>
					<div className={clsx(styles.box, 'white bg-gray-darker p-smallest')}>
						<h1 className='h3'>
							Weight Loss
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
									alt='Weight Loss'
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
									Are you ready to get back into those pants that’s been hanging in your closet for years...
								</h2>

								<ul className='ul'>

									<li>
										are you ready for the brain fog to lift and energy come back,
									</li>

									<li>
										are you ready to want to look into the mirror again,
									</li>

									<li>
										are you ready to walk into a room with confidence and not feeling judged,
									</li>

									<li>
										are you ready to lose those pounds and actually keep them off permanently
									</li>

									<li>
										and increase your health for yourself, family, friends and purpose.
									</li>

								</ul>

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
									src={weight}
									alt='Weight Loss'
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

						<div className={clsx(styles.text, 'col-md-6 col-md-pull-6 py-md-smaller pr-xl-smaller')}>
							<div className={styles.wrapper}>

								<h2 className='h3'>
									While reading this you will be mostly excited but maybe a little frustrated.
								</h2>

								<p>
									Frustrated that you did not have this information before now, but very excited because the solution is finally here. What we’ve realized, after asking hundreds of patients what they think the root cause of their weight gain may be, we have found out that they have no idea. Most of the time we hear things like, they are eating too much and moving too little. Don't we all wish it was that simple!
								</p>

								<h3 className='h4'>
									The truth is, there are 8 root causes of weight gain.
								</h3>

								<p>
									But before we pull back the curtain on how to correct these causes let’s take a brief look of what he are up against.<br /><br />

									So in order to lose weight and gain health you must address the root cause of your weight gain and have the correct accountability and support. Let us show you how blueprint to weight loss provides both.<br /><br />
								</p>

							</div>
						</div>

						<div className='col-12 mt-smaller'>
							<p>
								When it comes down to it, we have to get down to the basics and address the root causes that we are about to discuss to achieve the permanent weight loss desired. Over the course of our program we will be teaching your mind and body how to burn fat instead of sugar, eliminate the cravings and lower stress while increasing energy.<br /><br />

								So let’s expose the 8 root causes of your weight gain so we can show you exactly what to do about them so your weight loss efforts and goals become permanent.
							</p>
						</div>

					</div>
				</div>
			</section>

			<GrayBlock
				title='With our three phases of care approach we will address Candida, Toxicity, Thyroid, Hunger Hormones, Sleep, Stress, Brain-Based Food Cravings, and Food Management.'
				text={`
					<p>
						These are the 8 culprits of weight gain that are never addressed in a synergistic way to not just lose weight but to keep it off.
					</p>
				`}
			/>

			<section className={clsx(styles.accordion, 'pt-small')}>
				<div className='container'>
					<div className={styles.accordions}>

						<Accordion
							title='Candida'
							children={`
								<p>
									<strong>Candida is a yeast and a fungus found in the gut lining of the body.</strong> A little is okay, but when there is an overgrowth it starts to cause some serious health issues that keeps those extra pounds on that seem to never be able to come off.
								</p>
							`}
						/>

						<Accordion
							title='Toxicity'
							children={`
								<p>
									<strong>Half the U.S. population suffer from JFH Syndrome.</strong> That’s the “Just Feel Horrible” Syndrome. It’s not really a syndrome, but sometimes it’s annoying little symptoms such as achy joints or muscles, brain fog, fatigue, headaches, and unexplained weight gain that keeps you feeling down and out. Toxicity could be the cause of most of these ailments and detoxification could be the solution, especially for weight gain.
								</p>
							`}
						/>

						<Accordion
							title='Thyroid'
							children={`
								<p>
									<strong>The thyroid has a big job.</strong> The hormones it secretes help maintain a healthy heart rate, maintain healthy skin, and play a crucial role in your metabolism. When the gland is sluggish, due to candida, as we just discussed, it can rob you of your energy, dry out your skin, and make your joints ache. Those are all undesirable symptoms, but what we’re specifically talking about here is that it can cause dramatic weight gain.
								</p>
							`}
						/>

						<Accordion
							title='Hunger Hormones'
							children={`
								<p>
									<strong>When we mentioned hormones in this program we are not talking about progesterone, testosterone and estrogen.</strong> Although they do play a role in weight gain, but ghrelin, leptin, adiponectin, insulin and cortisol are hormones that truly are the missing link when it comes to achieving permanent weight loss. These hormones give us feedback on things like the feeling of fullness, appetite, energy balance, and fat storage.
								</p>
							`}
						/>

						<Accordion
							title='Sleep'
							children={`
								<p>
									<strong>Research suggests an association between sleep restriction and negative changes in metabolism.</strong> In adults, sleeping 4 hours a night, compared to 8-10 hours a night, appears to increase hunger and appetite particularly for calorie-dense foods high in carbohydrates.
								</p>
							`}
						/>

						<Accordion
							title='Stress'
							children={`
								<p>
									<strong>Experts have agreed that stress management is a critical part of weight loss regimens,</strong> particularly in those who have a busy life with jobs, families and other responsiblities. Another overlooked aspect of stress and weight loss is not just the emotional stress, its the oxidative stress as well. As fat storage expands when the body gets inflamed so we of course address the stress inflammation response in our program.
								</p>
							`}
						/>

						<Accordion
							title='Brain based food Cravings'
							children={`
								<p>
									<strong>We have been raised to think that food cravings come from a simple desire to eat that specific food.</strong> But most of the time, it’s a signal from your body that there is a deficiency of some sort, a nutritional need or an imbalance in your body and/or brain chemistry.
								</p>
							`}
						/>

						<Accordion
							title='Food Management'
							children={`
								<p>
									<strong>You will see just how easy it can be to get your clean eating on track.</strong> Whether you want to lose a few pounds or get back to your ideal weight, eating proper portions is as important as eating the right foods.
								</p>
							`}
						/>

					</div>

				</div>
			</section>

			<ThreeComponents />

			<section className={clsx(styles.imageText, 'mb-medium')}>
				<div className='container'>
					<div className='row'>

						<div className={clsx(styles.image, 'col-md-6')}>

							<Leaf className={styles.leafInner} />

							<div className={styles.photo}>
								<Image
									src={weight_2}
									alt='Weight Loss'
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

								<h2 className='h4'>
									We understand this seems like a lot of things to address but it really is a simple solution when you utilize our blueprint to weight loss nutrition kit which includes the proper supplementation to address each of these 8 root causes and our handbook and active workbook which is included as well.
								</h2>

								<p>
									We will also be here to support you through your journey of finally addressing the root causes of weight gain by giving you a lifetime program to be sure that the weight stays off and all the additional online assistance that you need which is all doctor supervised.<br /><br />

									<strong>Forget the addictive weight loss medications, risky surgeries, and fad diets.</strong>
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
