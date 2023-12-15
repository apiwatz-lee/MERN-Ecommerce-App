import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const ProductInfo = ({productDetail,handlePreview,preview}) => {

  const {cart,setCart} = useContext(AppContext)

  const [piece,setPiece] = useState(1)

  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCart({...productDetail[0],piece:piece})
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleAddPiece = () => {
    setPiece((prev)=>prev+1)
  }

  const handleReducePiece = () => {
    if(piece > 1){
      setPiece((prev)=>prev-1)
    }
  }


  return (
    <>
        <section className='xl:w-[50%] flex flex-col-reverse xl:flex-col justify-center gap-5 xl:gap-5'>

          <div className='w-full xl:h-[320px] px-5 text-center xl:text-start flex flex-col justify-evenly'>
          
          <h1 className='w-full pt-5 xl:pt-0 font-bold text-3xl xl:text-5xl text-center'>{productDetail[0]?.name}</h1>
          <p className='text-gray-400'>{productDetail[0]?.code}</p>
          <p className='text-[#E04132] font-bold text-xl'>{productDetail[0]?.price && formatNumber(productDetail[0].price)} ฿</p>
          <p className='text-gray-800'>{productDetail[0]?.description}
          </p>

          <div className='w-full pb-10 xl:pb-0 mt-2 flex justify-center items-center gap-20 py-5'>
            <button 
              onClick={()=>handleAddToCart()}
              className='border p-3 rounded-xl w-36 text-white bg-[#E04132] hover:bg-orange-700 duration-300'> 
              Add to cart
            </button>

            <div className='w-48 h-10 rounded-xl flex justify-center items-center border'>
              <button 
                className='border w-20 h-10 rounded-l-lg p-1'
                onClick={()=> handleReducePiece()}
                >-</button>
              <input 
                className='border w-28 h-10 p-1 outline-none text-center' 
                type="number" 
                placeholder='pcs' 
                value={piece} 
                onChange={(e)=>setPiece(e.target.value)} />
              <button 
                className='border w-20 h-10 rounded-r-lg p-1'
                onClick={()=> handleAddPiece()}
                >+</button>
            </div>
          </div>

          </div>
      
        
          <div className='xl:px-5 grid grid-rows-2 grid-cols-3 gap-y-6 justify-items-center w-full h-auto mt-5'>
    
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

          </div>

        </section>
    </>
  )
}

export default ProductInfo