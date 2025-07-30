import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {user} = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-4'>
      <Link to="/">
        <div>
            <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
        </div>
      </Link>

      <div>

        {user ? 
        <div className='flex items-center gap-6'>

          <button onClick={() => navigate('/buy')} className='cursor-pointer flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full hover:scale-105 transition-all duration-700'>
            <img src={assets.credit_star} alt="" className='w-6 h-6' />
            <p className='text-xs font-medium text-gray-600'>Credits Left : 50</p>
          </button>

          <p className='pl-2 text-gray-600 max-sm:hidden'>Hi, Sounak</p>

          <div className='relative group'>
            <img src={assets.profile_icon} alt="" className='w-10 drop-shadow' />
            <div className='absolute hidden group-hover:block top-0 
            right-0 z-10 text-black rounded pt-12'>
              <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
              </ul>
            </div>
          </div>

        </div> 
        : 
        <div className='flex items-center gap-4'>
          <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
          <button className='bg-black text-white px-15 py-2 sm:py-3 text-sm rounded-full'>Login</button>
        </div>
        }

      </div>
    </div>
  )
}

export default Navbar