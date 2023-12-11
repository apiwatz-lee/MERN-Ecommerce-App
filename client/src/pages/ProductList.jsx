import React from 'react'
import products from '../data/products';

const ProductList = () => {

  console.log(products);
  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-8'>Product list</h1>
        <input 
          type="text" 
          className='border w-[90vw] rounded-full p-4 outline-none placeholder:text-gray-300'
          placeholder='Name, Catalogue, Code'
          />

          <section className='border w-[85vw] h-[80vh] flex justify-center items-center flex-wrap gap-x-3 gap-y-5'>

     
              {products.map((item,index)=>{
                return ( 
                 
                    <div className='border w-[230px] h-[280px] flex flex-col justify-between rounded-2xl'>
                      <img src={products[0].image} alt={products[0].name} className='border h-[170px] rounded-t-2xl' />
                      <h1 className='pl-2 font-semibold'>{products[0].name}<br/>
                        <span className='font-light text-sm text-gray-400'>code</span>
                      </h1>
                      <p className='text-right pr-2 h-10'>฿1,000</p>
                    </div>
            
                );
              })}
          
           

          </section>
    </main>
  )
}

export default ProductList