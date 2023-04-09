import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import Computers from "./canvas/Computers"
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className='w-full h-screen relative mx-auto '>
      <div className={`${styles.paddingX} absolute top-[120px] inset-0 flex flex-row gap-5 items-start mx-auto max-w-7xl`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient ' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi,I'M
            <span className="text-[#915eff] font-bold px-2">
              Rahul
            </span>
          </h1>
      <div className={`${styles.heroSubText} text-white-100 mt-2`} >
      <Typewriter
            options={{
              strings: ['Full Stack Web developer',"Programmer","Problem-Solver"],
              autoStart: true,
              loop: true,
            }} />
      </div>
        </div>
      </div>
       <Computers/>
       <div className='bottom-32 absolute w-full justify-center xs:bottom-10 items-center flex'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary justify-center items-start flex p-2 cursor-pointer' id="about" >
            <motion.dev
            animate={{
              y:[0,24,0],
            }}
            transition={{
              duration:1.51,
              repeat:Infinity,
              repeatType:"loop"
            }}
            className="w-3 h-3 rounded-full bg-white mb-1"
           
            />
              </div>
            </a>  
       </div>
    </section>
  )
}

export default Hero