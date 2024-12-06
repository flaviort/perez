'use client'

// libraries
import { useState } from 'react'
import clsx from 'clsx'

// components
import InternalBanner from '@/components/InternalBanner'
import BookMyAppointment from '@/components/BookMyAppointment'
import FeaturedArticle from '@/components/FeaturedArticle'

// images
import banner from '@/assets/img/photo-12.jpg'

// css
import styles from './index.module.scss'

// db
import { videos } from '@/db/videos'
import { blogs } from '@/db/blogs'

export default function Blogs() {

	const [toggleMedia, setToggleMedia] = useState<'video' | 'blog'>('video')

	const toggleVideoOrBlog = (type: 'video' | 'blog') => {
        setToggleMedia(type)
	}

	return (
		<main className={styles.blogs}>

			<InternalBanner
				className={styles.banner}
				image={banner.src}
				title='Videos / News'
			>
				<div className={styles.buttons}>

					{[
						{
							title: 'Videos',
							slug: 'video'
						},
						{
							title: 'News',
							slug: 'blog'
						}
					].map((item, i) => {

						const safeSlug = item.slug as 'video' | 'blog'
						
						return (
							<button
								key={i}
								className={clsx(
									'button button--hollow-white font-title text-24',
									toggleMedia === safeSlug && styles.active
								)}
								onClick={() => toggleVideoOrBlog(safeSlug)}
								type='button'
							>
								{item.title}
							</button>
						)

					})}

				</div>
			</InternalBanner>

			<section className={clsx(styles.articles, 'py-medium')}>
				<div className='container'>
					<div className={clsx(
						styles.grid,
						toggleMedia === 'video' ? styles.videos : styles.blogs
					)}>

						{toggleMedia === 'video' && videos.map((item, i) => (
							<FeaturedArticle
								key={i}
								image={item.image}
								title={item.title}
								videoUrl={item.videoUrl}
							/>
						))}

						{toggleMedia === 'blog' && blogs.map((item, i) => (
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
