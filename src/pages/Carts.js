import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import {ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"

const Carts = () => {
  const productData = useSelector((state)=>state.bazar.productData);
  const userInfo = useSelector((state)=>state.bazar.userInfo);
  const [payNow, setPayNow] = useState(false)
const [totalAmt, setTotalAmt] = useState()

useEffect(()=>{
  let price = 0;
  productData.map((item)=>{
    price += item.price * item.quantity;
    return price
  });
  setTotalAmt(price.toFixed(2))
},[productData])

const handleCheckOut = ()=>{
  if(userInfo){
    setPayNow(true)
  }else{
    toast.error("Please sign in to Checkout")
  }
}

const payment = async(token)=>{
  await axios.post("http://localhost:8000/pay", {
    amount:totalAmt * 100,
    token: token,
  })
}

  return (
    <div>
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                Rs. {totalAmt}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            {" "}
            Total <span className='text-xl font-bold'>Rs. {totalAmt}</span>
          </p>
          <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-3'>Proceed to checkout</button>
          {payNow && (
            <div className='w-full mt-6 flex items-center justify-center'>
              <StripeCheckout
              stripeKey=''
              name='pk_test_51PFYPy04EsHrFgJhuOBwcQR8KcrbRqCPkcD1pRyfICnRoia1pVApeNQgF5XKAPvkBetCEzIRVH6GJj6jrDuaLkk300A1El6exD'
              amount={totalAmt * 100}
              label='Pay to finery'
              description={`Your Payment amount is Rs. ${totalAmt}`}
              token={payment}
              email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer 
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  )
}

export default Carts
