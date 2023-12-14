import React from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function Navigator() {

    const location = useLocation();
 
    const path = [
        {id:1,name:'Product list',path:'/product'},
        {id:2,name:'Product Details',path:'/product/detail'},
        {id:3,name:'Upload Products',path:'/product/upload'}
    ]

    const link = path.map((item)=>{
        return <Link 
                    to={item.path} 
                    key={item.id} 
                    className={`text-gray-500 hover:text-gray-800 duration-500 
                            ${location.pathname === item.path ? 'text-gray-950 underline-offset-8 bg-gray-100 p-2 rounded-xl':null}`}>{item.name}</Link>
    })

    return (
        <nav className='flex justify-between items-center'>
            <ul className='flex justify-center items-center gap-5 p-3 text-gray-900 w-[515px]'>
                {link}
            </ul>

            <ul className='flex justify-center items-center gap-5 p-3 text-gray-900 w-[200px]'>
                cart
            </ul>
        </nav>
    )
}
        