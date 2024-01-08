import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<section className="footer py-8 px-3 bg-[#00113A] text-white md:px-7 lg:px-12 xl:px-20">
				<div>
					<header className="footer-title">Página</header>
					<div className=' flex flex-col space-y-5'>
						<a href='#home' className="link link-hover">Inicio</a>
						<a href='#about-us' className="link link-hover">Nosotros</a>
						<a href='#training-courses' className="link link-hover">Capacitación y cursos</a>
						<a href='#contact' className='contact-button'>
							<MdEmail className='text-xl mr-2'></MdEmail>
							Contáctanos
						</a>
					</div>
				</div>
			</section>
			<section className="footer px-3 py-2 bg-[#00113A] text-white md:px-7 lg:px-12 xl:px-20">
				<p>Copyright © 2024 - Salud Integral Psi </p>
			</section>
		</footer>
	)
}

export default Footer