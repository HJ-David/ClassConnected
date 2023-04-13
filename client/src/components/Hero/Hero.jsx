import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const { t } = useTranslation(["hero"]);

  return (
    <div className='w-90vw my-3'>
      <div className='h-full max-w-[1240px] mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex flex-col h-full justify-center items-center flex-wrap relative'>
          <div className='ml-5'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br /> {t("hero:highly_effective")}
              <br />
              {t("hero:language_learning_system")}
              <br /> {t("hero:find_for_you")}
              <br />
              <br />
            </h1>
            <p className='font-sans text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> {t("hero:1-1")}
              <br />
              <span className='text-yellow-500'>§</span> {t("hero:both")}
              <br /> <span className='text-yellow-500'>§</span>{" "}
              {t("hero:material")}
              <br /> <br />
            </p>
          </div>
          <Link to='/signup'>
            <button
              className='h-10 px-5 font-semibold rounded-md bg-yellow-400 text-gray-500'
              type='submit'
            >
              {t("hero:join")}
            </button>
          </Link>
        </div>

        <div className='flex justify-center items-center flex-wrap relative order-first md:order-last'>
          <video
            className='max-w-full object-cover p-0 m-0'
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src='/img/intro.mp4' type='video/mp4' />
          </video>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover mix-blend-screen'
            src='/img/border.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
