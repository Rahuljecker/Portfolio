import React from 'react'
import {BallCanvas} from "./canvas"
import { SectionWrapper } from '../Hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-10'>
  {
    technologies.map((technology,index)=>(
      <div className='w-28 h-28' key={technology.name}>
      <BallCanvas icon={technology.icon}/>
      <p className=' font-bold flex justify-center'>{technology.name}</p>
      </div>
    ))
  }
    </div>
  )
}

export default SectionWrapper(Tech,"")