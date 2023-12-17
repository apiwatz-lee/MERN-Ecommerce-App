import React, { useContext } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import ProductConfirmation from '../components/ProductConfirmation'
import Loading from '../components/Loading'
import { AppContext } from '../App'
import Form from '../components/Form'
import Navigator from '../components/Navigator'
import { useDisclosure } from "@chakra-ui/react";

const UploadProductPage = () => {

  const {name,
        code,
        price,
        description,
        avatars,
        setIsLoading,
        setIsSubmit,
        setIsCompleted} = useContext(AppContext)

  const navigate = useNavigate();
  const {isOpen:isUploadOpen,onOpen:onUploadOpen,onClose:onUploadClose} = useDisclosure();
  const message = {
    header:'Upload Product Confirmation',
    description:'Are you sure you want to proceed ?',
    cancel:'Cancel',
    corect:'Confirm!'
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
    formData.append('description',description);
    avatars.forEach((file)=>formData.append('avatar',file))
    handleUpload(formData)
  }

  const handleUpload = async(formData) => {
      await axios.post('https://xsurface-test-app.onrender.com/product/upload',formData,{
      headers: {'Content-Type': 'multipart/form-data'},
    })
      setIsLoading(false)
      navigate('/product');
      setIsCompleted(true)
  }

  return (
    <>
      <Navigator/>
      <main className='font-poppins w-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Upload Product</h1>     
        <section className='flex flex-col justify-center items-center w-[75%]'>
          <Form/>
          <ProductConfirmation
            handleSubmit={handleSubmit}
            isOpen={isUploadOpen}
            onOpen={onUploadOpen}
            onClose={onUploadClose}
            message={message}
          />
          <Loading/>
        </section>
      </main>
    </>
  )
}

export default UploadProductPage