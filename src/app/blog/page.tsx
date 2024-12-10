// components
import AllBlogs from './allBlogs'
import BookMyAppointment from '@/components/BookMyAppointment'

// css
import styles from './index.module.scss'

// graphql
import { getPosts } from '@/utils/graphql'

// metadata
export const metadata = {
	title: 'Blogs & Videos | Perez Wellness'
}

export default async function BlogWrapper() {

	const posts = await getPosts()

	return (
		<main className={styles.blogs}>

			<AllBlogs posts={posts} />

			<BookMyAppointment />

		</main>
	)
}