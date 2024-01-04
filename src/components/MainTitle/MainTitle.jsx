import React from 'react'

const MainTitle = () => {
	return (
		<section className='relative mt-12 flex flex-col justify-center items-center space-y-4 py-5 px-3 bg-[url("src/components/MainTitle/assets/equipo-trabajo-salud.jpg")] bg-cover bg-center h-80 md:h-96 md:px-1'>
			<div className="absolute inset-0 bg-[#313636] opacity-60"></div>
			<h1 className=' text-4xl text-center text-[#fff] z-10 md:text-5xl xl:text-6xl'>Salud Integral Psi</h1>
			<h2 className='text-lg text-center text-[#fff] z-10 lg:text-xl xl:text-2xl'>Asesoramiento y Capacitación en Rehabilitación Psicosocial y dispositivos de apoyo </h2>
		</section>
	)
}

export default MainTitle