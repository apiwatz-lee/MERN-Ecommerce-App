import React from 'react';
import {Link, useLocation} from 'react-router-dom'

export default function Navigator() {

    const location = useLocation();
 
    const path = [
        {id:1,name:'Product list',path:'/products'},
        {id:2,name:'Upload Products',path:'/upload'}
    ]

    const link = path.map((item)=>{
        return <Link 
                    to={item.path} 
                    key={item.id} 
                    className={`text-gray-500 hover:text-gray-800 duration-500 
                            ${location.pathname === item.path ? 'text-gray-950 underline-offset-8 bg-gray-100 p-2 rounded-xl':null}`}>{item.name}</Link>
    })

    return (
        <nav className='mt-2'>
            <ul className='flex justify-center items-center gap-5 p-3 group text-gray-900'>
                {link}
            </ul>
        </nav>
    )
}
        