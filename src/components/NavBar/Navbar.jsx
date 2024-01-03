import React from 'react'

const Navbar = () => {
	return (
		<nav className='hidden lg:flex justify-between items-center'>
			<ul className=' flex items-center space-x-4'>
				<li><a href="#">INICIO</a></li>
				<li><a href="#">QUIENES SOMOS</a></li>
				<li><a href="#">CAPACITACIÓN Y CURSOS</a></li>
			</ul>
			<ul>
				<li><a href="#">CONTACTO</a></li>
			</ul>
		</nav>
	)
}

export default Navbar