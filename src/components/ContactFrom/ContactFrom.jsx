import React, { useState} from 'react'


const ContactFrom = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value,
        })
        setErrors({
          ...errors,
          [name]: '',
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validateForm(formData)
        if (Object.keys(validationErrors).length === 0) {
          alert('Formulario válido')
        } else {
          setErrors(validationErrors)
        }
      }
    
      const validateForm = (data) => {
        const errors = {}
    
        for (const key in data) {
          if (!data[key].trim()) {
            errors[key] = 'Este campo es obligatorio'
          }
        }
    
        if (data.name.length > 25) {
          errors.name = 'El nombre no debe superar los 25 caracteres'
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        if (!emailRegex.test(data.email)) {
        errors.email = 'Correo electrónico inválido'
    }
    
        if (data.subject.length > 30) {
          errors.subject = 'El asunto no debe superar los 30 caracteres'
        }

        if (data.message.length > 250) {
          errors.message = 'El mensaje no debe superar los 250 caracteres'
        }
    
        return errors
      }

    return (
        <section className='pb-12 bg-[#FFF] px-3'>
            <h3 className=' text-2xl text-center text-[#173e49] md:text-3xl'>Contacto</h3>
            <p className='text-md py-4 font-medium text-center md:pb-8'>Complete el siguiente formulario y nos pondremos en contacto lo antes posible. ¡Muchas gracias!</p>
            <div className='flex justify-center'>
                <div className='hidden lg:block w-64 md:h-[35rem] bg-gradient-to-bl from-[#9CECFB] to-[#0052D4] rounded-l-md shadow-2xl '></div>
                <form name="contact" method="post" className='w-full p-4 md:w-[28rem] md:h-[35rem] rounded-lg md:shadow-2xl' onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className=' flex flex-col space-y-2 mb-3'>
                        <label htmlFor="name" className=' font-bold text-sm'>Nombre:</label>
                        <input
                            className='p-2 rounded-md bg-[#e2e2e2] text-sm font-medium outline-none'
                            type="text"
                            placeholder='Ingrese su nombre'
                            name='name'
                            
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete='off'
                            id="name"
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.name}</span>

                    </div>
                    <div className=' flex flex-col space-y-2 mb-3'>
                        <label htmlFor="email" className=' font-bold text-sm'>Correo electrónico:</label>
                        <input
                            className='p-2 rounded-md bg-[#e2e2e2] text-sm font-medium outline-none'
                            type="text"
                            placeholder='Ingrese su correo'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            
                            autoComplete='off'
                            id="email"
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.email}</span>

                    </div>
                    <div className=' flex flex-col space-y-2 mb-3'>
                        <label htmlFor="subject" className=' font-bold text-sm'>Asunto:</label>
                        <input
                            className='p-2 rounded-md bg-[#e2e2e2] text-sm font-medium outline-none'
                            type="text"
                            placeholder='Ingrese un Asunto'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            
                            autoComplete='off'
                            id="subject"
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.subject}</span>

                    </div>
                    <div className=' flex flex-col space-y-2 mb-3'>
                        <label htmlFor="message" className=' font-bold text-sm'>Mensaje:</label>
                        <textarea
                            className='p-2 rounded-md bg-[#e2e2e2] text-sm font-medium outline-none resize-none'
                            autoComplete='off'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Ingrese su mensaje'
                            
                            rows={5}
                            id="message"
                        />
                        <span className='text-sm text-red-600 pb-3'>{errors.message}</span>

                    </div>
                    <button type="submit" className='bg-[#1163D8] text-[#FFF] text-sm py-2 px-4 rounded-md'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactFrom