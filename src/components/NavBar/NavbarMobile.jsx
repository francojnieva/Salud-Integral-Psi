import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavbarMobile = (props) => {

	const {showMenu, setShowMenuMobile } = props

	const handleLinkClick = () => {
		setShowMenuMobile(false)
	  }


	return (
		<section className={`fixed h-screen top-0 w-64 z-50 bg-[#00113A] text-white py-10 px-5 ${ showMenu ? 'left-0' : '-left-full'} transition-all lg:hidden`}>
			<nav>
				<ul className=' space-y-8 font-medium'>
					<li><Link to='/' onClick={handleLinkClick}>Inicio</Link></li>
					<li><Link to='/about-us' onClick={handleLinkClick}>Nosotros</Link></li>
					<li><Link to='/training-courses' onClick={handleLinkClick}>Capacitación y Cursos</Link></li>
					<div className=' flex justify-start'>
						<Link to='/contact' onClick={handleLinkClick} className='contact-button'>
							<MdEmail className='text-xl mr-2'></MdEmail>
							Contáctanos
						</Link>
					</div>
				</ul>
			</nav>
		</section>
	)
}

export default NavbarMobile