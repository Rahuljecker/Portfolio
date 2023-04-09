import React from 'react'
import { SectionWrapper } from '../Hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from "../utils/motion"
import { projects } from '../constants'
import { github } from '../assets'
import { p } from 'maath/dist/misc-7d870b3c.esm'

const ProjectCard = ({ index, name, description, tags, image, Deployment_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.7, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full " options={{ max: 45, scale: 1, speed: 450 }}>
        <div className='max-h-[230px] relative w-full'>
         <div className='h-[200px] w-full'>
         <img src={index.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
         </div>
          <div className='inset-0 absolute flex justify-end m-3 card-img_hover'>
            <div onClick={()=>{window.open(index.source_code_link,"_blank")}} className='w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt={index.name} className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>
        <div className='mt-3'>
              <h3 className='flex flex-wrap items-start justify-start font-bold text-[36px]'>{index.name}</h3>
              <p className='text-[14px] text-secondary mt-2 line-clamp-4' >{index.description}</p>
              <div className='flex flex-wrap mt-4 gap-2'>
                {
                  index.tags.map((tag,index)=>(
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                  ))
                }
              </div>
            </div>
      </Tilt>
    </motion.div>
  )
}

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='project' >
        <p className={styles.sectionSubText}>I have done ....</p>
        <h2 className={styles.heroHeadText}>PROJECTS.. </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.5, 1)} className='max-w-3xl font-[17px] text-secondary mt-3 leading-[30px]'>
          Following peojects are showcase my Skills and experience through real-world examples of my work.Each project Briefly described with links to code repositories and live demos in it.It shows the ability to solve complex Problems,work with different Technologies.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          projects.map((index, project) => (
            <ProjectCard key={index} index={index} {...project} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Project, "project")