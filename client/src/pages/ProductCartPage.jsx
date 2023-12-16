import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useState } from 'react'
import { useEffect } from 'react'

const ProductCartPage = () => {

  const {cart,setCart} = useContext(AppContext)
  const [totalAmount,setTotalAmount] = useState(0)
  const [totalQuantity,setTotalQuantity] = useState(0)

  // const [cart,setCart] = useState([
  //   {amount:10,
  //     avatars:[{publicId:'test',url:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}],
  //     code:'x-001',
  //     description:'the best',
  //     name:'Shoes',
  //     price:10,
  //     quantity:1,_id:'12342342'}
  //   ,
  //   {amount:20,
  //     avatars:[{publicId:'test',url:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}],
  //     code:'x-001',
  //     description:'the best',
  //     name:'Shoes',
  //     price:20,
  //     quantity:1,_id:'34234'}
  //   ,
  //   {amount:30,
  //     avatars:[{publicId:'test',url:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}],
  //     code:'x-001',
  //     description:'the best',
  //     name:'Shoes',
  //     price:30,
  //     quantity:1,_id:'342123123'}
  //   ,
  //   ])


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

  const handleDeleteProduct = (id) => {
    const newCart = [...cart]
    const deleteProduct = newCart.filter((item)=>item._id !== id)
    setCart(deleteProduct)
  }
  
  useEffect(()=>{
    handleTotalAmount()
    handleTotalQuantity()
  },[cart])

  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Product Cart</h1>   

        <section className='flex flex-row justify-center gap-5 w-[90vw]'>

          <div>
            {cart.map((item,index)=>{
              return ( 
                      <div className='relative border flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center w-[40vw] mt-5 rounded-xl p-5' key={item._id}>         

                        <div className='flex flex-col justify-center items-center'>
                          <img 
                            className='w-full h-36 object-cover'
                            src={item.avatars[0].url} alt="" />

                          <div className='w-full lg:w-48 h-10 rounded-xl flex justify-center items-center border'>
                            <button 
                              className='border w-20 h-10 rounded-l-lg p-1'
                              onClick={()=> handleReduceQuantity(item._id,index)}
                              >-
                              </button>
                            <input 
                              className='border w-28 h-10 p-1 outline-none text-center' 
                              type="number" 
                              placeholder='pcs' 
                              value={item.quantity} 
                              readOnly
                            />
                            <button 
                              className='border w-20 h-10 rounded-r-lg p-1'
                              onClick={()=> handleAddQuantity(item._id)}
                              >+
                              </button>
                          </div>
                        </div>      
                                
                        <div className='w-full pl-2 flex flex-col justify-center gap-2'>
                          <h1 className=''>PRODUCT: {item.name}</h1>
                          <p className=''>CODE: {item.code}</p>
                          <p className=''>PRICE: {item.price} per piece</p>
                          <p className=''>QTY:{item.quantity}</p>
                          <div className='w-full flex flex-col items-end'>
                            <p>TOTAL PRICE</p>
                            <p>{item.amount}</p>
                          </div>
                        </div>

                        <button 
                          className='absolute top-[-15px] right-[-10px] border p-1 w-8 h-8 rounded-full flex justify-center items-center bg-gray-200'
                          onClick={()=>handleDeleteProduct(item._id)}
                          >x</button>

                      </div>
                      )})} 
          </div>
     
          <div className='border w-[700px] max-h-[70vh] mt-5 rounded-xl p-5 flex flex-col gap-5'>
             <h1 className='text-center'>Summary</h1>

          
             <div className='grid grid-cols-4 justify-items-center'>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Total</span>
             </div>
             {cart.map((item)=>{
                return ( 
                <div className='grid grid-cols-4 justify-items-center' key={item._id}>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>{item.quantity}</span>
                <span>{item.amount}</span>
        
           </div>)
             })}

              <div className='grid grid-cols-4 justify-items-center'>
                <h3 className='col-start-2'>Total</h3>
                <h3>{totalQuantity}</h3>
                <p>{totalAmount}</p>
              </div>
          </div>

        </section>
        
    </main>
  )
}

export default ProductCartPage