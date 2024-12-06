// images
import zone from '@/assets/img/blogs/zone.jpg'
import sitting from '@/assets/img/blogs/sitting.jpg'
import life from '@/assets/img/blogs/life.jpg'

// routes
import { pages } from '@/utils/routes'

// data
export const blogs = [
	{
		title: 'What is the "Zone Technique" in Chiropractic Care?',
		image: {
			url: zone.src
		},
		href: pages.blog
	},
	{
		title: 'Sitting Behind a Desk?',
		image: {
			url: sitting.src
		},
		href: pages.blog
	},
	{
		title: 'Chiropractic Changed my Life',
		image: {
			url: life.src
		},
		href: pages.blog
	}
]