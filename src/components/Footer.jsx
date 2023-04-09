import React from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { styles } from '../style'
import { FooterIcons } from '../constants'
import { BallCanvas } from './canvas'
const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <>
      <div className='h-[130px] w-full mt-[30px]'>
      <motion.div variants={slideIn("left", "tween", 0.2, 0.5)} className='bg-black-100 p-12  rounded-2xl flex justify-between sm:flex xl:flex-row'>
    <p className={`${styles.heroSubText}`} >Check out my other Handles</p>
    <div className='flex flex-row justify-end '>
  {
    FooterIcons.map((icons,index)=>(
      <div className='w-10 h-10 ' key={icons.name}>
      <BallCanvas icon={icons.icon}/>
      <p className=' font-bold flex justify-center'>{icons.name}</p>
      </div>
    ))
  }
    </div>
    </motion.div>
 
      </div>
      <div className='items-center flex justify-center flex-col '>
        <b>@{year} all copyrights reserved</b>
        <p>Rahul Chatterjee</p>
      </div>
    </>
  )
}

export default Footer