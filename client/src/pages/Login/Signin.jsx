import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialUser = { password: "", identifier: "" };


const Signin = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const handleChange = ({target}) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    const url =`http://localhost:1337/api/auth/local`;
    try {
      if(user.identifier && user.password) {
        const {data} = await axios.post(url, user)
        if (data.jwt) {
          setUser(initialUser)
          navigate("/")
        }
        
      }
    } catch (error) {
      
    }
  };
    
  const { t } = useTranslation(["login"]);

  return (
    <div className='flex bg-gradient-to-b from-white via-gray-200 to-gray-100 w-90vw justify-center'>
      <div className='h-full md:max-w-[1240px] grid md:grid-cols-2 items-center justify-center md:px-100'>
        <div className='flex flex-col h-full justify-center items-center flex-wrap relative'>
          <div className='my-2 mx-4 pl-6 pr-4'>
            <h1 className='font-sans text-gray-600 font-bold md:text-2xl sm:text-xl'>
              <br />
              Highly effective <br />
              language learning system.
              <br /> Find classes that work for you.
              <br />
              <br />
            </h1>
            <p className='font-sans text-gray-600 md:text-base sm:text-sm'>
              <span className='text-yellow-500'>§</span> Take customizable
              1-on-1 lessons <br />
              <span className='text-yellow-500'>§</span> Learn from certified
              teachers that fit your budget and schedule
              <br /> <span className='text-yellow-500'>§</span> Connect with a
              community of language learners <br /> <br />
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center flex-wrap relative'>
          <div className='font-bold mb-5 md:mt-16 mt-2'>
            {t("login:signin_account")}
          </div>
          <div>
            <input
              type='email'
              name='identifier'
              value={user.identifier}
              onChange={handleChange}
              className='w-[350px] h-[45px] appearance-none bg-gray-100 focus:bg-gray-100 border-none rounded-lg py-3 px-4 mb-2 leading-tight transition duration-300'
              placeholder={t("login:email")}
              required
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              className='w-[350px] h-[45px] appearance-none bg-gray-100 focus:bg-gray-100 border-none rounded-lg py-3 px-4 mb-2 leading-tight transition duration-300'
              placeholder={t("login:password")}
              required
            />
          </div>

          <div>
            <button
              className='w-[350px] h-[45px] bg-transparent border border-gray-400 text-xs uppercase tracking-wide rounded-lg py-1 px-1 my-2 transition duration-500 ease-in-out hover:font-bold focus:bg-gray-500 focus:outline-none shadow-none'
              type='submit'
              onClick={handleLogin}
            >
              {t("login:signin")}
            </button>
            <div className='flex justify-center items-center px-4 my-4'>
              <span className='text-xs'>{t("login:noaccountyet")}</span>
              <div>
                <Link className='flex items-center' to='/signup'>
                  <button
                    type='submit'
                    className='bg-transparent border border-gray-400 text-xs uppercase tracking-wide rounded-lg px-1 my-2 transition duration-500 ease-in-out hover:bg-gray-300 focus:bg-gray-500 focus:outline-none shadow-none'
                    onclick=''
                  >
                    {t("login:signup")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin