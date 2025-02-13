import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='bg-white md:flex justify-center items-center'>
      <div className=' min-h-screen px-6 py-12  '>
    
          <p className='text-2xl font-bold text-red-700'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Page not found
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesnt exist.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <button className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              to='/'
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-700 rounded-lg shrink-0 sm:w-auto hover:bg-red-600'
            >
              Take me home
            </Link>
          </div>
        
      </div>
    </section>
  )
};

export default ErrorPage;