import React, { useEffect,useContext } from 'react'
import ProductList from '../components/ProductList';
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { useToast } from '@chakra-ui/react';
import { AppContext } from '../App';
import SearchBar from '../components/SearchBar';

const ProductListPage = () => {

  const {keyword,
        isCompleted,
        setIsCompleted,
        setName,
        setCode,
        setPrice,
        setDescription,
        setAvatars} = useContext(AppContext)

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
      setPrice('')
      setDescription('')
      setAvatars([])
      
  },[])
  

  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5'>Product list</h1>
        <SearchBar/>
        <ProductList keyword={keyword}/>
    </main>
  )
}

export default ProductListPage