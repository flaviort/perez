// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import InternalBanner from '@/components/InternalBanner'
import Fancybox from '@/components/utils/fancybox'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/photo-11.jpg'
import zone_01 from '@/assets/img/zone-technique/zone-01.jpg'
import zone_02 from '@/assets/img/zone-technique/zone-02.jpg'
import zone_03 from '@/assets/img/zone-technique/zone-03.jpg'
import zone_04 from '@/assets/img/zone-technique/zone-04.jpg'
import zone_05 from '@/assets/img/zone-technique/zone-05.jpg'
import zone_06 from '@/assets/img/zone-technique/zone-06.jpg'
import video_01 from '@/assets/img/zone-technique/video-01.jpg'
import video_02 from '@/assets/img/zone-technique/video-02.jpg'
import video_03 from '@/assets/img/zone-technique/video-03.jpg'
import video_04 from '@/assets/img/zone-technique/video-04.jpg'
import video_05 from '@/assets/img/zone-technique/video-05.jpg'
import video_06 from '@/assets/img/zone-technique/video-06.jpg'

// svg
import { Play } from '@/assets/svg/ux'

// css
import styles from './index.module.scss'

// metadata
export const metadata = {
	title: 'Zone Technique | Perez Wellness'
}

export default function ZoneTechnique() {
	return (
		<main className={styles.zoneTechnique}>

			<InternalBanner
				image={banner.src}
				title='Zone Technique'
			/>

			<section className={clsx(styles.blocks, 'py-medium')}>
				<div className='container'>
					<div className={styles.grid}>
						{[
							{
								title: 'Glandular System',
								text: 'Balancing the glandular system supports:',
								list: [
									'Strong immune function',
									'Great concentration and memory',
									'Perfect sleep',
									'Normal appetite',
									'Excellent skin, hair and nails',
									'Normal energy and emotional balance',
									'Excellent reproductive function'
								],
								zoneImage: zone_01.src,
								video: {
									image: video_01.src,
									url: 'https://vimeo.com/680107265'
								}
							},
							{
								title: 'Eliminative System',
								text: 'Balancing the eliminative system supports:',
								list: [
									'Asthma',
									'Less colds and flu',
									'Normal breathing ability',
									'Powerful immune function and ability to fight infection',
									'Proper bowel movements',
									'Proper allergen removal'
								],
								zoneImage: zone_02.src,
								video: {
									image: video_02.src,
									url: 'https://vimeo.com/680107729'
								}
							},
							{
								title: 'Nervous System',
								text: 'Balancing your nervous system supports:',
								list: [
									'Excellent balance',
									'Strong mental acuity',
									'Normal digestion and elimination',
									'Normal sleep',
									'Ability to relax and be energized when you want to',
									'Normal sense function, i.e. eyes, ears, nose, etc.',
									'Ability to heal quickly',
									'Normal emotional adaptation'
								],
								zoneImage: zone_03.src,
								video: {
									image: video_03.src,
									url: 'https://vimeo.com/680108197'
								}
							},
							{
								title: 'Digestive System',
								text: 'Balancing the digestive system supports:',
								list: [
									'Immune function',
									'Decreased sensitivities to foods',
									'Normal appetite',
									'Normal weight',
									'Normal bowel movements',
									'Normal function of gall bladder, liver, kidneys, pancreas, stomach, etc.',
									'Normal digestion and assimilation of all foods',
									'Normal blood sugar'
								],
								zoneImage: zone_04.src,
								video: {
									image: video_04.src,
									url: 'https://vimeo.com/680108695'
								}
							},
							{
								title: 'Muscular System',
								text: 'Balancing the muscular system supports:',
								list: [
									'Normal feeling in all limbs',
									'Strong muscles, bones ligaments, tendons, and joints',
									'Ability to move and do what you want, when you want it',
									'Healthy pain free muscles and joints',
									'Excellent joint motion',
									'Proper posture'
								],
								zoneImage: zone_05.src,
								video: {
									image: video_05.src,
									url: 'https://vimeo.com/680109069'
								}
							},
							{
								title: 'Circulatory System',
								text: 'Balancing the circulatory system supports:',
								list: [
									'Normal functioning thyroid gland',
									'Normal cardiovascular function',
									'Normal lymphatic function (elimination of toxins and waste matter)',
									'Perfect working heart and lungs',
									'Excellent blood flow to all organs and tissues'
								],
								zoneImage: zone_06.src,
								video: {
									image: video_06.src,
									url: 'https://vimeo.com/680109416'
								}
							}
						].map((item, i) => (
							<div className={styles.block} key={i}>

								<div className={styles.top}>

									<p className={clsx(styles.zone, 'h4 white bg-gray-darker')}>
										Zone {i + 1}:
									</p>

									<h3 className='h3'>
										{item.title}
									</h3>

								</div>

								<div className='row mt-smallest mt-sm-smaller'>

									<div className={clsx(styles.left, 'col-lg-4')}>

										<p className={styles.desc}>
											<strong>
												{item.text}
											</strong>
										</p>

										<ul className='ul'>
											{item.list.map((subItem, i2) => (
												<li key={i2}>
													{subItem}
												</li>
											))}
										</ul>

									</div>

									<div className={clsx(styles.middle, 'col-sm-5 col-lg-3')}>
										<Image
											src={item.zoneImage}
											alt={item.title}
											width={350}
											height={525}
										/>
									</div>

									<div className={clsx(styles.right, 'col-sm-7 col-lg-5')}>
										<Fancybox
											options={{
												autoFocus: true,
												dragToClose: false,
												idle: false,
												mainClass: 'fullscreen-fancybox'
											}}
										>
											<a
												data-fancybox='zone'
												href={item.video.url}
												className='cover'
											>

												<span className={styles.circle}>
													<Play />
												</span>

												<Image
													src={item.video.image}
													alt='Dra Erica Perez'
													fill
													sizes='
														(min-width: 993px) 30vw,
														(min-width: 768px) 50vw,
														95vw
													'
													className='cover'
												/>

											</a>
										</Fancybox>
									</div>

								</div>

							</div>
						))}
					</div>
				</div>
			</section>

			<BookMyAppointment />

		</main>
	)
}
