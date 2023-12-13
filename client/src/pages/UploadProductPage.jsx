import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const UploadProductPage = () => {

  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [price,setPrice] = useState(0)
  const [avatars,setAvatars] = useState({})

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const uniqueId = Date.now();
    setAvatars({...avatars,[uniqueId]: e.target.files[0]})
  }

  const handleRemoveImage = (e,avatarKey) => {
    e.preventDefault();
    delete avatars[avatarKey];
    setAvatars({...avatars})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('execute suibmit function');

    const formData = new FormData();

    formData.append('name',setName);
    formData.append('code',setCode);
    formData.append('price',setPrice);
    
    for(let key in avatars){
      formData.append('avatar',avatars[key])
    }

    handleUpload(formData)
  }

  const handleUpload = async(formData) => {
    await axios.post('http://localhost:4000/upload',formData,{
      headers: {'Content-Type': 'multipart/form-data'},
    })
    navigate('/products');
  }



  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-medium w-[90vw] pt-5'>Upload Product</h1>     
      <section className='flex flex-col justify-center items-center w-[75%]'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full py-5'>

          <div>
              <label htmlFor='upload'>Upload Image</label>
              <input id='upload' name='avatar' type='file' onChange={handleFileChange} hidden/>

              {Object.keys(avatars).map((avatarKey)=>{
                const file = avatars[avatarKey]
                  return (
                    <div key={avatarKey}>
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      <button onClick={(e)=> handleRemoveImage(e,avatarKey)}>x</button>
                    </div>
                  )
              })}


          </div>


          <Input title='Product name' type='text' placeholder='Product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <Input title='Code' type='text' placeholder='Code' value={code} onChange={(e)=>{setCode(e.target.value)}}/>
          <Input title='Price' type='number' placeholder='1,000' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
     

          <div className='flex justify-center gap-5 p-10'>
            <Button type='reset' title='ยกเลิก'/>
            <Button type='submit' title='ยืนยัน'/>
          </div>   


        </form>

      </section>
    </main>
  )
}

export default UploadProductPage