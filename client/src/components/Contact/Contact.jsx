import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className='bg-yellow-500 bg-opacity-80 text-white py-2 flex justify-center'>
      <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center justify-between'>
        <span className='text-lg mb-2 md:mb-0'>CONTACT US:</span>
        <div className='flex'>
          <input
            type='text'
            placeholder='Enter your e-mail...'
            className='mb-2 md:mb-0 ml-0 md:ml-2 px-2 py-2 rounded-l-lg border border-r-0 outline-none focus:border-blue-700'
          />
          <button className='mb-2 md:mb-0 px-2 py-2 rounded-r-lg bg-gray-500 hover:bg-gray-700'>
            SEND
          </button>
        </div>
        <div className='flex gap-4 text-2xl '>
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
        </div>
      </div>
    </div>
  );
};

export default Contact;
