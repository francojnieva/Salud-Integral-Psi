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
						<Link to='/' className="link link-hover">Inicio</Link>
						<Link to='/about-us' className="link link-hover">Nosotros</Link>
						<Link to='/training-courses' className="link link-hover">Capacitación y cursos</Link>
						<Link to='/contact' className='contact-button'>
							<MdEmail className='text-xl mr-2'></MdEmail>
							Contáctanos
						</Link>
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