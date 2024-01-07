import React from 'react'
import equipoTrabajo from './assets/equipo-trabajo-salud.jpg'

const MainTitle = () => {

	const backgroundImage = `url(${equipoTrabajo})`

	return (
		<section className='relative flex flex-col justify-center items-center space-y-4 py-5 px-3 h-80 md:h-96 md:px-1 bg-cover bg-center' style={{ backgroundImage } } >
			<div className="absolute inset-0 bg-[#313636] opacity-60"></div>
			<h1 className=' text-4xl text-center text-[#fff] z-10 md:text-5xl xl:text-6xl'>Salud Integral Psi</h1>
			<h2 className='text-lg text-center text-[#fff] z-10 lg:text-xl xl:text-2xl'>Asesoramiento y Capacitación en Rehabilitación Psicosocial y dispositivos de apoyo </h2>
		</section>
	)
}

export default MainTitle