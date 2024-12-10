'use client'

// libraries
import clsx from 'clsx'
import { useState } from 'react'
import Script from 'next/script'

// css
import styles from './index.module.scss'

// fix for the healcode widget
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'healcode-widget': any;
		}
	}
}

export default function Forms() {

	const [form, setForm] = useState<'none' | 'new' | 'existing'>('none')

	return (
		<section className={clsx(styles.form, 'py-medium')}>
			<div className='container'>

				<h1 className='h2 green'>
					Please select one of the following:
				</h1>

				<div className={clsx(styles.buttons, 'my-smaller')}>

					<button
						className={clsx(
							'button button--hollow font-title text-24',
							{ [styles.active]: form === 'new' }
						)}
						onClick={() => setForm('new')}
					>
						New Patient
					</button>

					<button
						className={clsx(
							'button button--hollow font-title text-24',
							{ [styles.active]: form === 'existing' }
						)}
						onClick={() => setForm('existing')}
					>
						Existing Patient
					</button>

				</div>

				<div className={styles.wrapper}>

					<div className={clsx(styles.inner, { [styles.active]: form === 'new' })}>
						<div className='mindbody-widget' data-widget-type='Appointments' data-widget-id='fa145515126'></div>
						<Script async src='https://brandedweb.mindbodyonline.com/embed/widget.js'></Script>
					</div>

					<div className={clsx(styles.inner, styles.existing, { [styles.active]: form === 'existing' })}>
						<Script src='https://widgets.mindbodyonline.com/javascripts/healcode.js' type='text/javascript'></Script>
						<healcode-widget data-version='0.2' data-link-class='loginRegister' data-site-id='122413' data-mb-site-id='5740354'  data-bw-identity-site='true' data-type='account-link' data-inner-html='Existing Patient Log In' />
					</div>

				</div>
				
			</div>
		</section>
	)
}
