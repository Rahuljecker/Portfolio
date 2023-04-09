import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from "../utils/motion"
import { services } from '../constants'
import {SectionWrapper} from "../Hoc"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full m-4" >
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full rounded-[20px] p-[2px] shadow-card green-pink-gradient'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] px-[10px] py-[10px] cursor-pointer min-h-[250px] flex flex-col items-center justify-evenly'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <p>{title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}
 

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>intorduction</p>
        <h2 className={styles.heroHeadText}>OVERVIEW. </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className='mt-4 max-w-3xl leading-[30px] text-secondary text-[17px]'>
        I'm a Final year Information Technology student from MAKAUT,W.B.I have proficiency in HTML-5,CSS-3,JAVASCRIPT and several famous fameworks like React.js ,Express.js and as well as Node.js .I am very keen learner and has hunger to digest new technologies.
      </motion.p>
      <div className='mt-4 flex flex-wrap gap-5'>
        {
          services.map((service, index) => (
            <ServiceCard index={index} title={service.title} key={index}  icon={service.icon}{...services} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");