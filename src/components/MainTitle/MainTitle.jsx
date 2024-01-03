import React from 'react'

const MainTitle = () => {
  return (
    <section className='relative flex flex-col justify-center items-center py-5 px-3 bg-[url("src/components/MainTitle/assets/equipo-trabajo-salud.jpg")] bg-cover bg-center w-full h-80 md:px-5 md:h-96'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] opacity-40"></div>
        <h1 className=' text-3xl text-center text-[#00113A] z-10 md:text-5xl'>Salud Integral Psi</h1>
        <h2 className='text-lg text-center text-[#00113A] z-10 md:text-xl'>Asesoramiento y Capacitación en Rehabilitación Psicosocial y dispositivos de apoyo </h2>
    </section>
  )
}

export default MainTitle