import React from 'react'
import { MdEmail } from "react-icons/md";

const NavbarMobile = (props) => {

	const { showMenu } = props

	return (
		<section className={`fixed left-0 h-screen top-0 w-64 z-50 bg-[#00113A] text-white py-10 px-5 ${ showMenu ? 'left-0' : '-left-full'} transition-all`}>
			<nav>
				<ul className=' space-y-8 font-medium'>
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Nosotros</a></li>
					<li><a href="#">Capacitación y Cursos</a></li>
					<button className=' flex items-center p-2 text-white rounded-md bg-[#2F80ED] shadow-lg shadow-[#2F80ED]/30'>
						<MdEmail className='text-xl mr-2'></MdEmail>
						Contáctanos
					</button>
				</ul>
			</nav>
		</section>
	)
}

export default NavbarMobile