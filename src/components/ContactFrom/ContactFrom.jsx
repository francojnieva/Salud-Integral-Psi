import React from 'react'


const ContactFrom = () => {

    return (
        <section id='contact' className='pb-12 pt-16 bg-[#FFF] px-3 lg:pt-20'>
            <h3 className=' text-2xl text-center text-[#173e49] md:text-3xl lg:text-4xl'>Contacto</h3>
            <p className='text-md py-2 font-medium text-center text-[#173e49] md:pb-8'>Complete el siguiente formulario y nos pondremos en contacto lo antes posible. ¡Muchas gracias!</p>
            <div className='flex justify-center'>
                <div className='hidden lg:block w-64 md:h-[32rem] bg-gradient-to-bl from-[#9CECFB] via-[#45c6dd] to-[#9CECFB] rounded-l-md shadow-2xl '></div>
                <form name="contact" method="post" className='contact-form'>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="name" className='text-[#173e49] font-bold text-sm'>Nombre:</label>
                        <input
                            type="text"
                            placeholder='Ingrese su nombre'
                            name='name'
                            required
                            autoComplete='off'
                            id="name"
                        />
                    </div>
                    <span id='errorName'></span>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="email" className='text-[#173e49] font-bold text-sm'>Correo electrónico:</label>
                        <input
                            type="email"
                            placeholder='Ingrese su correo electrónico'
                            name='email'
                            required
                            autoComplete='off'
                            id="email"
                        />
                    </div>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="subject" className='text-[#173e49] font-bold text-sm'>Asunto:</label>
                        <input
                            type="text"
                            placeholder='Ingrese un asunto'
                            name='subject'
                            required
                            autoComplete='off'
                            id="subject"
                        />
                    </div>
                    <div className=' flex flex-col space-y-2 mb-6'>
                        <label htmlFor="message" className='text-[#173e49] font-bold text-sm'>Mensaje:</label>
                        <textarea
                            className='p-2 rounded-md bg-[#fff] placeholder-[#737779] text-sm font-medium outline-none resize-none lg:bg-[#e2e2e2]'
                            autoComplete='off'
                            name='message'
                            required
                            placeholder='Ingrese su mensaje'
                            rows={5}
                            id="message"
                        />
                    </div>
                    <button type="submit" className='bg-[#00113A] text-[#FFF] text-sm py-2 px-4 rounded-md'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactFrom