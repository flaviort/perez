'use client'

// libraries
import { useState, useRef } from 'react'
import clsx from 'clsx'
import { Swiper as SwiperCore } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'

// components
import FeaturedArticle from '@/components/FeaturedArticle'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// data / utils
import { videos } from '@/db/videos'

// css
import styles from './index.module.scss'

export default function News({ posts }: { posts: any[] }) {

	const sliderRef = useRef<SwiperCore | null>(null)
	const [videoOrBlog, setVideoOrBlog] = useState<'video' | 'blog'>('video')

	const toggleVideoOrBlog = (type: 'video' | 'blog') => {
        setVideoOrBlog(type)
		if (sliderRef.current) {
			sliderRef.current.slideTo(0);
		}
    }

	return (
		<section className={clsx(styles.blog, 'mt-small pt-small')}>

			<div className={styles.bg}></div>

			<Leaf className={styles.leaf} />
			<LeafOutline className={styles.leafOutlineLeft} />
			<LeafOutline className={styles.leafOutlineRight} />

			<div className='container relative z2'>

				<div className={styles.top}>

					<h2 className={clsx('h2', styles.title)}>
						News
					</h2>

					<div className={styles.buttons}>

						<button
							type='button'
							className={clsx(
								'button button--hollow font-title text-24',
								videoOrBlog === 'video' && styles.active
							)}
							onClick={() => toggleVideoOrBlog('video')}
						>
							Video
						</button>

						<button
							type='button'
							className={clsx(
								'button button--hollow font-title text-24',
								videoOrBlog === 'blog' && styles.active
							)}
							onClick={() => toggleVideoOrBlog('blog')}
						>
							Blog
						</button>

					</div>

				</div>

				<Swiper
					modules={[Mousewheel, Pagination]}
					className={styles.slider}
					spaceBetween={20}
					slidesPerView={1}
					loop={false}
					mousewheel={{  
						forceToAxis: true
					}}
					onSwiper={(swiper) => (sliderRef.current = swiper)}
					pagination={{
						type: 'bullets',
						clickable: true,
						el: '.blogs-pagination',
					}}
				>
					{videoOrBlog === 'video' && videos.slice(0, 3).map((item, i) => (
						<SwiperSlide key={i}>
							<FeaturedArticle
								title={item.title}
								image={item.image}
								videoUrl={item.videoUrl}
							/>
						</SwiperSlide>
					))}

					{videoOrBlog === 'blog' && posts.slice(0, 3).map((item: {
							featuredImage: any,
							title: string,
							slug: string
						}, i: number) => (
						<SwiperSlide key={i}>
							<FeaturedArticle
								image={item.featuredImage?.node?.sourceUrl}
                                title={item.title}
                                href={`/blog/${item.slug}`}
							/>
						</SwiperSlide>
					))}

					<div className='blogs-pagination' />
					
				</Swiper>

			</div>

		</section>
	)
}
