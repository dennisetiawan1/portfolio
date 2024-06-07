import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div id='Skills' className='pt-20 bg-gray-100 pb-10'>
      <div className='sm:flex sm:flex-col sm:items-center'>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 50 }}
        transition={{ duration: 0.8 }}
        className='text-4xl font-bold text-center mb-2'>Skills</motion.h1>
        <div className='pt-4 flex flex-wrap justify-center gap-4 sm:gap-6 sm:grid sm:grid-cols-4'>
          {SKILLS.map((skill, index) => (
            <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            key={index} className='flex flex-col items-center justify-center gap-1 mb-2'>
              <div className='flex items-center bg-white p-5 rounded-full'>
                <img src={skill.image} width={35} alt={skill.title} />
              </div>
              <p className='text-gray-400 text-sm'>{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
