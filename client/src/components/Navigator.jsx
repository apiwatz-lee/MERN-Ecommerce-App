import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigator() {
 
    const path = [
        {id:1,name:'Product list',path:'/products'},
        {id:2,name:'Upload Products',path:'/upload'}
    ]

    const link = path.map((item)=>{
        return <Link to={item.path} key={item.id} className='text-gray-500 hover:text-gray-800 duration-500'>{item.name}</Link>
    })

    return (
        <nav className='mt-2'>
            <ul className='flex justify-center items-center gap-5 p-3'>
                {link}
            </ul>
        </nav>
    )
}
        