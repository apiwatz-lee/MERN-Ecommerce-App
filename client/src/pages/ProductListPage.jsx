import React, { useState } from 'react'
import ProductList from '../components/ProductList';
import { PiMagnifyingGlassThin } from "react-icons/pi";

const ProductListPage = () => {

  const [keyword,setKeyword] = useState('')

  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5'>Product list</h1>
        <span className='relative'>
          <input 
            type="text" 
            className='border w-[90vw] h-14 rounded-full pl-14 outline-none placeholder:text-gray-400 placeholder:font-light text-gray-500'
            placeholder='Name, Catalogue, Code'
            value={keyword}
            onChange={(e)=>{setKeyword(e.target.value)}}
            />
            <PiMagnifyingGlassThin className='absolute top-[18px] left-[30px] text-xl text-gray-400'/>
        </span>
        <ProductList/>
    </main>
  )
}

export default ProductListPage