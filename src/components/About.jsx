import React from 'react'
import { ABOUT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='About'>
      <div className='pt-20 mb-20'>
          <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='text-4xl font-bold text-center mb-2'>About <span className='text-navy'>Me</span></motion.h1>
        <div className='mt-4'>
          <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col flex-wrap items-center gap-4 sm:flex-row sm:justify-center sm:gap-10'>
                {ABOUT.map((about, index) => (
                  <div key={index} className='flex flex-col hover:scale-110 duration-500'>
                    <div className='w-52 h-48 rounded-full'>
                      <img className='object-cover h-full w-full rounded-t-xl' src={about.image} alt="" />
                    </div>
                    <div className='flex flex-col max-w-52 h-32 px-4 pt-2'>
                      <h3 className='font-bold'>{about.title}</h3>
                      <p className='text-gray-500 text-sm'>{about.desc}</p>
                    </div>
                  </div>
                ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
