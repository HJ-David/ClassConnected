import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );
  
  

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)

  return (
    <div className='max-w-[1240px] mx-auto p-4 sm:p-6 md:p-8 flex flex-col md:flex-row'>
      <div className='md:sticky md:top-20 md:h-full mr-5 px-6 w-full md:w-40 md:pr-1'>
        <div className='mb-8 w-1/10'>
          <h2 className='font-medium mb-4 text-lg leading-6'>
            Class Categories
          </h2>
          {data?.map((item) => (
            <div className='space-y-2' key={item.id}>
              <input
                className='form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded'
                type='checkbox'
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label
                className='ml-2 text-sm font-medium text-gray-700'
                htmlFor={item.id}
              >
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>
        <div className='mb-8'>
          <h2 className='font-medium mb-4 text-lg leading-6'>
            Filter by price
          </h2>
          <div className='flex items-center'>
            <span className='text-sm font-medium text-gray-700 mr-2'>0</span>
            <input
              className='w-full'
              type='range'
              min={0}
              max={200}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className='text-sm font-medium text-gray-700 ml-2'>
              {maxPrice}
            </span>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <img
          className='w-full h-48 md:h-64 object-cover mb-8'
          src='/img/products.jpg'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
