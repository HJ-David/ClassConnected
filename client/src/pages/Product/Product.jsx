import React from "react";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='max-w-[1240px] mx-auto flex flex-col md:flex md:flex-row px-10 py-20 justify-evenly'>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className='flex md:w-1/2 w-full mx-1 mb-5'>
            <div className='w-1/6 mr-5'>
              <img
                className=' h-150 object-cover cursor-pointer mb-5'
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                className='h-150 object-cover cursor-pointer mb-5'
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className='w-5/6 '>
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col mx-5 px-10 md:w-1/2 w-full'>
            <div>
              <h1 className='text-lg font-bold mb-5'>
                {data?.attributes?.title}
              </h1>
              <p className='mb-5'>{data?.attributes?.desc}</p>
            </div>
            <div className='flex justify-between mb-5'>
              <div className='text-lg'>
                <button
                  className='h-8 w-8 font-semibold rounded-full border-2 text-gray-800'
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span className='px-5'>{quantity}</span>
                <button
                  className='h-8 w-8 font-semibold rounded-full border-2 text-gray-800'
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <span className='text-right font-bold my-4'>
                  ${data?.attributes?.price}
                </span>
              </div>
            </div>
            <div className='mb-5 flex'>
              <button
                className='h-8 px-3 font-semibold rounded-md bg-yellow-400 text-gray-600'
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <span className='flex items-center'>
                  <BsCartCheck className='mr-2' /> ADD TO CART
                </span>
              </button>
            </div>
            <div className='flex'>
              <div className='flex items-center text-gray-600'>
                <MdFavoriteBorder /> ADD TO WISH LIST
              </div>
            </div>

            {/* <div className='info'>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
            {/*             
            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
