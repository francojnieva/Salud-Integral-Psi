import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavbarMobile = (props) => {

	const { showMenu, setShowMenuMobile } = props

	const handleLinkClick = () => {
		setShowMenuMobile(false)
	}


	return (
		<section className={`fixed h-screen top-0 w-64 z-50 bg-[#00113A] text-white py-10 px-5 ${showMenu ? 'left-0' : '-left-full'} transition-all lg:hidden`}>
			<nav>
				<ul className=' space-y-8 font-medium'>
					<li><a href='#home' onClick={handleLinkClick}>Inicio</a></li>
					<li><a href='#about-us' onClick={handleLinkClick}>Nosotros</a></li>
					<li><a href='#training-courses' onClick={handleLinkClick}>Capacitación y Cursos</a></li>
					<div className=' flex justify-start'>
						<a href='#contact' onClick={handleLinkClick} className='contact-button'>
							<MdEmail className='text-xl mr-2'></MdEmail>
							Contáctanos
						</a>
					</div>
					
				</ul>
			</nav>
		</section>
	)
}

export default NavbarMobile