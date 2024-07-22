import React from 'react'
import logo from "../assets/Codesign_Logo.png"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full h-10 text-white flex justify-between border border-gray-400 items-center rounded-3xl z-30 custom-shadow'>
        <Link to="/Welcome" >
        <div className='flex justify-center items-center gap-4 cursor-pointer hover:scale-90 hover:pl-[2px] ml-4 sm:ml-0 origin-left transition-all'>
        <img  src= {logo} className='w-10 h-10 p-1 rounded-full border border-black invert hover:scale-90 hover:bg-[#525253] transition-all'/>
        Interactive Model
        </div>
        </Link>
        <Link to="/" ><div className='w-60 flex ml-10 items-center justify-center cursor-pointer'>
          <div className='flex items-end justify-center rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all'>CoDeSiGn</div>
        </div></Link>
        <div className='mx-4 flex justify-center items-start gap-2 mr-'>
            <Link to='/Works' ><button className='rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all'>Works</button></Link>
            <Link to='/About' ><button className='rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all'>About</button></Link>
            <Link to='/Contact' ><button className='rounded-xl p-1 cursor-pointer hover:scale-90 hover:bg-[#525253] transition-all'>Contact</button></Link>
        </div>
    </div>
  )
}

export default Navbar