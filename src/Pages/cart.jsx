import React from 'react'
import Layout from '../Layout/layout'
import { useCart } from '../Context/cartContext'
import Rating from '../Components/rating';

const Cart = () => {

  const { cart, removeItemFromCart } = useCart();

  return (
    <Layout>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-800'>Shopping Cart</h1>
      <h1 className='font-semibold text-sm sm:text-base md:text-lg text-zinc-700 my-4'>{cart.length} items in the cart</h1>
      <div className='mt-6 w-full justify-between flex flex-col custom-mid:flex-row  md:space-x-10 custom-mid:space-x-5'>
        <div className='w-full sm:grow'>
          {
            cart.map(item => (
              <div key={item.id} className='flex border-t border-zinc-300 py-3' >
                <img src={item.thumbnail} alt="banner" className='h-[40px] sm:h-[50px] md:h-[70px]' loading='lazy'/>
                <div className='flex justify-between items-start grow pl-4'>
                  <div className='w-full mr-3 flex flex-col justify-between h-fullbg-slate-300'>
                    <h1 className='font-bold text-sm sm:text-base'>{item.title}</h1>
                    <h1 className=' text-sm text-zinc-500 '>{item.creator}</h1>
                    <div className='flex space-x-2  items-start ' >
                      <div className='font-bold text-xs sm:text-sm text-amber-950'>{item.rating}</div>
                      <Rating rating={item.rating} />
                    </div>
                    <div className='flex  text-sm  text-zinc-500 space-x-2'>
                      <h1 >{item.hours} total hours</h1>
                      <h1 className='font-bold'>•</h1>
                      <h1>{item.lectures} lectures</h1>
                    </div>
                  </div>
                  <div className='flex flex-col justify-between items-end h-full'>
                    <button className='text-gray-600 text-xs sm:text-sm md:text-base' onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    <div className='text-sm sm:text-base font-bold text-sky-600'>₹{item.price}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className=' bg-zinc-100 p-3 h-min w-full custom-mid:w-[400px] ' >
          <h1 className='font-bold text-zinc-500 text-sm sm:text-base md:text-lg'>Total</h1>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-800 text-left'>₹{cart.reduce((total, item) => total + item.price, 0)}</h1>
          <div className='h-[1px] mt-3 mb-6 bg-zinc-200 '></div>
          <button className='text-center bg-sky-600 text-white w-full py-3 font-bold hover:bg-sky-700 transition-all text-sm sm:text-base md:text-lg'>Checkout</button>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
