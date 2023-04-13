import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation(["about"]);

  return (
    <div className='w-90vw my-20'>
      <div className='h-full max-w-[1240px] my-10 mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex flex-col h-full justify-center items-start flex-wrap relative'>
          <div className='mx-10'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              {t("about:1a")}
              <br />
              <br />
            </h1>
            <p className='font-sans md:w-[400px] w-[350px] text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span>
              {t("about:1b")}
              <br />
              <br /> <br />
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center flex-wrap'>
          <img
            className='md:w-full md:h-full w-[350px] px-5'
            src='/img/calendar.jpg'
            alt=''
          />
        </div>
      </div>

      <div className='h-full max-w-[1240px] my-10 mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex justify-center items-center flex-wrap'>
          <img
            className='md:w-full md:h-full w-[350px] px-5'
            src='/img/studymaterial.jpg'
            alt=''
          />
        </div>

        <div className='flex flex-col h-full justify-center items-start flex-wrap relative order-first md:order-last'>
          <div className='mx-10'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              {t("about:2a")}
              <br />
              <br />
            </h1>
            <p className='font-sans md:w-[400px] w-[350px] text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> {t("about:2b")}
              <br />
              <br /> <br />
            </p>
          </div>
        </div>
      </div>

      <div className='h-full max-w-[1240px] my-10 mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex flex-col h-full justify-center items-start flex-wrap relative'>
          <div className='mx-10'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              {t("about:3a")}
              <br />
              <br />
            </h1>
            <p className='font-sans md:w-[400px] w-[350px] text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> {t("about:3b")} <br />{" "}
              <br /> <br />
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center flex-wrap'>
          <img
            className='md:w-full md:h-full w-[350px] px-5'
            src='/img/native.jpg'
            alt=''
          />
        </div>
      </div>

      <div className='h-full max-w-[1240px] my-10 mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex justify-center items-center flex-wrap'>
          <img
            className='md:w-full md:h-full w-[350px] px-5'
            src='/img/bilingual.jpg'
            alt=''
          />
        </div>

        <div className='flex flex-col h-full justify-center items-start flex-wrap relative order-first md:order-last'>
          <div className='mx-10'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              {t("about:4a")}
              <br />
              <br />
            </h1>
            <p className='font-sans md:w-[400px] w-[350px] text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> {t("about:4b")} <br />{" "}
              <br /> <br />
            </p>
          </div>
        </div>
      </div>

      <div className='h-full max-w-[1240px] my-10 mx-auto grid md:grid-cols-2 items-center justify-center px-20 md:px-100'>
        <div className='flex flex-col h-full justify-center items-start flex-wrap relative'>
          <div className='mx-10'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              {t("about:5a")}
              <br />
              <br />
            </h1>
            <p className='font-sans md:w-[400px] w-[350px] text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> {t("about:5b")} <br />{" "}
              <br /> <br />
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center flex-wrap'>
          <img
            className='md:w-full md:h-full w-[350px] px-5'
            src='/img/feedback.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default About