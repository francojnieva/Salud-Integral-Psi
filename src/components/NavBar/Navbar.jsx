import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='hidden px-10 lg:flex justify-between items-center xl:px-16'>
			<p>Salud Integral Psi</p>
			<ul className=' flex items-center space-x-10'>
				<li><Link to='/' className=' font-medium hover:text-[#2F80ED] transition-all'>Inicio</Link></li>
				<li><Link to='/about-us' className=' font-medium hover:text-[#2F80ED] transition-all'>Nosotros</Link></li>
				<li><Link to='/training-courses' className=' font-medium hover:text-[#2F80ED] transition-all'>Capacitación y Cursos</Link></li>
			</ul>
			<Link to='/contact' className='contact-button'>
				<MdEmail className='text-xl mr-2'></MdEmail>
				Contáctanos
			</Link>
		</nav>
	)
}

export default Navbar