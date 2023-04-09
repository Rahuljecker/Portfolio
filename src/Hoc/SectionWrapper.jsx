import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import {staggerContainer} from "../utils/motion"


const SectionWrapper = (Component,idname) => 
 function HOC(){
    return (
        <motion.section variants={staggerContainer()} initial="hidden" whileInView={"show"} viewport={{once:true,animate:0.25}} className={`${styles.paddingX} max-w-8xl mx-auto relative z-1`}>
        <span className='hash-span' id={idname}>
            &nbsp;
        </span>
        <Component/>
        </motion.section>  
    )
 }


export default SectionWrapper