import React from 'react'
import SandraGarcia from './assets/Lic. Sandra García Taboada.png'
import MarianaLocatelli from './assets/Dra. Mariana Locatelli.png'
import VivianaBagaloni from './assets/Dra. Viviana Bagaloni Mastrandrea.png'

const AboutUs = () => {
    return (
        <section id='about-us' className='px-3 pt-12 pb-10 bg-[#56B7E1] md:px-8 lg:pt-16'>
        <h3 className=' text-[#173e49] text-center text-3xl font-bold py-4 md:text-3xl lg:text-4xl'>Nuestros profesionales</h3>
        <div className='space-y-5 lg:flex justify-around items-center lg:space-y-0'>
            <div className="about-us-cards">
                <img src={SandraGarcia} alt="Lic. Sandra García Taboada" title='Lic. Sandra García Taboada' className='w-36 rounded-full  shadow-lg' />
                <div className=' space-y-3'>
                    <h4 className="text-lg font-bold text-[#13333b]">Lic. Sandra García Taboada</h4>
                    <p className='text-base  font-medium text-[#13333b]'>Licenciada en Psicología, especialista en temas de Salud y Seguridad Social. Doctora en Salud Pública y Especialista en Gestión Organizacional. Jefa de Departamento de Atención Domiciliaria e Inserción Socio Cultural y Laboral de la Dirección General de Salud Mental, Ministerio de Salud del GCBA.</p>
                </div>
            </div>
            <div className="about-us-cards">
               <img src={MarianaLocatelli} alt="Dra. Mariana Locatelli" title='Dra. Mariana Locatelli' className='w-36 rounded-full shadow-lg' />
                <div className=' space-y-3'>
                    <h4 className="text-lg font-bold text-[#13333b]">Dra. Mariana Locatelli</h4>
                    <p className='text-base  font-medium text-[#13333b]'>Especialista en Psiquiatría y Medica Legista. Especialista en Medicina de Enlace. Coordinadora del Área de Dispositivos Residenciales de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Coordinadora del Programa de Entrenamiento de Operadores Terapéuticos de la DGSAM.</p>
                </div>
            </div>
            <div className="about-us-cards">
                <img src={VivianaBagaloni} alt="Dra. Viviana Bagaloni Mastrandrea" title='Dra. Viviana Bagaloni Mastrandrea' className='w-36 rounded-full shadow-lg' />
                <div className=' space-y-3'>
                    <h4 className="text-lg font-bold text-[#13333b]">Dra. Viviana Bagaloni Mastrandrea</h4>
                    <p className='text-base font-medium  text-[#13333b]'>Abogada con Orientación en Derecho Privado. Cuento con un Posgrado en Derecho de Salud y Responsabilidad Medica e Institucional y una Diplomatura en Contratos Administrativos, Obra Pública y Participación Público-Privada. Asesora Legal de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Miembro constituyente de la Red Argentina de Abogacía.</p>
                </div>
            </div>
        </div>

    </section>
    )
}

export default AboutUs