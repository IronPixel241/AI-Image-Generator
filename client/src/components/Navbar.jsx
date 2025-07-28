import React from 'react'
// import logo from '../assets/logo.svg'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {


  const [user, setUser] = useState(null);

  return (
    <div className='flex justify-between items-center py-4'>
      <Link to="/">
        <div>
            <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
        </div>
      </Link>

      <div>

        {user ? 
        <div>
          
        </div> 
        : 
        <div className='flex items-center gap-4'>
          <p className='cursor-pointer'>Pricing</p>
          <button className='bg-black text-white px-15 py-2 sm:py-3 text-sm rounded-full'>Login</button>
        </div>
        }

      </div>
    </div>
  )
}

export default Navbar