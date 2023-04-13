import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='bg-white rounded-lg overflow-hidden shadow-md mb-4 w-[340px] h-[320px] sm:w-[320px] sm:h-[400px] md:w-[320px] md:h-[420px]'>
        <div className='relative w-full h-40 sm:h-52 md:h-64'>
          {item?.attributes.isNew && (
            <span className='bg-white text-teal-500 font-medium px-2 py-1 absolute top-2 left-2 z-10'>
              New
            </span>
          )}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=''
            className='w-full h-full object-cover absolute top-0 left-0'
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=''
            className='w-full h-full object-cover absolute top-0 left-0 z-20 opacity-0 hover:opacity-100 transition duration-300'
          />
        </div>

        <div className='p-4 sm:p-6 md:p-8'>
          <div className=''>
            <h3 className='text-lg sm:text-xl md:text-xl font-semibold mb-2'>
              {item?.attributes.title}
            </h3>
            <h5 className='text-gray-500 text-sm font-medium'>
              {item?.attributes.level}
            </h5>
            <h5 className='text-gray-500 text-sm font-medium'>
              {item?.attributes.time}
            </h5>
            <h5 className='text-gray-500 text-sm font-medium'>
              {item?.attributes.members}
            </h5>
          </div>
          <div className='flex justify-end items-center'>
            <h5 className='text-xl font-medium'>
              USD{item?.attributes.price}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card