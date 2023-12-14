import React from 'react'
import image from '../data'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const ProductDetails = () => {

  const [picture,setPicture] = useState('')
  const [productDetail,setProductDetail] = useState([])
  const [preview,setPreview] = useState([])

  const params = useParams();
  
 
  const previewPicture = (id) => {
    console.log(id);
    const previewImg = productDetail[0].avatars.filter((avatar)=>
    avatar.publicId === id)
    setPreview(previewImg)
  }

  console.log(preview);

 

  const getProductById = async() => {
    try {
      const response = await axios.get(`http://localhost:4000/product/${params.id}`)
      setProductDetail(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProductById()
  },[])

 console.log(productDetail);

  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-start'>Product Details</h1>

        <section className='flex flex-col sm:flex-row justify-between w-[90vw]'>


              <div className='flex justify-center sm:w-[50%]'>

                {
                preview && productDetail ?

                <img 
                  src={previewPicture[0]?.url}
                  alt="products" 
                  className='w-[95%] sm:h-[80vh] sm:w-full object-cover'
                /> : productDetail ?   
                <img 
                  src={productDetail[0]?.avatars[0]?.url }
                  alt="products" 
                  className='w-[95%] sm:h-[80vh] sm:w-full object-cover'
                />  
                  : null
                }
              </div>
         

              <div className='sm:w-[50%] flex flex-col justify-center gap-5 sm:gap-5'>
                  <h1 className='w-full px-10 pt-5 sm:pt-0 font-bold text-center text-xl sm:text-5xl'>{productDetail[0]?.name}</h1>
                  <p className='w-full px-10 text-center sm:text-start text-gray-400'>{productDetail[0]?.code}</p>
                  <p className='w-full px-10 text-center sm:text-start'>{productDetail[0]?.price}</p>
                  <p className='w-full px-10 text-center sm:text-start'>{productDetail[0]?.description}
                  </p>
                  <div className='w-full px-10 pb-10 sm:pb-0 mt-2 flex justify-center items-center gap-20 py-5'>
                    <button className='border p-3 rounded-sm w-36 text-white bg-[#E04132]'> Add to cart</button>
                  </div>

              
                  <div className='grid grid-cols-3 gap-10 sm:gap-3 justify-items-center sm:grid-cols-6 px-10 sm:pt-10 mb-10'>
                  
                    { productDetail[0]?.avatars.map((item,index)=> 
                        
                        index > 1 &&
                        <img 
                          key={item.publicId}
                          src={item.url} 
                          alt="products" 
                          className={`w-[120px] h-[100px] sm:w-[170px] sm:h-[120px] rounded-xl object-cover cursor-pointer`}
                          onClick={()=>previewPicture(item.publicId)}
                      />
                      )                               
                    }              
                  </div>
              
              </div>

      

        </section>
    </main>
  )
}

export default ProductDetails