import React, { useState,useCallback } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { useDropzone} from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

const UploadProductPage = () => {

  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [price,setPrice] = useState()
  const [avatars,setAvatars] = useState([])

  const navigate = useNavigate();

  const handleRemoveImage = (e,id) => {
    e.preventDefault();
    const copyAvatars = [...avatars]
    const updateAvatars = copyAvatars.filter(avatar => avatar.id !== id)
    setAvatars(updateAvatars)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
    navigate('/products');
  }
      
  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length){
      setAvatars(prev => [...prev,...acceptedFiles.map(file => Object.assign(file,{id:uuidv4(),preview: URL.createObjectURL(file)}))])
    }
  }, []) 
  
  const {fileRejections,getRootProps, getInputProps, isDragActive,isDragReject} = useDropzone({
    onDrop,
    minSize:0,
    maxSize:50 * 1024 * 1024,
    multiple:false,
    accept:{'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'] }, 
    })

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
    return (
      <li key={file.path}>
           {file.path} - {file.size} bytes
           <ul>
             {errors.map(e => <li key={e.code}>{e.message}</li>)}
          </ul>
      </li>
    ) 
   });

  

  return (
    <main className='font-poppins w-screen flex flex-col items-center gap-5'>
      <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Upload Product</h1>     
      <section className='flex flex-col justify-center items-center w-[75%]'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full py-5'>
          <h2 className='text-gray-700 text-lg text-center sm:text-left'>Upload Image</h2>

          {avatars.length < 6 &&
             <div {...getRootProps()} className={`border-2 border-dashed flex flex-col justify-center items-center min-h-[40vh] rounded-2xl ${isDragActive && !isDragReject ? 'border-green-500':isDragReject ? 'border-red-500':null}`}>
          
             <input {...getInputProps()}/>
             {isDragActive && !isDragReject && <p className='font-bold text-3xl text-green-800'>"Drop it like it's hot!" 🥳</p>}

             {!isDragActive && 
              <label htmlFor='upload' className='flex flex-col justify-center items-center gap-4'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                     <path fillRule="evenodd" clipRule="evenodd" d="M6.9784 8.92341C7.5166 8.92341 7.9534 9.36533 7.9534 9.90984C7.9534 10.4543 7.5166 10.8963 6.9784 10.8963H5.7655C3.6608 10.8963 1.95 12.6271 1.95 14.7552V21.1669C1.95 23.2963 3.6608 25.0271 5.7655 25.0271H20.2345C22.3379 25.0271 24.05 23.2963 24.05 21.1669V14.7433C24.05 12.6219 22.3444 10.8963 20.2488 10.8963H19.0229C18.4847 10.8963 18.0479 10.4543 18.0479 9.90984C18.0479 9.36533 18.4847 8.92341 19.0229 8.92341H20.2488C23.4195 8.92341 26 11.5342 26 14.7433V21.1669C26 24.384 23.413 27 20.2345 27H5.7655C2.587 27 0 24.384 0 21.1669V14.7552C0 11.5394 2.587 8.92341 5.7655 8.92341H6.9784ZM13.6898 0.279159L17.4806 4.13017C17.8602 4.51685 17.8589 5.14027 17.478 5.52432C17.0958 5.90837 16.4796 5.90836 16.1 5.52169L13.9737 3.36306L13.9745 17.7972H12.0245L12.0237 3.36306L9.90028 5.52169C9.71048 5.71634 9.45958 5.81235 9.20998 5.81235C8.96168 5.81235 8.71208 5.71634 8.52228 5.52432C8.14138 5.14027 8.13878 4.51685 8.51968 4.13017L12.3092 0.279159C12.6745 -0.0930529 13.3245 -0.0930529 13.6898 0.279159Z" fill="#6C6C70"/>
                 </svg>
                 <p className='font-light text-gray-500 text-center'>Drag & Drop or <span className='text-blue-500 underline cursor-pointer'>Choose file</span> to upload</p>
                 <p className='font-extralight text-sm text-gray-400 text-center'>JPG. or PNG Maximum file size 50MB</p>
               </label>}   

             {isDragReject && <p className='font-bold text-3xl text-red-800 text-center'>😯 Oh! You can drag one image at a time, <br/> and the uploaded files must be in JPG or PNG format.</p>}
               
             </div>
          }
         

          <div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10'>
            {avatars.map((file)=>{
                return (
                <div key={file.id} className='relative flex flex-col justify-center items-center w-32'>
                  <img src={file.preview} alt={file.name} className='w-32 h-32 rounded-2xl object-cover'/>
                  <button onClick={(e)=> handleRemoveImage(e,file.id)} className='absolute top-[-10px] right-[-10px] rounded-full bg-[#E04132] text-white w-8 h-8'>x</button>
                </div>);
            })}
          </div>

            {fileRejectionItems.length > 0 && (
              <div className='text-red-500'>
                <h4>Rejected Files:</h4>
                <ul>{fileRejectionItems}</ul>
              </div>
            )}
          
    
          <h3 className='text-center sm:text-right text-gray-400 text-sm font-light'>Image Upload ({avatars.length}/6)</h3>

          <Input title='Product name' type='text' placeholder='Product name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <Input title='Code' type='text' placeholder='Code' value={code} onChange={(e)=>{setCode(e.target.value)}}/>
          <Input title='Price' type='number' placeholder='1,000' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
     
          <div className='flex justify-center gap-5 py-5 sm:p-10'>
            <Button type='reset' title='ยกเลิก' onClick={()=>navigate('/products')}/>
            <Button type='submit' title='ยืนยัน' onClick={handleSubmit}/>
          </div>   

          

        </form>

      </section>
    </main>
  )
}

export default UploadProductPage