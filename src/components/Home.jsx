import React from 'react'
import Gambar from '../assets/gambar.png'
import LogoReact from '../assets/Logo/react.png'
import LogoJS from "../assets/Logo/js.png"
import LogoTailwind from "../assets/Logo/tailwind.png"
import "../index.css"
import { motion } from 'framer-motion'

const IconTransition = (delay, hidden_y) => ({
    hidden: {y: hidden_y, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.3, delay: delay}
    }
})

const Home = () => {
  return (
    <div id='Home' className='pt-32 bg-slate-100 px-4'>
      <div className='flex flex-col sm:justify-center lg:flex-row lg:justify-center lg:gap-10'>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col gap-8 sm:flex sm:pl-20 lg:flex lg:p-0'>
          <div className='rotating-border container flex gap-4 cursor-default'>
            <div className='flex items-center shadow-pass py-4 px-7 gap-4 rounded-xl'>
              <div className='emoji text-4xl'>👋</div>
              <div className=''>
                <h2 className='text-sm text-gray-500'>Hello, I am</h2>
                <h1 className='tracking-wide font-bold text-3xl'>Denni</h1>
              </div>
            </div>
          </div>
          <div className='flex sm:flex lg:flex'>
            <div className='flex flex-col items-end shadow-pass py-3 px-7 rounded-lg'>
              <h3 className='text-xs uppercase text-gray-500'>Web Developer</h3>
              <h3 className='text-xs uppercase text-gray-500'>Informatics Student</h3>
            </div>
          </div>
        </motion.div>

        <div className='pt-2 flex justify-center'>
          <motion.img
          whileInView={{ opacity: 1, x:0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className='w-96' src={Gambar} alt="" />
        </div>


        <div className='pt-5 mb-5 sm:flex sm:justify-center lg:flex'>
            <div
            className='flex items-center justify-center flex-wrap sm:flex sm:items-center sm:gap-20 lg:flex lg:flex-col lg:justify-start lg:gap-10'>
                <motion.div
                variants={IconTransition(0.8, 100)}
                initial="hidden"
                animate="visible"
                className='flex justify-center mb-6 mx-4 sm:self-start lg:justify-start'>
                    <div className='flex justify-center shadow-pass p-4 rounded-full'>
                      <img src={LogoJS} width={60} alt="" />
                    </div>
                </motion.div>
                <motion.div
                variants={IconTransition(1, 0)}
                initial="hidden"
                animate="visible"
                className='flex justify-center mx-4 mb-6'>
                    <div className='flex justify-center shadow-pass p-6 rounded-full'>
                      <img src={LogoReact} width={80} alt="" />
                    </div>
                </motion.div>
                <motion.div
                variants={IconTransition(0.9, -100)}
                initial="hidden"
                animate="visible"
                className='flex justify-center mx-4 sm:self-start lg:justify-start'>
                    <div className='flex justify-center shadow-pass p-3 rounded-full'>
                      <img src={LogoTailwind} width={50} alt="" />
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
    </div>
  )
}
export default Home
