import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import ProductCartList from '../components/ProductCartList'
import ProductCartSummary from '../components/ProductCartSummary'
import Navigator from '../components/Navigator'

const ProductCartPage = () => {

  const {cart} = useContext(AppContext)
 
  return (
    <>
      <Navigator/>
      <main className='font-poppins w-screen flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-medium w-[90vw] pt-5 text-center sm:text-left'>Product Cart</h1>

        {cart.length === 0 ?
          <section className='w-full h-[70vh] flex justify-center items-center'>
            <p className='text-5xl text-[#E04132]'>Your cart is empty</p>
          </section>
        :
          <section className='flex flex-col justify-center items-center lg:items-start lg:flex-row gap-5 w-[90vw] pb-10'>
            <ProductCartList/>
            <ProductCartSummary/>
          </section>
        }
        
      </main>
    </>
  )
}

export default ProductCartPage