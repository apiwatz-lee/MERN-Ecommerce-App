import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../App';

const PayButton = () => {

    const {cart} = useContext(AppContext)

    const handleCheckout = () => {
        console.log(cart);
    }

    return (
        <div className='w-full flex justify-end'>
            <button 
                className='bg-gray-100 text-gray-500 w-32 h-10 rounded-xl'
                type='button'
                onClick={()=>handleCheckout()}>Checkout</button>
        </div>
    )
}

export default PayButton