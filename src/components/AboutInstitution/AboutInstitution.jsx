import React from 'react'
import InstitucionImg2 from './assets/institucion-img2.jpg'
import { MdEmail } from "react-icons/md";


const AboutInstitution = () => {

    return (
        <section className='py-5 px-3 space-y-10 text-center text-[#173e49] bg-[#FFF] md:px-7 md:py-10 md:space-y-10 lg:px-16 xl:px-32'>
            <article className='space-y-3'>
                <h3 className='text-xl md:text-center lg:text-3xl lg:py-8'>Somos un equipo Interdisciplinario con más de 20 años de experiencia en el Área de Salud y Salud Mental en el Sistema público y privado.</h3>
            </article>
            <article className='relative space-y-3 md:flex flex-row-reverse justify-between items-center md:space-y-0 md:py-8'>
                <h3 className='text-xl md:w-72 md:text-start lg:text-3xl lg:w-[22rem] xl:w-[32rem]'>Nos dedicamos a asesorar y capacitar en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial a Instituciones, Empresas, profesionales y técnicos.</h3>
                <div className='hidden absolute w-64 h-48 top-24 left-14 md:block md:bg-[#81ddff] blur-3xl xl:w-72 xl:h-72 xl:left-6'></div>
                <img className='relative rounded-md shadow-lg md:w-72 lg:w-96 xl:w-[28rem]' src={InstitucionImg2} alt="Salud" />
            </article>
            <article className='space-y-3 md:pt-10 md:flex justify-center items-center md:space-y-0'>
                <h3 className='text-2xl font-semibold italic md:pt-8 lg:text-4xl lg:px-10 lg:pt-12 xl:text-5xl'>Nuestra filosofía se centra en el Modelo de Rehabilitación Basada en la Comunidad</h3>
            </article>
            <article className='flex justify-center lg:py-7'>
            <a href='#contact' className='contact-button lg:p-3'>
				<MdEmail className='text-xl mr-2'></MdEmail>
				Contáctanos
			</a>
            </article>

        </section>
    )
}

export default AboutInstitution