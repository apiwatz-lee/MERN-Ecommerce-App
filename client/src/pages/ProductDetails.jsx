import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

  const [productDetail,setProductDetail] = useState([])
  const [preview,setPreview] = useState([])
  const params = useParams();
  
  const handlePreview = (id) => {
    const previewImg = productDetail[0].avatars.filter((avatar)=> avatar.publicId === id)
    setPreview(previewImg)
  }

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

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <main className='font-poppins w-screen h-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center xl:text-start'>Product Details</h1>

        <section className='flex flex-col xl:flex-row justify-between w-[90vw]'>

          <div className='flex justify-center xl:w-[50%]'>
            
              {preview.length === 0 ?

              <img 
              src={productDetail[0]?.avatars[0].url}
              alt="products" 
              className='w-[95%] xl:h-[80vh] xl:w-full object-cover'
              />                          

              :
              
              <img 
              src={preview[0].url}
              alt="products" 
              className='w-[95%] xl:h-[80vh] xl:w-full object-cover'
              />  
                
              }
                          
          </div>
         

          <div className='xl:w-[50%] flex flex-col justify-center gap-5 xl:gap-5'>
              <h1 className='w-full px-10 pt-5 xl:pt-0 font-bold text-center text-xl xl:text-5xl'>{productDetail[0]?.name}</h1>
              <p className='w-full px-10 text-center xl:text-start text-gray-400'>{productDetail[0]?.code}</p>
              <p className='w-full px-10 text-center xl:text-start text-gray-600'>{productDetail[0]?.price && formatNumber(productDetail[0].price)} ฿</p>
              <p className='w-full px-10 text-center xl:text-start'>{productDetail[0]?.description}
              </p>
              <div className='w-full px-10 pb-10 xl:pb-0 mt-2 flex justify-center items-center gap-20 py-5'>
                <button className='border p-3 rounded-xl w-36 text-white bg-[#E04132]'> Add to cart</button>
              </div>
          
            
              <div className='px-10 grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-5'>
        
                { preview.length !== 0 ?                 
                  productDetail[0]?.avatars?.map((item)=> 
                    <img 
                      key={item.publicId}
                      src={item.url} 
                      alt="products" 
                      className={`${item.publicId === preview[0].publicId ? 'opacity-100' : 'opacity-20'} 
                      w-[200px] h-[150px] xl:w-[140px] xl:h-[100px] 2xl:w-[160px] 2xl:h-[110px] rounded-xl object-cover cursor-pointer`}
                      onClick={()=>handlePreview(item.publicId)}
                  />)
                  :
                  
                  productDetail[0]?.avatars.map((item)=> 
                    <img 
                      key={item.publicId}
                      src={item.url} 
                      alt="products" 
                      className={`${item.publicId === productDetail[0].avatars[0].publicId ? 'opacity-100' : 'opacity-20'} 
                      w-[200px] h-[150px] xl:w-[140px] xl:h-[100px] 2xl:w-[160px] 2xl:h-[110px] rounded-xl object-cover cursor-pointer`}
                      onClick={()=>handlePreview(item.publicId)}
                  />)                               
                }              

              </div>
          </div>

        </section>
    </main>
  )
}

export default ProductDetails