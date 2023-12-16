import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import {useNavigate} from 'react-router-dom'

const ProductInfo = ({productDetail,handlePreview,preview}) => {

  const {cart,setCart} = useContext(AppContext)

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const newCart = [...cart]
    const productExist = newCart.some((item)=>item._id === productDetail[0]._id)
    if(productExist){
      const findProduct = newCart.find((item)=>item._id === productDetail[0]._id)
      findProduct.quantity++
      setCart(newCart)
    }else{
      setCart([...cart,{...productDetail[0],quantity:1,amount:productDetail[0].price}]) 
    }
   
    navigate('/product/cart')
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <>
        <main className='xl:w-[50%] flex flex-col-reverse xl:flex-col justify-center gap-12'>

          <section className='w-full xl:h-[320px] px-5 text-center xl:text-start flex flex-col justify-evenly'>
            <h1 className='w-full pt-5 xl:pt-0 font-bold text-3xl xl:text-5xl text-center'>{productDetail[0]?.name}</h1>
            <p className='text-gray-400'>{productDetail[0]?.code}</p>
            <p className='text-[#E04132] font-bold text-xl'>{productDetail[0]?.price && formatNumber(productDetail[0].price)} ฿</p>
            <p className='text-gray-800'>{productDetail[0]?.description}</p>
            <div className='w-full pb-10 xl:pb-0 mt-2 flex justify-center items-center gap-20 py-5'>
              <button 
                onClick={()=>handleAddToCart()}
                className='border p-3 rounded-xl w-36 text-white bg-[#E04132] hover:bg-orange-700 duration-300'> 
                Add to cart
              </button>
            </div>
          </section>
      
          {/* <section className='xl:px-5 grid grid-rows-2 grid-cols-3 gap-y-6 justify-items-center w-full h-auto mt-5'>
            { preview.length !== 0 ?                 
              productDetail[0]?.avatars?.map((item)=> 
                <img 
                  key={item.publicId}
                  src={item.url} 
                  alt="products" 
                  className={`${item.publicId === preview[0].publicId ? 'opacity-100' : 'opacity-20'} 
                  w-[90px] h-[80px] sm:w-[140px] sm:h-[120px] md:w-[180px] md:h-[160px] lg:w-[220px] lg:h-[200px] xl:w-[140px] xl:h-[100px] 2xl:w-[180px] 2xl:h-[170px] 
                  rounded-xl object-cover cursor-pointer border`}
                  onMouseOver={()=>handlePreview(item.publicId)}
              />)
              :
              productDetail[0]?.avatars.map((item)=> 
                <img 
                  key={item.publicId}
                  src={item.url} 
                  alt="products" 
                  className={`${item.publicId === productDetail[0].avatars[0].publicId ? 'opacity-100' : 'opacity-20'} 
                  w-[90px] h-[80px] sm:w-[140px] sm:h-[120px] md:w-[180px] md:h-[160px] lg:w-[220px] lg:h-[200px] xl:w-[140px] xl:h-[100px] 2xl:w-[180px] 2xl:h-[170px] 
                  rounded-xl object-cover cursor-pointer border`}
                  onMouseOver={()=>handlePreview(item.publicId)}
              />)                               
            }              
          </section> */}

          <section className='flex flex-wrap justify-center gap-3 px-5'>
            { preview.length !== 0 ?                 
              productDetail[0]?.avatars?.map((item)=> 
                <img 
                  key={item.publicId}
                  src={item.url} 
                  alt="products" 
                  className={`${item.publicId === preview[0].publicId ? 'opacity-100' : 'opacity-20'} object-cover w-16 sm:w-20 rounded-xl`}
                  onMouseOver={()=>handlePreview(item.publicId)}
              />)
              :
              productDetail[0]?.avatars.map((item)=> 
                <img 
                  key={item.publicId}
                  src={item.url} 
                  alt="products" 
                  className={`${item.publicId === productDetail[0].avatars[0].publicId ? 'opacity-100' : 'opacity-20'} object-cover w-16 sm:w-20 rounded-xl`}
                  onMouseOver={()=>handlePreview(item.publicId)}
              />)                               
            }              
          </section>

        </main>
    </>
  )
}

export default ProductInfo