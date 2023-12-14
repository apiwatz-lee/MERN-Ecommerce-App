import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react';

const ProductList = ({keyword}) => {

  const [products,setProducts] = useState([])
  
  const fetchProducts = async() => {

    try {
      const result = await axios.get(`http://localhost:4000/products?keyword=${keyword}`)
      setProducts(result.data)
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    const delayDebounceFn = setTimeout(()=>{
      fetchProducts()
    },500)

    return () => clearTimeout(delayDebounceFn)

  },[keyword])
  
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <main className='pb-10 pt-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-x-5 2xl-y-7 2xl:w-[1500px] grid-rows-3 gap-x-3 gap-y-5 xl:gap-x-5 xl:gap-y-7 justify-items-center'>
        {products.map((item)=>{
            return ( 
                    <section className='w-[230px] h-[350px] flex flex-col justify-between rounded-2xl shadow-xl hover:scale-105 cursor-pointer duration-300' key={item._id}>
                        <div>
                          <img src={item.avatars[0].url} alt={item.name} className='border h-[200px] rounded-t-2xl object-cover w-[300px]' />
                          <h1 className='w-full font-semibold pl-2 pt-2'>{item.name}</h1>
                          <p className='font-light text-sm text-gray-400 pl-2'>{item.code}</p>
                        </div>
                        <p className='text-right pb-4 pr-4 font-semibold text-[#E04132] text-lg'>{formatNumber(item.price)}</p>
                    </section>
        );
        })}
    </main>
  )
}

export default ProductList