import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
        <img src={logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
    </div>
  )
}

export default Navbar