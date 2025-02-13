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
            className='btn border-2 border-red-700 text-red-700 '
          >
            Add Food
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
