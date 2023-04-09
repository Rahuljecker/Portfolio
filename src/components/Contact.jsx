import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../style'
import { SectionWrapper } from '../Hoc'
import { EarthCanvas } from './canvas'
import { fadeIn, slideIn } from '../utils/motion'

//Template id:template_ane4mfg
//servide_ID:service_uzagg6o
//API_PUBLIC_KEY:JuHFjP9Rd2Op_PJbO

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }


  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_uzagg6o",
        "template_ane4mfg",
        
          // from_name: formRef.name,
          // to_name: "Rahul Chatterjee",
          // from_email: formRef.email,
          // to_email: "rahul.chatterjee.info@gmail.com",
          // message: formRef.message,
          formRef.current
        ,
        "JuHFjP9Rd2Op_PJbO"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          console.log(result)
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }



  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 0.5)} className='bg-black-100 p-8 flex-[0.75] rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={HandleSubmit} className='mt-12 flex flex-col gap-8' ref={formRef}>
          <label className='flex flex-col '>
            <span className='text-white font-medium px-4'>Your name</span>
          </label>
          <input placeholder='introduce yourself' type='text' value={form.name} name="name" className='py-4 px-6 rounded-lg placeholder:text-tertiary-100 bg-tertiary outline-none border-none font-medium' onChange={HandleChange} />
          <label className='flex flex-col '>
            <span className='text-white font-medium px-4'>Your Email</span>
          </label>
          <input placeholder='Heyy tell me your mail' type='email' value={form.email} name="email" className='py-4 px-6 rounded-lg placeholder:text-tertiary-100 bg-tertiary outline-none border-none font-medium' onChange={HandleChange} />
          <label className='flex flex-col '>
            <span className='text-white font-bold px-4'>Please tell me</span>
          </label>
          <textarea placeholder='introduce yourself' rows="7" value={form.message} name="message" className='py-4 px-6 rounded-lg placeholder:text-tertiary-100 bg-tertiary outline-none border-none font-medium' onChange={HandleChange} />
          <button type="submit" className='bg-tertiary px-8 m-2 py-4 text-white outline-none font-bold shadow-md shadow-primary rounded-lg hover:text-black hover:bg-white'>{loading ? "Sending..." : "Send"}</button>
        </form>

      

      </motion.div>
      <motion.div className='xl:flex-1 xl:h-auto md:h-[550px] h-[360px] ' variants={fadeIn("right", "spring", 0.5, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")