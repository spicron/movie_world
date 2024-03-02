import React from 'react'
import myImage from "../../assets/movie_logo.jpg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="main lg:flex md:flex flex-wrap justify-between items-center py-4 px-4 bg-[#ff0040] sticky top-0">
        <div className="left flex space-x-3 items-center justify-center ">
          <img src={myImage} alt="logo"
          className='w-10' />
          <h2 className='text-white text-2xl font-bold justify-center'><Link to="/">MOVIE WORLD</Link></h2>
        </div>
        <div className="right">
          <ul className='flex  space-x-6  text-white font-medium justify-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/service">Service</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar