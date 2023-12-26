import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../App';
import { jwtDecode } from 'jwt-decode';

const PayButton = () => {

    const {cart} = useContext(AppContext)
    const server = import.meta.env.VITE_API
    const token = localStorage.getItem('token')
    const deToken = jwtDecode(token)
    const userId = deToken.userId

    const handleCheckout = async() => {
        try {
            const res = await axios.post(`${server}/stripe/create-checkout-session`,{cart,userId:userId})
            if(res.data.url){
                window.open(res.data.url)
            }
        } catch (error) {
            console.log(error);
        }
     
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