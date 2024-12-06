// images
import chiropractic from '@/assets/img/services/chiropractic.jpg'
import disc_therapy from '@/assets/img/services/disc-therapy.jpg'
import knee_pain from '@/assets/img/services/knee-pain.jpg'
import neuropathy from '@/assets/img/services/neuropathy.jpg'
import plantar from '@/assets/img/services/plantar.jpg'
import metabolic_health from '@/assets/img/services/metabolic-health.jpg'
import body_contouring from '@/assets/img/services/body-contouring.jpg'
import weight_loss from '@/assets/img/services/weight-loss.jpg'

// routes
import { pages } from '@/utils/routes'

// data
export const services = [
	{
		title: 'Chiropractic',
		image: chiropractic.src,
		href: pages.services.chiropractic
	},
	{
		title: 'Disc Therapy',
		image: disc_therapy.src,
		href: pages.services.disc_therapy
	},
	{
		title: 'Knee Pain',
		image: knee_pain.src,
		href: pages.services.knee_pain
	},
	{
		title: 'Neuropathy',
		image: neuropathy.src,
		href: pages.services.neuropathy
	},
	{
		title: 'Plantar',
		image: plantar.src,
		href: pages.services.plantar
	},
	{
		title: 'Metabolic Health',
		image: metabolic_health.src,
		href: pages.services.metabolic_health
	},
	{
		title: 'Body Contouring',
		image: body_contouring.src,
		href: pages.services.body_contouring
	},
	{
		title: 'Weight Loss',
		image: weight_loss.src,
		href: pages.services.weight_loss
	}
]