// components
import InternalBanner from '@/components/InternalBanner'
import Forms from './forms'

// images
import banner from '@/assets/img/photo-08.jpg'

// css
import styles from './index.module.scss'

// metadata
export const metadata = {
	title: 'Schedule an Appointment | Perez Wellness'
}

export default function ScheduleAnAppointment() {
	return (
		<main className={styles.schedule}>

			<InternalBanner
				image={banner.src}
				title='Schedule an Appointment'
				desc='Please fill out our online forms before your appointment to save time in our office.'
			/>

			<Forms />

		</main>
	)
}
