import React, { Fragment, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux";
import Canvas from "./Canvas";
import { useTranslation } from "react-i18next";
import i18next from "i18next"
import { languages } from "../../i18n"
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [open,setOpen] =useState(false)
  const products = useSelector((state) => state.cart.products);
 
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { t } = useTranslation(["navbar"]);


  return (
    <div className='mx-auto px-7 flex justify-between items-center h-24 max-w-[1240px]'>
      {/* Logo  */}
      <div className='relative isolate py-1 px-4 font-helvetica-neue font-bold tracking-wide text-base text-gray-800'>
        <Link className='text-[18px]' to='/'>
          {t("navbar:classconnected")}
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

      {/* Desktop size menu  */}
      <ul className='hidden md:flex font-sohne-var text-gray-500 font-bold text-sm'>
        {/* i18n */}
        <Menu as='div' className='relative inline-block'>
          <div className='flex items-center'>
            <Menu.Button className='inline-flex justify-center bg-white pl-2 py-2 text-sm font-semibold text-gray-900 '>
              <FaLanguage
                className='m-0 p-0 h-9 w-9  items-center text-gray-400 hover:text-yellow-500'
                aria-hidden='true'
              />
            </Menu.Button>
            <MdOutlineKeyboardArrowDown />
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-[90px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                {languages.map(({ code, name }) => (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-xs"
                        )}
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        {name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* menu listing */}
        <li className='py-4 pl-3 w-[80px] text-center hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/products/1'>{t("navbar:english")}</Link>
        </li>
        <li className='py-4 pl-3 w-[80px] text-center hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/products/2'>{t("navbar:korean")}</Link>
        </li>
        <li className='py-4 pl-3 w-[80px] text-center  hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/products/3'>{t("navbar:chinese")}</Link>
        </li>
        <li className='py-4 pl-4 w-[60px] text-center hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/'>{t("navbar:blog")}</Link>
        </li>
        <li className='py-4 pl-1 w-[130px] text-center hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/'>{t("navbar:studymaterial")}</Link>
        </li>
        <li className='py-4 pl-3 w-[80px] text-center hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link className='flex items-center' to='/signin'>
            {t("navbar:signin")} <RiArrowRightSLine />
          </Link>
        </li>

        {/* cart icon  */}
        <li
          className='relative text-lg items-center p-4 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          <BsCartCheck />
          <span className='inline-flex items-center justify-center bg-blue-900 text-white text-xs rounded-full h-3 w-3 absolute right-[12px] top-[12px]'>
            {products.length}
          </span>
        </li>
      </ul>

      {/* Mobile Menu Hamburger */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <span></span> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed z-50 right-0 top-0 w-[50%]  overflow-auto h-full border-l border-l-gray-200 bg-[#ffffff] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div
          onClick={handleNav}
          className='flex md:hidden justify-end mt-2 mr-6'
        >
          {nav ? <AiOutlineClose size={20} /> : <span></span>}
        </div>

        {/* Mobile i18n */}
        <Menu as='div' className='relative inline-block ml-4'>
          <div className='flex items-center'>
            <Menu.Button className='inline-flex justify-center bg-white px-0 py-1 text-sm font-semibold'>
              <FaLanguage
                className='m-0 p-0 h-9 w-9  items-center text-gray-400 hover:text-yellow-500'
                aria-hidden='true'
              />
            </Menu.Button>
            <MdOutlineKeyboardArrowDown />
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute left-0 z-10 mt-2 w-[90px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                {languages.map(({ code, name }) => (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-xs"
                        )}
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        {name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Mobile menu listing */}
        <li className='px-4 py-1 text-gray-500 hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer font-bold'>
          <Link to='/products/1'>{t("navbar:english")}</Link>
        </li>
        <li className='px-4 py-1 text-gray-500 font-bold hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/products/2'>{t("navbar:korean")}</Link>
        </li>
        <li className='px-4 py-1 text-gray-500 font-bold hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/products/3'>{t("navbar:chinese")}</Link>
        </li>
        <li className='px-4 py-1 text-gray-500 font-bold hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/'>{t("navbar:blog")}</Link>
        </li>
        <li className='px-4 py-1 text-gray-500 font-bold hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link to='/'>{t("navbar:studymaterial")}</Link>
        </li>
        <li className='px-4 py-1 text-gray-500 font-bold hover:text-yellow-500 hover:transition hover:ease-in duration-300 hover:cursor-pointer'>
          <Link className='flex items-center' to='/signin'>
            {t("navbar:signin")} <RiArrowRightSLine />
          </Link>
        </li>
        <li
          className='relative text-gray-500 text-lg p-4 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          <BsCartCheck />
          <span className='inline-flex items-center justify-center bg-blue-900 text-white text-xs rounded-full h-3 w-3 absolute top-[10px] right-50'>
            {products.length}
          </span>
        </li>
      </ul>
      {open && <Cart />}
    </div>
  );
};

export default NavBar;