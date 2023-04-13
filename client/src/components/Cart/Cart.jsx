import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { AiOutlineClose } from "react-icons/ai";


const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Mr0jnLWlrKEVk8ACtKT07keC2eOD6o8jhPeLTwrK6g3CuuYVpSqPvP6SiIbXymxkLjciTcTH0elXxjI7MaOUBVN00yzDsjzh6"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [close, setClose] = useState(false);
  const handleCart = () => {
    setClose(!close);
  };

  return (
    <div
      className={
        !close
          ? "fixed right-0 top-16 z-50 rounded-lg bg-gray-100 p-4 shadow-lg sm:w-96 sm:right-4"
          : "ease-in-out duration-500 fixed right-[-200%]"
      }
    >
      <div onClick={handleCart} className='flex justify-end'>
        {close ? <span></span> : <AiOutlineClose size={20} />}
      </div>
      <h1 className='text-gray-500 font-semibold text-xl mb-6'>
        Products in your cart
      </h1>
      {products?.map((item) => (
        <div className='flex items-center gap-4 mb-6' key={item.id}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt=''
            className='w-20 h-24 object-cover'
          />
          <div className='flex flex-col justify-between w-full'>
            <h1 className='font-medium text-lg'>{item.title}</h1>
            <p className='text-gray-500 text-sm'>
              {item.desc?.substring(0, 100)}
            </p>
            <div className='flex justify-between items-center'>
              <div className='text-blue-500 text-sm'>
                {item.quantity} x ${item.price}
              </div>
            </div>
          </div>
          <AiOutlineDelete
            className='text-red-500 text-2xl cursor-pointer'
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className='flex justify-between items-center font-medium text-lg mb-4'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button
        className='bg-blue-400 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 mb-4'
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      <span
        className='text-red-500 text-sm cursor-pointer'
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
