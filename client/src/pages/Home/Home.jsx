import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from "../../components/About/About";
import Featured from '../../components/Featured/Featured'
import Contact from '../../components/Contact/Contact'
import { useTranslation } from 'react-i18next'

const Home =() => {
  const { t } = useTranslation(["home"]);
  return (
    <div className='home'>
      <Hero />
      <About />
      <Featured type='featured' />
      <Featured type='trending' />
      <Contact />
    </div>
  );
}

export default Home