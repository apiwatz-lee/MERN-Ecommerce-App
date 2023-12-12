import React from 'react'
import products from '../data/products';

const ProductList = () => {

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <main className='pb-10 pt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-x-5 2xl-y-7 2xl:w-[1500px] grid-rows-3 gap-x-3 gap-y-5 xl:gap-x-5 xl:gap-y-7 justify-items-center'>

            {products.map((item)=>{
                return ( 
                        <section className='border w-[230px] h-[350px] flex flex-col justify-between rounded-2xl shadow-xl' key={item.code}>
                            <div>
                              <img src={item.image} alt={item.name} className='h-[200px] rounded-t-2xl object-cover w-[300px]' />
                              <h1 className='pl-4 pt-4 font-semibold'>{item.name}<br/>
                                  <span className='font-light text-sm text-gray-400'>code</span>
                              </h1>
                            </div>
                            <p className='text-right pb-4 pr-4 font-semibold text-orange-600 text-lg'>{formatNumber(item.price)}</p>
                        </section>
            );
            })}

    </main>
  )
}

export default ProductList