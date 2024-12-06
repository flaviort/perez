// libraries
import type { Metadata } from 'next'

// components
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

// css
import '@/assets/css/normalize.min.css'
import '@/assets/css/bootstrap-grid.min.css'
import '@/assets/scss/main.scss'

// fonts
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
	weight: ['400', '600'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-open-sans'
})

// metadata
export const metadata: Metadata = {
	title: 'Chiropractor in Dallas | Perez Wellness',
	description: 'Our goal at Perez Chiropractic and Wellness is to educate and serve as many patients as we can with chiropractic care, proper nutrition, and the use of acupuncture.',
	icons: {
		icon: '/favicon.svg'
	},
	openGraph: {
		title: 'Chiropractor in Dallas | Perez Wellness',
		description: 'Our goal at Perez Chiropractic and Wellness is to educate and serve as many patients as we can with chiropractic care, proper nutrition, and the use of acupuncture.',
		url: 'https://perez-wellness.vercel.app/',
		siteName: 'Perez Wellness',
		images: [
			{
				url: 'https://perez-wellness.vercel.app/img/og-image.png',
				width: 1280,
				height: 628,
				alt: 'Perez Wellness'
			}
		],
		locale: 'en_US',
		type: 'website'
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en-US' className={openSans.className}>

			<head>
				<link
					rel='preconnect'
					href='/fonts/MeganDemoFont-Regular.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
			</head>

			<body>

				<a href='#main-content' className='skip-content button button--green'>
					Skip content
				</a>

				<Menu />

				<div id='main-content'>
					{children}
				</div>

				<Footer />
				
			</body>
		</html>
	)
}