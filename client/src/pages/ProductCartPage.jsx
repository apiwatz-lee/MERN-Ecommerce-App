import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const ProductCartPage = () => {

  const {cart,setCart} = useContext(AppContext)

  const handleAddQuantity = (id) => {
    const newCart = [...cart]
    const findProduct = newCart.find((product)=>product._id === id)
    findProduct.quantity++;
    findProduct.amount = findProduct.price * findProduct.quantity
    setCart(newCart)
  }

  const handleReduceQuantity = (id,index) => {
    const newCarts = [...cart];
    const findProduct = newCarts.find((product) => product._id === id);
    if (findProduct.quantity > 1) {
      findProduct.quantity--;
      findProduct.amount = findProduct.price * findProduct.quantity
    } else if (findProduct.quantity === 1) {
      newCarts.splice(index, 1);
    }
    setCart(newCarts);
  }


  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Product Cart</h1>   

        { cart.map((item,index)=>{
          return ( 
          
          <section className='border flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center w-[50vw] mt-5 rounded-xl p-5' key={item._id}>         

          <div className='flex flex-col justify-center items-center'>
            <img 
              className='w-full lg:w-52'
              src={item.avatars[0].url} alt="" />


            <div className='w-full lg:w-48 h-10 rounded-xl flex justify-center items-center border'>
              <button 
                className='border w-20 h-10 rounded-l-lg p-1'
                onClick={()=> handleReduceQuantity(item._id,index)}
                >-</button>
              <input 
                className='border w-28 h-10 p-1 outline-none text-center' 
                type="number" 
                placeholder='pcs' 
                value={item.quantity} 
                onChange={(e)=>setCart({...item,quantity:e.target.value})} />
              <button 
                className='border w-20 h-10 rounded-r-lg p-1'
                onClick={()=> handleAddQuantity(item._id)}
                >+</button>
            </div>
          </div>      
                   
          <div className='w-full pl-2 flex flex-col justify-center gap-2'>
            <h1 className=''>{item.name}</h1>
            <p className=''>{item.code}</p>
            <p className=''>{item.price}</p>
            <p className=''>{item.quantity}</p>
            <p className=' text-end'>{item.amount}</p>
          </div>


          </section>)
        })}     
    </main>
  )
}

export default ProductCartPage