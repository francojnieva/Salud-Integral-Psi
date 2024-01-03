import React from 'react'
import Navbar from '../NavBar/Navbar'
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header className=' py-4 px-3 bg-[#00113A] text-white'>
        <div className=' flex justify-between items-center z-10 md:px-5 lg:hidden'>
            <p>Salud Integral Psi</p>
            <button>
                <FiMenu className=' text-2xl'></FiMenu>
            </button>
        </div>
        <Navbar />
    </header>
  )
}

export default Header