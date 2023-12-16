import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import { useEffect } from 'react';

const ProductCartSummary = () => {

    const {cart,totalQuantity,setTotalQuantity,totalAmount,setTotalAmount} = useContext(AppContext)

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };

      const handleTotalAmount = () => {
        const newCart = [...cart]
        const eachAmount = newCart.map((item)=>item.amount)
        const totalAmount = eachAmount.reduce((prev,curr)=>prev+curr,0)
        setTotalAmount(totalAmount)
      }
    
      const handleTotalQuantity = () => {
        const newCart = [...cart]
        const eachQuantity = newCart.map((item)=>item.quantity)
        const totalQty = eachQuantity.reduce((prev,curr)=>prev+curr,0)
        setTotalQuantity(totalQty)
      }

      useEffect(()=>{
        handleTotalAmount()
        handleTotalQuantity()
      },[cart])


    return (
        <table className='border w-[500px] lg:w-[700px] h-max mt-5 rounded-xl p-5 flex flex-col items-stretch gap-5'>
          <h1 className='text-center font-bold text-[#E04132] text-3xl'>Summary</h1>

          <tr className='grid grid-cols-4 justify-items-center'>
              <th className='font-medium'>Product</th>
              <th className='font-medium'>Price(THB)</th>
              <th className='font-medium'>Quantity(pcs.)</th>
              <th className='font-medium'>Amount(THB)</th>
          </tr>

          {cart.map((item)=>{
            return ( 
              <tr className='grid grid-cols-4 justify-items-center' key={item._id}>
                <td className='text-gray-500'>{item.name}</td>
                <td className='text-gray-500'>{formatNumber(item.price)}</td>
                <td className='text-gray-500'>{item.quantity}</td>
                <td className='text-gray-500'>{formatNumber(item.amount)}</td>
              </tr>
          )})}

          <tr className='grid grid-cols-4 justify-items-center text-[#E04132] mt-5 border-b pb-2'>
            <td className='col-span-2 font-bold text-2xl'>Total</td>
            <td className='font-bold text-2xl'>{totalQuantity}</td>
            <td className='font-bold text-2xl'>{formatNumber(totalAmount)}</td>
          </tr>
        </table>

        
    )
}

export default ProductCartSummary