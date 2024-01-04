import React from 'react'
import { MdEmail } from "react-icons/md";

const Navbar = () => {
	return (
		<nav className='hidden px-10 lg:flex justify-between items-center xl:px-16'>
			<p>Salud Integral Psi</p>
			<ul className=' flex items-center space-x-10'>
				<li><a href="#" className=' font-medium hover:text-[#2F80ED] transition-all'>Inicio</a></li>
				<li><a href="#" className=' font-medium hover:text-[#2F80ED] transition-all'>Nosotros</a></li>
				<li><a href="#" className=' font-medium hover:text-[#2F80ED] transition-all'>Capacitación y Cursos</a></li>
			</ul>
			<button className=' flex items-center p-2 text-white rounded-md bg-[#2F80ED] shadow-lg shadow-[#2F80ED]/30'>
				<MdEmail className='text-xl mr-2'></MdEmail>
				Contáctanos
			</button>
		</nav>
	)
}

export default Navbar