import React from 'react'
import UploadImage from '../components/UploadImage'
import Input from '../components/Input'
import Button from '../components/Button'
import { useContext } from 'react'
import { AppContext } from '../App'


const UploadProductPage = () => {

  const {products,setProducts} = useContext(AppContext)

  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-medium w-[90vw] pt-5'>Upload Product</h1>     
      <section className='flex flex-col justify-center items-center w-[75%]'>
        <UploadImage/>     
        <form className='flex flex-col gap-5 w-full py-5'>
          <Input title='Product name' type='text' placeholder='Product name' value={products.name} onChange={(e)=>{setProducts({...products,name:e.target.value})}}/>
          <Input title='Code' type='text' placeholder='Code' value={products.code} onChange={(e)=>{setProducts({...products,code:e.target.value})}}/>
          <Input title='Price' type='number' placeholder='1,000' value={products.price} onChange={(e)=>{setProducts({...products,price:e.target.value})}}/>
        </form>

        <div className='flex gap-5 p-10'>
          <Button textColor='#E13B30' bgColor='#FFFF' title='ยกเลิก'/>
          <Button textColor='#FFFF' bgColor='#E04132' title='ยืนยัน'/>
        </div>   
      </section>
    </main>
  )
}

export default UploadProductPage