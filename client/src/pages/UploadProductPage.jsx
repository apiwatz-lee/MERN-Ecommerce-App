import React, { useContext } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import ProductConfirmation from '../components/ProductConfirmation'
import { useDisclosure } from "@chakra-ui/react";
import Loading from '../components/Loading'
import { AppContext } from '../App'
import Dropzone from '../components/Dropzone'

const UploadProductPage = () => {

  const {name,
        setName,
        code,
        setCode,
        price,
        setPrice,
        avatars,
        isLoading,
        setIsLoading,
        isSubmit,
        setIsSubmit,
        setIsCompleted,
        setErrorMessage} = useContext(AppContext)

  const {onClose} = useDisclosure();

  const navigate = useNavigate();

  const handleValidate = () => {
    if(name === ''){
      setErrorMessage({name:'Product name is required'})
    }else if(code === ''){
      setErrorMessage({code:'Code is required'})
    }else if(price === undefined){
      setErrorMessage({price:'Price is required'})
    }else if(price.toString().charAt(0) == 0){
      setErrorMessage({price:'Price cannot start with 0'})
    }else{
      setErrorMessage(null)
      setIsSubmit(true)
    }
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(false)
    setIsLoading(true)
    setIsCompleted(false)
    const formData = new FormData();
    formData.append('name',name);
    formData.append('code',code);
    formData.append('price',price);
    avatars.forEach((file)=>formData.append('avatar',file))
    handleUpload(formData)
  }

  const handleUpload = async(formData) => {
      await axios.post('http://localhost:4000/upload',formData,{
      headers: {'Content-Type': 'multipart/form-data'},
    })
      setIsLoading(false)
      navigate('/products');
      setIsCompleted(true)
  }

  const handleCancel = () => {
    onClose();
    setIsSubmit(false)
  }
      
  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>

      <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Upload Product</h1>     

      <section className='flex flex-col justify-center items-center w-[75%]'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full py-5'>
          <h2 className='text-gray-700 text-lg text-center sm:text-left'>Upload Image</h2>

          <Dropzone/>
          
          <h3 className='text-center sm:text-right text-gray-400 text-sm font-light'>Image Upload ({avatars.length}/6)</h3>

          <Input 
            id='name' 
            title='Product name' 
            type='text' 
            placeholder='Product name' 
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}/>
          <Input 
            id='code' 
            title='Code' 
            type='text' 
            placeholder='Code' 
            value={code} 
            onChange={(e)=>{setCode(e.target.value)}}/>
          <Input 
            id='price' 
            title='Price' 
            type='number' 
            placeholder='1,000' 
            value={price} 
            onChange={(e)=>{setPrice(e.target.value)}}/>
     
          <div className='flex justify-center gap-5 py-5 sm:p-10'>
            <Button 
              className='border p-3 rounded-full w-28 sm:w-56 bg-white text-[#E04132] hover:bg-gray-200 hover:text-black duration-300' 
              type='reset' 
              title='ยกเลิก' 
              onClick={()=>navigate('/products')}/>
            <Button 
              className='border p-3 rounded-full w-28 sm:w-56 text-white bg-[#E04132] hover:bg-orange-700 duration-300' 
              type='button' 
              title='ยืนยัน' 
              onClick={handleValidate}/>
          </div>   

        </form>

        <ProductConfirmation
        handleSubmit={handleSubmit}
        isSubmit={isSubmit}
        handleCancel={handleCancel}
        />

        <Loading
          isLoading={isLoading}
        />

      </section>

    </main>
  )
}

export default UploadProductPage