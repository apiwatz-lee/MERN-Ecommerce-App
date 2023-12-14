import React, { useContext } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import ProductConfirmation from '../components/ProductConfirmation'
import Loading from '../components/Loading'
import { AppContext } from '../App'
import Form from '../components/Form'

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
      await axios.post('http://localhost:4000/product/upload',formData,{
      headers: {'Content-Type': 'multipart/form-data'},
    })
      setIsLoading(false)
      navigate('/product');
      setIsCompleted(true)
  }

  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Upload Product</h1>     
      <section className='flex flex-col justify-center items-center w-[75%]'>
        <Form/>
        <ProductConfirmation
          handleSubmit={handleSubmit}
        />
        <Loading/>
      </section>
    </main>
  )
}

export default UploadProductPage