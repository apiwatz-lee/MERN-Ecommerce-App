import React, { useEffect,useContext } from 'react'
import ProductList from '../components/ProductList';
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { useToast } from '@chakra-ui/react';
import { AppContext } from '../App';

const ProductListPage = () => {

  const {keyword,setKeyword,isCompleted,setIsCompleted,setName,setCode,setPrice,setAvatars} = useContext(AppContext)

  const toast = useToast()

  useEffect(()=>{

    if(isCompleted){
        toast({
          title: 'Product Uplaoded.',
          description: "Product have been created successfully",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position:'top'
        })
    }
    
      setIsCompleted(false)
      setName('')
      setCode('')
      setPrice()
      setAvatars([])
      
  },[])
  

  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5'>Product list</h1>

        <div className='relative'>
          <input 
            type="text" 
            className='border w-[90vw] h-14 rounded-full pl-14 outline-none placeholder:text-gray-400 placeholder:font-light text-gray-500'
            placeholder='Name, Catalogue, Code'
            value={keyword}
            onChange={(e)=>{setKeyword(e.target.value)}}
            />
            
            <PiMagnifyingGlassThin className='absolute top-[18px] left-[30px] text-xl text-gray-400'/>
        </div>

        <ProductList keyword={keyword}/>
    </main>
  )
}

export default ProductListPage