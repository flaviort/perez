// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import FeaturedArticle from '@/components/FeaturedArticle'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import banner from '@/assets/img/blogs/zone.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from './index.module.scss'

// db
import { blogs } from '@/db/blogs'

export const metadata = {
	title: 'Blog | Services | Perez Wellness'
}

export default function BlogInner() {
	return (
		<main className={styles.blogInner}>

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
									alt='What is the “Zone Technique” in Chiropractic Care?'
									fill
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

								<h1 className='h2 green'>
									What is the “Zone Technique” in Chiropractic Care?
								</h1>

								<p className={styles.date}>
									2024 / February
								</p>

							</div>
						</div>

					</div>
				</div>

			</section>

			<section className={clsx(styles.content, 'mt-small')}>
				<div className='container'>
					<div className={styles.wrapper}>

						<p>
							The Zone Technique is a unique approach to chiropractic care that is focused on the balance and alignment of the body's zones. The zones are specific areas of the body that correspond to different functions, such as the respiratory, digestive, and immune systems.
						</p>

						<p>
							This technique was developed by Dr. Peter Goldman, a chiropractor who found that many of his patients were not responding to traditional chiropractic techniques. He discovered that by addressing the zones of the body, he could provide more effective treatment and help his patients achieve better health and wellness.
						</p>

						<p>
							The Zone Technique is based on the premise that there are six different zones in the body, each associated with a specific system or function. These zones are:
						</p>

						<h3>
							Zone 1 - Glandular System
						</h3>

						<p>
							Balancing the glandular system supports:
						</p>

						<ul>
							<li>strong immune function</li>
							<li>great concentration and memory</li>
							<li>perfect sleep</li>
							<li>normal appetite</li>
							<li>excellent skin, hair, and nails</li>
							<li>normal energy and emotional balance</li>
							<li>excellent reproductive function</li>
						</ul>

						<h3>
							Zone 2 - Eliminative System
						</h3>

						<p>
							Balancing the eliminative system supports:
						</p>

						<ul>
							<li>asthma</li>
							<li>fewer colds and flu</li>
							<li>normal breathing ability</li>
							<li>powerful immune function and ability to fight infection</li>
							<li>proper bowel movements</li>
							<li>proper allergen removal</li>
						</ul>

						<h3>
							Zone 3 - Nervous System
						</h3>

						<p>
							Balancing your nervous system supports:
						</p>

						<ul>
							<li>excellent balance</li>
							<li>strong mental acuity</li>
							<li>normal digestion and elimination</li>
							<li>normal sleep</li>
							<li>ability to relax and be energized when you want to</li>
							<li>normal sense function, i.e. eyes, ears, nose, etc.</li>
							<li>ability to heal quickly</li>
							<li>normal emotional adaptation</li>
						</ul>

						<h3>
							Zone 4 - Digestive System
						</h3>

						<p>
							Balancing the digestive system supports:
						</p>

						<ul>
							<li>immune function</li>
							<li>decreased sensitivities to foods</li>
							<li>normalize appetite</li>
							<li>normal weight</li>
							<li>normal bowel movements</li>
							<li>the normal function of the gall bladder, liver, kidneys, pancreas, stomach, etc,</li>
							<li>normal digestion and assimilation of all foods</li>
							<li>normal blood sugar</li>
						</ul>

						<h3>
							Zone 5 - Muscular System
						</h3>

						<p>
							Balancing the muscular system supports:
						</p>

						<ul>
							<li>normal feeling in all limbs</li>
							<li>strong muscles, bones, ligaments, tendons, and joints</li>
							<li>ability to move and do what you want, when you want</li>
							<li>healthy pain-free muscles and joints</li>
							<li>excellent joint motion</li>
							<li>proper posture</li>
						</ul>

						<h3>
							Zone 6 - Circulatory System
						</h3>

						<p>
							Balancing the circulatory system supports:
						</p>

						<ul>
							<li>the normal functioning thyroid gland</li>
							<li>normal cardiovascular function</li>
							<li>normal lymphatic function (elimination of toxins and waste matter)</li>
							<li>perfect working heart and lungs</li>
							<li>excellent blood flow to all organs and tissues</li>
						</ul>

						<p>
							When a patient presents with a health issue, the chiropractor will examine the patient to determine which zone is affected. Once the affected zone has been identified, the chiropractor will use specific techniques to restore balance and alignment to that zone.
						</p>

						<p>
							The Zone Technique involves gentle touch and pressure to specific areas of the body to help balance the body's zones. By restoring balance to the zones, the body is able to function more effectively, which can help improve overall health and wellness.
						</p>

						<h2>
							Some of the benefits of the Zone Technique include:
						</h2>

						<p>
							<b>Improved Immune Function -</b> By addressing the immune zone, the body's immune system can function more effectively, which can help prevent illness and disease.
						</p>

						<p>
							<b>Pain Relief -</b> By addressing the affected zone, the body can experience pain relief.
						</p>

						<p>
							<b>Improved Digestion -</b> By addressing the digestive zone, the body can better digest food, which can lead to improved overall health.
						</p>

						<p>
							<b>Improved Sleep -</b> By addressing the head zone, the body can experience better sleep and reduced stress.
						</p>

						<p>
							If you are struggling with health issues that are not responding to traditional chiropractic techniques, consider trying the Zone Technique.
						</p>

						<p>
							By addressing the underlying imbalances in your body's zones, you can achieve better health and wellness.
						</p>

						<p>
							To learn more about the Zone Technique and how it may benefit you, schedule an appointment with Dr. Erica Perez who is experienced in this technique.
						</p>

						<p>
							With the proper care and support, you can start on the path to improved health and well-being.
						</p>

						<h3>
							Zone CERTIFIED IN DALLAS TEXAS
						</h3>

						<p>
							DR. ERICA PEREZ<br/ >
							PEREZ CHIROPRACTIC AND WELLNESS<br/ >
							6116 N Central Expy Suite 160, Dallas, TX 75206<br/ >
							(214) 823-2511
						</p>

					</div>
				</div>
			</section>

			<section className={clsx(styles.related, 'mb-medium')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'h2')}>
						Related Articles
					</h2>

					<div className={styles.wrapper}>
						{blogs.slice(0, 2).map((item, i) => (
							<FeaturedArticle
								key={i}
								image={item.image}
								title={item.title}
								href={item.href}
							/>
						))}
					</div>

				</div>
			</section>

			<BookMyAppointment />

		</main>
	)
}