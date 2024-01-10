import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';


const ContactFrom = () => {

    const { handleSubmit, control, register, formState: { errors } } = useForm()

    const [showThankYouMessage, setShowThankYouMessage] = useState(false)
    const [submittedName, setSubmittedName] = useState('')

    const onSubmit = (data) => {
        setShowThankYouMessage(true)
        setSubmittedName(data.name)

        setTimeout(() => {
            setShowThankYouMessage(false)
        }, 3000)
    }

    return (
        <section id='contact' className='pb-12 pt-16 bg-[#FFF] px-3 lg:pt-20'>
            <h3 className=' text-3xl font-bold text-center text-[#173e49] lg:text-4xl'>Contacto</h3>
            <p className='text-md py-2 font-medium text-center text-[#173e49] md:pb-8'>Complete el siguiente formulario y nos pondremos en contacto lo antes posible. ¡Muchas gracias!</p>
            <div className='flex justify-center'>
                <div className='hidden lg:block w-64 md:h-[42rem] bg-gradient-to-bl from-[#9CECFB] via-[#45c6dd] to-[#9CECFB] rounded-l-md shadow-2xl '></div>
                <form name="contact" method="post" className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="name" className='text-[#173e49] font-bold text-sm'>Nombre:</label>
                        <input
                            type="text"
                            placeholder='Ingrese su nombre'
                            name='name'

                            autoComplete='off'
                            id="name"
                            {...register('name', {
                                required: 'Este campo es obligatorio',
                                maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                                minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                            })}
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="email" className='text-[#173e49] font-bold text-sm'>Correo electrónico:</label>
                        <input
                            type="email"
                            placeholder='Ingrese su correo electrónico'
                            name='email'

                            autoComplete='off'
                            id="email"
                            {...register('email', {
                                required: 'Este campo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Correo electrónico inválido',
                                },
                            })}
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.email && errors.email.message}</span>
                    </div>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="subject" className='text-[#173e49] font-bold text-sm'>Asunto:</label>
                        <input
                            type="text"
                            placeholder='Ingrese un asunto'
                            name='subject'

                            autoComplete='off'
                            id="subject"
                            {...register('subject', {
                                required: 'Este campo es obligatorio',
                                maxLength: { value: 40, message: 'El asunto no debe superar los 40 caracteres' },
                                minLength: { value: 3, message: 'El nombre debe tener entre 3 y 40 caracteres' },
                            })}
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.subject && errors.subject.message}</span>
                    </div>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="message" className='text-[#173e49] font-bold text-sm'>Mensaje:</label>
                        <textarea
                            className='p-2 rounded-md bg-[#fff] text-[#173e49] placeholder-[#737779] text-sm font-medium outline-none resize-none lg:bg-[#e2e2e2]'
                            autoComplete='off'
                            name='message'

                            placeholder='Ingrese su mensaje'
                            rows={5}
                            id="message"
                            {...register('message', {
                                required: 'Este campo es obligatorio',
                                maxLength: { value: 250, message: 'El mensaje no debe superar los 250 caracteres' },
                            })}
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.message && errors.message.message}</span>
                    </div>
                    {showThankYouMessage && (
                        <div className="bg-[#9CECFB] text-[#00113A] font-bold text-sm p-2 rounded-md text-center mb-4">
                            <p>¡Gracias { submittedName } por contactarnos!</p>
                        </div>
                    )}
                    <button type="submit" className='bg-[#00113A] text-[#FFF] text-sm font-bold py-2 px-4 rounded-md'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactFrom