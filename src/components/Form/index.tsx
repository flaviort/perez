'use client'

// libraries
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import Link from 'next/link'

// components
import Fancybox from '@/components/utils/fancybox'

// utils
import { email } from '@/utils/functions'
import { contact } from '@/utils/routes'

// css
import styles from './form.module.scss'

export interface FormProps {
    className?: string
    children: React.ReactNode
    name: string
}

export const Form = ({
    className,
    children,
    name
}: FormProps) => {
    
    // refs
    const form = useRef<HTMLFormElement>(null)
    const popupSuccess = useRef<HTMLAnchorElement>(null)
    const popupError = useRef<HTMLAnchorElement>(null)

    // useState to make the Modals invisible
    const [ renderSuccessModal, setRenderSuccessModal ] = useState(false)
    const [ renderErrorModal, setRenderErrorModal ] = useState(false)

    // close success modal
    const closeSuccessModal = () => {
        setRenderSuccessModal(false)
    }

    // close error modal
    const closeErrorModal = () => {
        setRenderErrorModal(false)
    }

    // form validations
    const methods = useForm({
        criteriaMode: 'all',
        mode: 'all'
    })
    
    // submit function
    const onSubmit = (data: any) => {

        if (form.current) {
            (form.current as HTMLElement).classList.add('sending')
        }

        fetch('../../api/sendgrid', {
            method: 'post',
            body: JSON.stringify(data)
        })

        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Failed to send message.')
            }
        })

        // if success
        .then(() => {
            setRenderSuccessModal(true)

            setTimeout(() => {
                if (popupSuccess.current) {
                    popupSuccess.current.click()
                }
                
                if (form.current) {
                    form.current.classList.remove('sending')
                    form.current.reset()
                }
            }, 500)
        })

        // if error
        .catch(error => {
            console.error('Error:', error)
            setRenderErrorModal(true)

            setTimeout(() => {
                if (popupError.current) {
                    popupError.current.click()
                }

                if (form.current) {
                    form.current.classList.remove('sending')
                }
            }, 500)
        })
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className={clsx(styles.form, className)}
                ref={form}
            >

                <InputHidden
                    label='Form name'
                    value={name}
                />

                {children}

            </form>

            {renderSuccessModal && 
                <Fancybox>
                    
                    <a
                        ref={popupSuccess}
                        href='#popup-success'
                        data-fancybox
                        style={{
                            position: 'absolute',
                            visibility: 'hidden'
                        }}
                    ></a>

                    <div id='popup-success' className={styles.popup}>
                        <div className={styles.wrap}>
                    
                            <h2 className='h2'>
                                <b>
                                    Success
                                </b>
                            </h2>
                    
                            <p>
                                Your message has been received and we will get back to you as soon as possible.
                            </p>
                    
                            <button
                                className='button button--green button--green-dark-hover font-title text-24'
                                data-fancybox-close
                                onClick={closeSuccessModal}
                            >
                                Close
                            </button>
                    
                        </div>
                    </div>
                </Fancybox>
            }

            { renderErrorModal &&
                <Fancybox>

                    <a
                        ref={popupError}
                        href='#popup-error'
                        data-fancybox
                        style={{
                            position: 'absolute',
                            visibility: 'hidden'
                        }}
                    ></a>

                    <div id='popup-error' className={styles.popup}>
                        <div className={styles.wrap}>
                    
                            <h2 className='h2 red'>
                                <b>
                                    Error
                                </b>
                            </h2>
                    
                            <p>
                                An error occurred while submitting your message, please try again in a few minutes. If the problem persists, contact us directly via email: <Link href={email(contact.email)}><u>{contact.email}</u></Link>.
                            </p>
                    
                            <button
                                className='button button--green button--green-dark-hover font-title text-24'
                                data-fancybox-close
                                onClick={closeErrorModal}
                            >
                                Close
                            </button>
                    
                        </div>
                    </div>
                </Fancybox>
            }
            
        </FormProvider>
    )
}

export interface InputProps {
    id: string
    label: string
    type: string
    placeholder: string
    className?: string
    required?: boolean
    maxLength?: number
    minLength?: number
}

export const Input = ({
    id,
    label,
    type,
    placeholder,
    className,
    required,
    maxLength,
    minLength
}: InputProps) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext() ?? {}

    let validations = {
        required: required && 'This field is required',
        maxLength: maxLength && {
            value: maxLength,
            message: `Maximum characters exceeded`,
        },
        minLength: minLength && {
            value: minLength,
            message: `The message is too short`,
        },
    }

    // add pattern validation for email type
    if (type === 'email') {
        validations = {
            ...validations,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email'
            }
        } as {
            required: string | false | undefined
            maxLength: 0 | {
                value: number
                message: string
            } | undefined
            minLength: 0 | {
                value: number
                message: string
            } | undefined
            pattern: {
                value: RegExp
                message: string
            }
        }
    }

    return (
        <div className={clsx(
            styles.formLine,
            className,
            errors[label] && styles.error
        )}>

            <label className={clsx(styles.label, 'text-16')} htmlFor={id}>
                {label}
            </label>

            <div className={styles.lineWrapper}>

                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={styles.input}
                    {...register(label, validations)}
                />

            </div>

            {errors[label] && (
                <p className={styles.errorMsg}>
                    {String(errors[label].message)}
                </p>
            )}

        </div>
    )
}

export interface TextareaProps {
    id: string
    label: string
    placeholder?: string
    className?: string
    required?: boolean
    maxLength?: number
    minLength?: number
}

export const Textarea = ({
    id,
    label,
    placeholder,
    required,
    minLength,
    maxLength,
    className,
}: TextareaProps) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext() ?? {}

    let validations = {
        required: required && 'This field is required',
        maxLength: maxLength && {
            value: maxLength,
            message: `Maximum characters exceeded`,
        },
        minLength: minLength && {
            value: minLength,
            message: `The message is too short`,
        },
    }

    return (
        <div className={clsx(
            styles.formLine,
            className,
            errors[label] && styles.error
        )}>

            <label className={clsx(styles.label, 'text-16')} htmlFor={id}>
                {label}
            </label>

            <div className={styles.lineWrapper}>
                <textarea
                    id={id}
                    placeholder={placeholder}
                    className={clsx(styles.input, styles.textarea)}
                    {...register(label, validations)}
                />
            </div>

            {errors[label] && (
                <p className={styles.errorMsg}>
                    {String(errors[label].message)}
                </p>
            )}

        </div>
    )
}

export interface InputHiddenProps {
    label: string
    value: string
}

export const InputHidden = ({
    label,
    value
}: InputHiddenProps) => {

    const {
        register
    } = useFormContext() ?? {}

    return (
        <input
            type='hidden'
            value={value}
            {...register(label)}
        />
    )
}