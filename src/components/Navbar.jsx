import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { styles } from "../style"
import logo from "../assets/logo2.png"
import {navLinks} from "../constants"
import menu from "../assets/menu.svg"
import close  from '../assets/close.svg'
import {me} from "../assets"


const Navbar = () => {
  const [Active, setActive ] = useState("")
  const [Toggle, setToggle ] = useState(false)




  return (
    <nav className={`${styles.paddingX} w-full flexitems-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0,0)}}>
          <img  src={logo} alt='logo' className="h-16 w-16 object-contain" />
          <p className="font-bold text-white cursor-pointer text-[18px]">Rahul<span>-</span>Chatterjee</p>
        </Link>
       <ul className='list-none hidden sm:flex flex-row gap-10'>
{
  navLinks.map((link)=>(
    <li key={link.id} className={`${Active===link.title ?"text-white":"text-secondary"} hover:text-white font-medium text-[18px] cursor-pointer`} onClick={()=>setActive(link.title)}>
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))

}  
<div className='text-black bg-white h-8 w-8 rounded-full justify-center flex items-center cursor-pointer'>
<div className='rounded-full flex justify-center h-6 w-6'>
 <img src={me} alt="Rahul"  />
</div>
</div>
 </ul>
<div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={Toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!Toggle)}
          />
<div className={`${!Toggle?"hidden":"flex"} p-6 black-gradient top-20 absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
<ul className='list-none flex justify-end gap-4 flex-col items-start'>
{
  navLinks.map((link)=>(
    <li key={link.id} className={`${Active===link.title ?"text-white":"text-secondary"} font-poppins font-medium text-[18px] cursor-pointer`} onClick={()=>{setActive(link.title);
    setToggle(!Toggle)}}>
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))
}  
<div className='text-black bg-white h-12 w-12 rounded-full justify-center flex items-center cursor-pointer'>
<div className='rounded-full flex justify-center h-6 w-6'>
 <img src={me} alt="Rahul"  />
</div>
</div>  
</ul>
</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar