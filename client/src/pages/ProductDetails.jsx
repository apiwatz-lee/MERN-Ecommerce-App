import React from 'react'
import image from '../data'
import { useState } from 'react'
import { useEffect } from 'react'

const ProductDetails = () => {

  const [picture,setPicture] = useState('')
  const [heroPic,setHeroPic] = useState('')
 

  const previewPicture = (id) => {
    const copyImage = [...image]
    const findPicture = copyImage.find((image)=>
      image.id == id
    )
    setPicture(findPicture)
  }

  console.log(picture);
  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-start'>Product Details</h1>

        <section className='flex flex-col sm:flex-row justify-between w-[90vw]'>

              <div className='flex justify-center sm:w-[50%]'>
                  {picture ?   
                      <img 
                        src={picture.url}
                        alt="products" 
                        className='w-[95%] sm:h-[80vh] sm:w-full object-cover'
                      /> 
                    :
                      <img 
                        src={image[0].url}
                        alt="products" 
                        className='w-[95%] sm:h-[80vh] sm:w-full object-cover'
                      /> 
                  }
              </div>


              <div className='sm:w-[50%] flex flex-col justify-center gap-5 sm:gap-5'>
                  <h1 className='w-full px-10 pt-5 sm:pt-0 font-bold text-center text-xl sm:text-5xl'>Product Name</h1>
                  <p className='w-full px-10 text-center sm:text-start text-gray-400'>X-001</p>
                  <p className='w-full px-10 text-center sm:text-start'>Price</p>
                  <p className='w-full px-10 text-center sm:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Est temporibus asperiores eligendi, numquam consectetur vero optio architecto 
                  ex, magnam adipisci voluptatum magni exercitationem, quibusdam similique eius 
                  </p>
                  <div className='w-full px-10 pb-10 sm:pb-0 mt-2 flex justify-center items-center gap-20 py-5'>
                    <button className='border p-3 rounded-sm w-36 text-white bg-[#E04132]'> Add to cart</button>
                  </div>

                  {/* <div className='flex flex-col sm:flex-row justify-center items-center gap-6 px-10 py-10'> */}
                  <div className='grid grid-cols-3 gap-10 sm:gap-3 justify-items-center sm:grid-cols-6 px-10 sm:pt-10 mb-10'>
                  
                    { image.map((item)=>
                        <img 
                          key={item.id}
                          src={item.url} 
                          alt="test" 
                          className={`${!picture && item.id === 1 ? 'opacity-100' : picture?.id === item.id ?  'opacity-100' :'opacity-20'} w-[120px] h-[100px] sm:w-[170px] sm:h-[120px] rounded-xl object-cover cursor-pointer`}
                          onClick={()=>previewPicture(item.id)}
                      />)                               
                    }              
                  </div>
              
              </div>

      

        </section>
    </main>
  )
}

export default ProductDetails