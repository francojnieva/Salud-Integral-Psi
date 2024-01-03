import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidInstitution } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";

const AboutInstitution = () => {

    return (
        <section className='py-4 px-3 text-center space-y-5 font-semibold text-[#4d5b69] md:flex justify-around items-center flex-wrap md:space-y-0 md:gap-6 md:px-5'>
            <div data-aos="fade-up" className="card w-full  text-white bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] shadow-xl md:w-72 ">
                <div className="card-body space-y-4">
                    <p className='text-sm md:text-base'>Somos un equipo Interdisciplinario con más de 20 años de experiencia en el Área de Salud y Salud Mental en el Sistema público y privado.</p>
                    <div className='flex justify-center items-center space-x-3'>
                        <RiTeamFill className=' text-2xl text-[#00113A]'></RiTeamFill>
                        <GiHealthNormal className=' text-2xl text-[#00113A]'></GiHealthNormal>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="card w-full  text-white bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] shadow-xl md:w-72">
                <div className="card-body px-4 space-y-4 md:px-5">
                    <p className='text-sm md:text-base'>Nos dedicamos a asesorar y capacitar en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial a Instituciones, Empresas, profesionales y técnicos.</p>
                    <div className='flex justify-center items-center space-x-3'>
                        <RiMentalHealthFill className=' text-2xl text-[#00113A]'></RiMentalHealthFill>
                        <BiSolidInstitution className=' text-2xl text-[#00113A]'></BiSolidInstitution>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="card w-full text-white bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] shadow-xl md:w-72">
                <div className="card-body space-y-4">
                    <p className='text-sm md:text-base'>Nuestra filosofía se centra en el Modelo de Rehabilitación Basada en la Comunidad.</p>
                    <div className='flex justify-center items-center space-x-3'>
                        <FaPeopleRobbery className=' text-2xl text-[#00113A]'></FaPeopleRobbery>
                        <FaPeopleLine className=' text-2xl text-[#00113A]'></FaPeopleLine>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutInstitution