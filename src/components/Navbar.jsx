import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">YNotes</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="sm:mr-10 sm:ml-10 hover:text-gray-900 sm:pl-0 sm:pr-0 pl-6 pr-6" to='/'>Home</Link>
      <Link className="sm:mr-10 sm:ml-10 hover:text-gray-900 sm:pl-0 sm:pr-0 pl-6 pr-6" to='/about'>About</Link>
      <Link className="sm:mr-10 sm:ml-10 hover:text-gray-900 sm:pl-0 sm:pr-0 pl-6 pr-6" to='/contact'>Contact</Link>
    </nav>
    <div className=''>
    <Link className='border-2 border-indigo-600 pt-1 pb-1 pl-3 pr-3 mr-2 rounded bg-indigo-600 text-white' to="/login">Login</Link>
    <Link className='border-2 border-indigo-600 pt-1 pb-1 pl-3 pr-3 ml-2 rounded bg-indigo-600 text-white' to="/signup">Sign Up</Link>
    </div>
  </div>
</header>
    </>
  )
}

export default Navbar
