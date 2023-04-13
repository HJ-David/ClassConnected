import React from 'react'
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const Featured = ({type}) => {

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='max-w-[1240px] mx-auto py-10'>
      <div className='flex flex-col md:flex-row mb-10 justify-between items-center'>
        <h1 className='mx-7 text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-0 capitalize'>
          {type}
        </h1>
        <p className='mx-7 my-4 text-base md:text-lg text-gray-500 md:ml-5 flex-grow text-center'>
          Find a class that fits you. You will find a great classmates and an
          awesome teacher.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default Featured