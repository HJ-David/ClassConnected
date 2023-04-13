import React from 'react'
import Canvas from "../NavBar/Canvas";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200 via-white to-white py-10 px-6 md:px-20 lg:px-40'>
      <div className='flex flex-wrap justify-around'>
        <div className='flex gap-10'>
          <div className='my-1'>
            <h1 className='text-lg font-bold text-gray-700 mb-4'>Category</h1>
            <span className='text-gray-500'>1:1 Class</span>
            <br />
            <span className='text-gray-500'>Group Class</span>
            <br />
            <span className='text-gray-500'>Community</span>
            <br />
            <span className='text-gray-500'>Blog</span>
            <br />
          </div>
          <div className='my-1'>
            <h1 className='text-lg font-bold text-gray-700 mb-4'>Languages</h1>
            <span className='text-gray-500'>English</span>
            <br />
            <span className='text-gray-500'>Korean</span>
            <br />
            <span className='text-gray-500'>Chinese</span>
            <br />
            <span className='text-gray-500'>Spanish</span>
            <br />
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='my-1'>
            <h1 className='text-lg font-bold text-gray-700 mb-4'>About</h1>
            <span></span>
          </div>
          <div className='my-1'>
            <h1 className='text-lg font-bold text-gray-700 mb-4'>Contact</h1>
            <span></span>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-around items-center mt-10'>
        <div className='flex items-center'>
          <div className='relative isolate py-1 px-4 font-helvetica-neue font-bold tracking-wide text-base text-gray-800'>
            <Link className='text-[18px]' to='/'>
              Class Connected
            </Link>
            <div className='absolute -z-10 inset-0'>
              <Canvas className='max-w-full object-cover p-0 m-0' />
              <img
                className='absolute top-0 left-0 w-full h-full mix-blend-screen'
                src='/img/borderlogo.jpg'
                alt=''
              />
            </div>
          </div>

          <div className='sm:text-sm text-[10px] text-gray-500 ml-4'>
            &copy;Copyright 2023. All Rights Reserved
          </div>
        </div>
        <div className=''>
          <img src='/img/payment.png' alt='' className='sm:h-10 h-7' />
        </div>
      </div>
    </div>
  );
}

export default Footer