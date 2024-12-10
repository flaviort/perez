// libraries
import clsx from 'clsx'
import Image from 'next/image'

// components
import FeaturedArticle from '@/components/FeaturedArticle'
import BookMyAppointment from '@/components/BookMyAppointment'

// images
import notFound from '@/assets/img/blogs/zone.jpg'

// svg
import { Leaf, LeafOutline } from '@/assets/svg/others'

// css
import styles from './index.module.scss'

// graphql
import { getPosts, getPost } from '@/utils/graphql'

export const metadata = {
	title: 'Blog | Services | Perez Wellness'
}

// static paths
export async function generateStaticParams() {
    const posts = await getPosts()
    const paths = posts.map((post: { slug: string }) => ({
        slug: [post.slug]
    }))
    return paths
}

// custom types
type BlogParams = Promise<{
	slug: string[]
}>

export default async function BlogInner(props: { params: BlogParams }) {
    
	const { slug } = await props.params
    const post = await getPost(slug[0])
	
	// this should get all posts to create the related posts
	const allPosts = await getPosts()
	const relatedPosts = allPosts
		.filter((item: { slug: string }) => item.slug !== slug[0])
		.slice(0, 2)

    if (!post) {
        return (
            <main className={styles.blogInner}>
				<section className={styles.notFound}>
					<div className="container">
						<h1 className='h1'>
							Post Not Found
						</h1>
					</div>
				</section>
            </main>
        )
    }

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
									src={post.featuredImage?.node?.sourceUrl || notFound}
									alt={post.title || 'Blog Image'}
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
									{post.title}
								</h1>

								<p className={styles.date}>
									{new Date(post.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</p>

							</div>
						</div>

					</div>
				</div>

			</section>

			<section className={clsx(styles.content, 'mt-small')}>
				<div className='container'>
					<div
						className={styles.wrapper}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</section>

			<section className={clsx(styles.related, 'mb-medium')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'h2')}>
						Related Articles
					</h2>

					<div className={styles.wrapper}>
						{relatedPosts.map((item: {
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

			<BookMyAppointment />

		</main>
	)
}