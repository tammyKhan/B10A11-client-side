import React from 'react'

/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full '>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/add-food'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500'
          >
            Add Food
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
