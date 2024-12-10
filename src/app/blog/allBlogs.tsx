'use client'

// libraries
import { useState } from 'react'
import clsx from 'clsx'

// components
import InternalBanner from '@/components/InternalBanner'
import FeaturedArticle from '@/components/FeaturedArticle'

// images
import banner from '@/assets/img/photo-12.jpg'

// css
import styles from './index.module.scss'

// db
import { videos } from '@/db/videos'

export default function AllBlogs({ posts }: { posts: any[] }) {

	const [toggleMedia, setToggleMedia] = useState<'video' | 'blog'>('video')

	const toggleVideoOrBlog = (type: 'video' | 'blog') => {
        setToggleMedia(type)
	}

	return (
		<>

			<InternalBanner
				className={styles.banner}
				image={banner.src}
				title='Videos / Blog'
			>
				<div className={styles.buttons}>

					{[
						{
							title: 'Videos',
							slug: 'video'
						},
						{
							title: 'Blog',
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

						{toggleMedia === 'blog' && posts.map((item: {
							featuredImage: any,
							title: string,
							slug: string
						}, i: number) => (
							<FeaturedArticle
								key={i}
								image={item.featuredImage?.node?.sourceUrl}
                                title={item.title}
                                href={`/blog/${item.slug}`}
							/>
						))}

					</div>
				</div>
			</section>

		</>
	)
}
