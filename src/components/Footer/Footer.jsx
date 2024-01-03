import React from 'react'
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-[#00113A] text-white">
			<nav>
				<p className="footer-title">Página</p>
				<a className="link link-hover mb-3">Inicio</a>
				<a className="link link-hover mb-3">Quienes somos</a>
				<a className="link link-hover mb-3">Capacitaciones y cursos</a>
				<button className=' flex items-center py-2 px-4 rounded-md bg-[#2F80ED] shadow-lg shadow-[#2F80ED]/30'>
					<MdEmail className='text-xl mr-2'></MdEmail>
					Contáctanos
				</button>
			</nav>
			<div className="text-center">
				<p>Copyright © 2024 - Salud Integral Psi</p>
			</div>
		</footer>
	)
}

export default Footer