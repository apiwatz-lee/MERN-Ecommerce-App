import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import { AppContext } from '../App';
import { jwtDecode } from 'jwt-decode';

export default function Navigator() {

    const location = useLocation();
    const {cart} = useContext(AppContext)
    const getToken = localStorage.getItem('token')
    const decodeToken = jwtDecode(getToken)
    const role = decodeToken.role
    let link;
 
    if(role === 'admin'){
        const path = [
            {id:1,name:'Product list',path:'/product',access:['user','admin']},
            {id:2,name:'Upload Products',path:'/product/upload',access:'admin'}
        ]
        link = path.map((item)=>{
            return <li key={item.id}>
                        <Link 
                        to={item.path} 
                        className={`text-[15px] sm:text-base text-center text-gray-500 hover:text-gray-800 duration-500 
                        ${location.pathname === item.path ? 'text-gray-950 font-bold sm:font-normal underline-offset-8 sm:bg-gray-100 sm:p-2 rounded-xl':null}`}>
                            {item.name}
                        </Link>
                    </li>
        })
    }else if(role === 'user'){
        const path = [
            {id:1,name:'Product list',path:'/product',access:['user','admin']}
        ]
        link = path.map((item)=>{
            return <li key={item.id}>
                        <Link 
                        to={item.path} 
                        className={`text-[15px] sm:text-base text-center text-gray-500 hover:text-gray-800 duration-500 
                        ${location.pathname === item.path ? 'text-gray-950 font-bold sm:font-normal underline-offset-8 sm:bg-gray-100 sm:p-2 rounded-xl':null}`}>
                            {item.name}
                        </Link>
                    </li>
        })
    }
   
    return (
        <nav className='flex justify-between lg:text-base items-center px-10 sm:px-20 mt-5'>
            <ul className='flex justify-center items-center gap-5 lg:p-3 h-16'>
                {link}
            </ul>

            <ul className={`relative flex justify-center items-center gap-5 p-3 ${location.pathname === '/product/cart' ? ' bg-gray-100 duration-500 p-3 rounded-full':null}`}>
                <Link to ='/product/cart'>
                    <FiShoppingCart className={`text-3xl text-gray-500 hover:text-gray-800 duration-500 cursor-pointer`}/>
                    {cart.length !== 0 && <span className='absolute border bg-[#E04132] text-white rounded-full w-5 h-5 text-center text-[12px] top-[-5px] right-1 flex justify-center items-center'>{cart.length}</span>}
                </Link>
            </ul>
        </nav>
    )
}
        