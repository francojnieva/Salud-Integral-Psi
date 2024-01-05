import React from 'react'
import { useForm, Controller } from 'react-hook-form';

const ContactFrom = () => {

    const { handleSubmit, control, register, formState: { errors } } = useForm()

    const onSubmit = ({ name }) => {

    }

    return (
        <section className='pb-12 bg-[#f1f1f1] px-3'>
            <h3 className=' text-2xl text-center text-[#173e49] md:text-3xl'>Contacto</h3>
            <p className='text-md py-4 font-medium text-center md:pb-8'>Complete el siguiente formulario y nos pondremos en contacto lo antes posible. ¡Muchas gracias!</p>
            <div className='flex justify-center'>
                <div className='hidden lg:block w-64 md:h-[35rem] bg-gradient-to-bl from-[#9CECFB] to-[#0052D4] rounded-l-md shadow-2xl '></div>
                <form className='w-full p-4 md:w-[28rem] md:h-[35rem] rounded-lg md:shadow-2xl' onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="form-name" value="contact" />
                    <div className=' flex flex-col space-y-2'>
                        <label htmlFor="name" className=' font-bold text-sm'>Nombre:</label>
                        <input
                            className='p-2 rounded-md bg-[#c7c7c7] text-sm font-medium outline-none'
                            type="text"
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
                    <div className=' flex flex-col space-y-2'>
                        <label htmlFor="email" className=' font-bold text-sm'>Correo electrónico:</label>
                        <input
                            className='p-2 rounded-md bg-[#c7c7c7] text-sm font-medium outline-none'
                            type="text"
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
                    <div className=' flex flex-col space-y-2'>
                        <label htmlFor="subject" className=' font-bold text-sm'>Asunto:</label>
                        <input
                            className='p-2 rounded-md bg-[#c7c7c7] text-sm font-medium outline-none'
                            type="text"
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
                    <div className=' flex flex-col space-y-2'>
                        <label htmlFor="message" className=' font-bold text-sm'>Mensaje:</label>
                        <textarea
                            className='p-2 rounded-md bg-[#c7c7c7] text-sm font-medium outline-none resize-none'
                            autoComplete='off'
                            rows={5}
                            id="message"
                            {...register('message', {
                                required: 'Este campo es obligatorio',
                                maxLength: { value: 250, message: 'El mensaje no debe superar los 250 caracteres' },
                            })}
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.message && errors.message.message}</span>
                    </div>
                    <button type="submit" className='bg-[#00113A] text-white text-sm py-2 px-4 rounded-md'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactFrom