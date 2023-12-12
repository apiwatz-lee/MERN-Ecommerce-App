import React from 'react'
import UploadImage from '../components/UploadImage'
import Input from '../components/Input'
import Button from '../components/Button'


const UploadProductPage = () => {
  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-medium w-[90vw] pt-5'>Upload Product</h1>     
      <section className='flex flex-col justify-center items-center w-[75%]'>
        <UploadImage/>     
        <form className='flex flex-col gap-5 w-full py-5'>
          <Input title='Product name' placeholder='Product name'/>
          <Input title='Code' placeholder='Code'/>
          <Input title='Price' placeholder='1,000'/>
        </form>

        <div className='flex gap-5 p-10'>
          {/* <button className='border p-3 rounded-full w-28 lg:w-56 text-[#E13B30]'>ยกเลิก</button>
          <button className='border p-3 rounded-full w-28 lg:w-56 bg-[#E04132] text-white'>ยืนยัน</button> */}
          <Button textColor='#E13B30' bgColor='#FFFF' title='ยกเลิก'/>
          <Button textColor='#FFFF' bgColor='#E04132' title='ยืนยัน'/>
        </div>

     
      </section>
    </main>
  )
}

export default UploadProductPage