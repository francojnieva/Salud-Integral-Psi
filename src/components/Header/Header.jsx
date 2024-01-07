import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'
import NavbarMobile from '../NavBar/NavbarMobile'
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
	const [showMenuMobile, setShowMenuMobile] = useState(false)

	const toggleMenu = () => {
		setShowMenuMobile(!showMenuMobile)
	}

	return (
		<header className='w-full z-40 py-4 px-3 bg-[#00113A] text-white '>
			<div className=' flex justify-between items-center z-10 md:px-5 lg:hidden'>
				<p>Salud Integral Psi</p>
				<button onClick={toggleMenu}>
					{showMenuMobile ? <MdOutlineClose className=' text-2xl' /> : <FiMenu className='text-2xl'></FiMenu> }
				</button>
			</div>
			<Navbar />
			<NavbarMobile showMenu={showMenuMobile} setShowMenuMobile={setShowMenuMobile}/>
		</header>
	)
}

export default Header