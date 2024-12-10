// svg
import { Instagram, Facebook, Youtube } from '@/assets/svg/social'

// pages
export const pages = {
	home: '/',
	about: '/about-us',
	services: {
		index: '/services',
		chiropractic: '/services/chiropractic',
		disc_therapy: '/services/disc-therapy',
		knee_pain: '/services/knee-pain',
		neuropathy: '/services/neuropathy',
		plantar: '/services/plantar',
		metabolic_health: '/services/metabolic-health',
		body_contouring: '/services/body-contouring',
		weight_loss: '/services/weight-loss',
	},
	zone_technique: '/zone-technique',
	online_forms: '/online-forms',
	testimonials: '/testimonials',
	media: '/blog',
	blog: '/blog/internal',
	contact: '/contact-us',
	appointment: '/schedule-an-appointment',
	privacy_policy: '/privacy-policy',
	error: '/404'
}

// social
export const social = {
	instagram: 'https://www.instagram.com/perezwellnessdallas/',
	facebook: 'https://www.facebook.com/perezwellnessdallas/',
	youtube: 'https://www.youtube.com/@perezwellnessdallas'
}

// contact
export const contact = {
	phone: '(214) 823-2511',
	phone_02: '(214) 823-2581',
	email: 'contact@drericaperez.com',
	address: '8080 N. Central Expressway, Suite 160 Dallas, TX 75206',
	gmaps: 'https://maps.app.goo.gl/hm9z1bQJH1QeGsRd7'
}

// social links
export const socialLinks = [
	{
		icon: Instagram,
		name: 'Instagram',
		href: social.instagram
	}, {
		icon: Facebook,
		name: 'Facebook',
		href: social.facebook
	}, {
		icon: Youtube,
		name: 'Youtube',
		href: social.youtube
	}
]