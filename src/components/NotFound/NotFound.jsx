import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";

const NotFound = () => {
	return (
		<section className='bg-white text-[#173e49] h-screen flex flex-col justify-center items-center space-y-3'>
			<MdReportProblem className='text-5xl text-yellow-400 md:text-7xl' />
			<h1 className=' text-2xl md:text-4xl'>Página no encontrada</h1>
			<p>Lo sentimos, la página que estás buscando no existe.</p>
			<p>Por favor, verifica la URL o regresa a la página de <Link to='/' className=' text-blue-500 font-bold'>Inicio</Link></p>
		</section>
	)
}

export default NotFound