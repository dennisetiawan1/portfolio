import React from 'react'
import mail from "../assets/mail.png"
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
    <div id='Contacts' className='pt-10 bg-slate-100'>
      <div className='flex flex-col justify-center items-center'>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className='text-center text-4xl font-bold mb-10'>Take A Coffee & Chat With Me</motion.h1>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y:50 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col gap-10 sm:justify-center sm:items-center'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2 bg-blue-100 rounded-xl mx-4 py-2 px-4'>
                <div className='w-12'>
                  <img src={mail} alt="" />
                </div>
                  <a href="mailto:dennisetiawan1211@gmail.com" className='text-sm'>dennisetiawan1211@gmail.com</a>
              </div>
            </div>
          <form action="">
          <div className='mx-4 flex flex-col justify-center items-center gap-4 sm:w-96'>
            <div className='w-full'>
                <input type="text" placeholder='Your Name' className='text-sm pl-4 py-3 w-full outline-none' />
            </div>
            <div className='w-full'>
                <input type="text" placeholder='Your Email' className='text-sm pl-4 py-3 w-full outline-none' />
            </div>
            <div className='w-full'>
                <textarea name="" id="" placeholder='Your Message' className='text-sm px-4 p-3 w-full h-36 outline-none'></textarea>
            </div>
            <div className='flex justify-center bg-blue-900 text-white py-4 px-8 rounded-lg text-sm'>
              <input type="submit" value="Send Message" className='' />
            </div>
          </div>
          </form>
        </motion.div>

        <div className='flex flex-col mt-10 gap-10 w-full sm:flex-row sm:justify-between sm:mt-0'>
          
          <div className='flex justify-around sm:flex-col sm:gap-4 sm:ml-10 sm:mb-4'>
            <div className='p-4 bg-white rounded-full text-gray-700'>
              <a href="https://www.instagram.com/dennisetiawan6?igsh=MWtzM243OWJ3b2l1eg==" target='_blank'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
              </a>
            </div>
            <div className='p-4 bg-white rounded-full text-gray-700'>
              <a href="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg>
              </a>
            </div>
            <div className='p-4 bg-white rounded-full text-gray-700'>
              <a href="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
              </a>
            </div>
          </div>

          <div className='flex flex-col items-end mr-4 mb-10 text-sm sm:justify-end'>
            <h4>@2023 DENNI SETIAWAN</h4>
            <h4>ALL RIGHTS RESERVED</h4>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contacts
