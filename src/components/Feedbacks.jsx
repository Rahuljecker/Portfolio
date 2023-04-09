import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../constants'
import { styles } from '../style'
import { SectionWrapper } from '../Hoc'
import { textVariant,fadeIn } from '../utils/motion'

const FeedbackCard=({index,testimonial,name,designation,company,image})=>{
  return (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{index.testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {index.name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {index.designation} of {index.company}
          </p>
        </div>

        <img
          src={index.image}
          alt={`feedback_by-${index.name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <>
<div className='mt-20 bg-black rounded-lg'>
  <div className={`${styles.padding} rounded-2xl bg-tertiary min-h-[300px]`}>
  <motion.div variants={textVariant()} id='project' >
        <p className={styles.sectionSubText}>what people say ....</p>
        <h2 className={styles.heroHeadText}>TESTIMONIALS.. </h2>
      </motion.div>
  </div>

  <div className={`${styles.padding} -mt-20 flex flex-wrap gap-10 pb-14`}>
    {
      testimonials.map((index,testimonial)=>(
        <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
      ))
    }
  </div>
</div>
    </>
  )
}

export default SectionWrapper(Feedbacks,"")