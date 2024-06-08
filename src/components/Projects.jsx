import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div id='Projects' className='pt-20 mb-20'>
        <div className='mx-10'>
            <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className='text-4xl text-center font-bold mb-10'>My Creative <span className='text-navy'>Portfolio</span> Section</motion.h1>
            <div className='flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:flex-wrap'>
                {PROJECTS.map((project, index) => (
                    <motion.a
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    href={project.link} key={index} className='h-96 flex flex-col shadow-pass rounded-xl pb-4 duration-200 hover:shadow-hover' target='_blank'>
                        <div className='h-64 w-72 p-4'>
                            <img className='object-cover h-full rounded-t-xl' src={project.image} alt="" />
                        </div>
                        <div className='flex flex-col max-w-72'>
                            <h2 className='text-center font-bold mb-2'>{project.title}</h2>
                            <p className='pl-4 text-sm text-gray-500'>{project.desc}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
