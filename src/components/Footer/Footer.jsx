import React from 'react'
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer>
			<section className="footer p-10 bg-[#00113A] text-white">
				<div>
					<header className="footer-title">Página</header>
					<div className=' flex flex-col space-y-5'>
						<a className="link link-hover">Inicio</a>
						<a className="link link-hover">Quienes Somos</a>
						<a className="link link-hover">Capacitación y cursos</a>
						<button className=' flex items-center py-2 text-white px-4 rounded-md bg-[#2F80ED] shadow-lg shadow-[#2F80ED]/30'>
							<MdEmail className='text-xl mr-2'></MdEmail>
							Contáctanos
						</button>
					</div>
				</div>
			</section>
			<section className="footer px-10 py-2 bg-[#00113A] text-white">
				<p>Copyright © 2024 - Salud Integral Psi </p>
			</section>
		</footer>
	)
}

export default Footer