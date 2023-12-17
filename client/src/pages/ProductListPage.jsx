import React, { useEffect,useContext } from 'react'
import ProductList from '../components/ProductList';
import { useToast } from '@chakra-ui/react';
import { AppContext } from '../App';
import SearchBar from '../components/SearchBar';
import Navigator from '../components/Navigator';
import Loading from '../components/Loading';

const ProductListPage = () => {

  const {
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
    <>
      <Navigator/>
      <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
          <h1 className='text-3xl font-medium w-[90vw] pt-5'>Product list</h1>
          <SearchBar/>
          <ProductList/>
          <Loading/>
      </main>
    </>
  )
}

export default ProductListPage