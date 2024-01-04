import React from 'react'
import SandraGarcia from './assets/Lic. Sandra García Taboada.png'
import MarianaLocatelli from './assets/Dra. Mariana Locatelli.png'
import VivianaBagaloni from './assets/Dra. Viviana Bagaloni Mastrandrea.png'

const AboutUs = () => {
    return (
        <section className='p-3 bg-gradient-to-b from-[#f1f1f1] via-[#6DD5FA] to-[#f1f1f1] md:px-8'>
            <h2 className=' text-[#173e49] text-center text-2xl py-4 md:text-3xl'>Nuestros profesionales</h2>
            <div className='space-y-5 lg:flex justify-around items-center lg:space-y-0'>
                <div className="rounded-md p-4 space-y-4 flex flex-col items-center lg:w-72 lg:h-[36rem]">
                    <img src={SandraGarcia} alt="Lic. Sandra García Taboada" title='Lic. Sandra García Taboada' className='w-36 rounded-full  shadow-lg' />
                    <div className=' space-y-3'>
                        <h2 className="text-base">Lic. Sandra García Taboada</h2>
                        <p className='text-base font-medium'>Licenciada en Psicología, especialista en temas de Salud y Seguridad Social. Doctora en Salud Publica y Especialista en Gestión Organizacional. Jefa de Departamento de Atención Domiciliaria e Inserción Socio Cultural y Laboral de la Dirección General de Salud Mental, Ministerio de Salud del GCBA.</p>
                    </div>
                </div>
                <div className="rounded-md p-4 space-y-4 flex flex-col items-center lg:w-72 lg:h-[36rem]">
                   <img src={MarianaLocatelli} alt="Dra. Mariana Locatelli" title='Dra. Mariana Locatelli' className='w-36 rounded-full shadow-lg' />
                    <div className=' space-y-3'>
                        <h2 className="text-base">Dra. Mariana Locatelli</h2>
                        <p className='text-base font-medium'>Especialista en Psiquiatría y Medica Legista. Especialista en Medicina de Enlace. Coordinadora del Área de Dispositivos Residenciales de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Coordinadora del Programa de Entrenamiento de Operadores Terapéuticos de la DGSAM.</p>
                    </div>
                </div>
                <div className="rounded-md p-4 space-y-4 flex flex-col items-center lg:w-72 lg:h-[36rem]">
                    <img src={VivianaBagaloni} alt="Dra. Viviana Bagaloni Mastrandrea" title='Dra. Viviana Bagaloni Mastrandrea' className='w-36 rounded-full shadow-lg' />
                    <div className=' space-y-3'>
                        <h2 className="text-base">Dra. Viviana Bagaloni Mastrandrea</h2>
                        <p className='text-base font-medium'>Abogada con Orientación en Derecho Privado. Cuento con un Posgrado en Derecho de Salud y Responsabilidad Medica e Institucional y una Diplomatura en Contratos Administrativos, Obra Pública y Participación Público-Privada. Asesora Legal de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Miembro constituyente de la Red Argentina de Abogacía.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs