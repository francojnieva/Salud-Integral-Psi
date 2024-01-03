import React from 'react'
import SandraGarcia from './assets/Lic. Sandra García Taboada.png'
import MarianaLocatelli from './assets/Dra. Mariana Locatelli.png'
import VivianaBagaloni from './assets/Dra. Viviana Bagaloni Mastrandrea.png'

const AboutUs = () => {
    return (
        <section className='py-5 px-3 bg-[#b8fffd] md:px-8'>
            <h2 className=' text-[#2c2e33] text-center text-2xl py-4'>Nuestros profesionales</h2>
            <div className=' space-y-5'>
                <div className="card bg-base-100 shadow-xl py-3">
                    <figure><img src={SandraGarcia} alt="Lic. Sandra García Taboada" className='w-36 rounded-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base">Lic. Sandra García Taboada</h2>
                        <p className='text-base'>Licenciada en Psicología, especialista en temas de Salud y Seguridad Social. Doctora en Salud Publica y Especialista en Gestión Organizacional. Jefa de Departamento de Atención Domiciliaria e Inserción Socio Cultural y Laboral de la Dirección General de Salud Mental, Ministerio de Salud del GCBA.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl py-3">
                    <figure><img src={MarianaLocatelli} alt="Dra. Mariana Locatelli" className='w-36 rounded-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base">Dra. Mariana Locatelli</h2>
                        <p className='text-base'>Especialista en Psiquiatría y Medica Legista. Especialista en Medicina de Enlace. Coordinadora del Área de Dispositivos Residenciales de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Coordinadora del Programa de Entrenamiento de Operadores Terapéuticos de la DGSAM.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl py-3">
                    <figure><img src={VivianaBagaloni} alt="Dra. Viviana Bagaloni Mastrandrea" className='w-36 rounded-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-base">Dra. Viviana Bagaloni Mastrandrea</h2>
                        <p className='text-base'>Abogada con Orientación en Derecho Privado. Cuento con un Posgrado en Derecho de Salud y Responsabilidad Medica e Institucional y una Diplomatura en Contratos Administrativos, Obra Pública y Participación Público-Privada. Asesora Legal de la Dirección General de Salud Mental, Ministerio de Salud del GCBA. Miembro constituyente de la Red Argentina de Abogacía.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs