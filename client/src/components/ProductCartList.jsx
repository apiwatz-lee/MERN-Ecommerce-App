import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { AppContext } from '../App'

const ProductCartList = () => {

    const {cart,setCart} = useContext(AppContext)

    const handleAddQuantity = (id) => {
        const newCart = [...cart]
        const findProduct = newCart.find((product)=>product._id === id)
        findProduct.quantity++;
        findProduct.amount = findProduct.price * findProduct.quantity
        setCart(newCart)
      }
    
    const handleReduceQuantity = (id,index) => {
        const newCart = [...cart];
        const findProduct = newCart.find((product) => product._id === id);
        if (findProduct.quantity > 1) {
          findProduct.quantity--;
          findProduct.amount = findProduct.price * findProduct.quantity
        } else if (findProduct.quantity === 1) {
          newCart.splice(index, 1);
        }
        setCart(newCart);
      }
     
    const handleDeleteProduct = (id) => {
        const newCart = [...cart]
        const deleteProduct = newCart.filter((item)=>item._id !== id)
        setCart(deleteProduct)
      }

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      };

 

    return (
        <div> 
            {cart.map((item,index)=>{
              return ( 
                <div className='relative border flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center w-[40vw] mt-5 rounded-xl p-5' key={item._id}>
                           
                  <div className='flex flex-col justify-center items-center gap-5'>
                      <img className='w-full h-36 rounded-lg object-cover' src={item.avatars[0].url} alt={item.name} />
                      <div className='w-full lg:w-48 h-10 rounded-xl flex justify-center items-center border'>
                        <Button
                            className='border w-20 h-10 rounded-l-lg p-1'
                            onClick={()=> handleReduceQuantity(item._id,index)}
                            title='-'
                            />
                        <input 
                            className='border w-28 h-10 p-1 outline-none text-center' 
                            type="number" 
                            placeholder='pcs' 
                            value={item.quantity} 
                            readOnly
                        />
                        <Button
                            className='border w-20 h-10 rounded-l-lg p-1'
                            onClick={()=> handleAddQuantity(item._id)}
                            title='+'
                            />
                      </div>
                  </div>      
                          
                  <div className='w-full pl-8 flex flex-col justify-center gap-2'>
                      <h1 className='font-medium'>Product: <span className='text-gray-500 font-normal'>{item.name}</span></h1>
                      <p className='font-medium'>Code: <span className='text-gray-500 font-normal'>{item.code}</span></p>
                      <p className='font-medium'>Price: <span className='text-gray-500 font-normal'>{formatNumber(item.price)} </span> <span className='text-gray-500 font-normal'>per piece</span></p>
                      <p className='font-medium'>Qty: <span className='text-gray-500 font-normal'>{item.quantity}</span></p>
                      <div className='w-full flex flex-col items-end'>
                        <p className='font-medium'>Amount(THB)</p>
                        <p className='text-gray-500'>{formatNumber(item.amount)} ฿</p>
                      </div>
                  </div>
                  
                  <Button
                    className='absolute top-[-15px] right-[-10px] border p-1 w-8 h-8 rounded-full flex justify-center items-center bg-[#E04132] text-white'
                    onClick={()=>handleDeleteProduct(item._id)}
                    title='x'
                  />
                </div>
            )})}
        </div>
  )
}

export default ProductCartList