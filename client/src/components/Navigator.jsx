import React from 'react';
// import { BreadCrumb } from 'primereact/breadcrumb';
import {Link} from 'react-router-dom'

export default function Navigator() {
    // const items = [{ label: 'Upload Product',url:'/upload' }];
    // const home = { label: 'Product list', url: '/' }

    const path = [
        {id:1,name:'Product list',path:'/'},
        {id:2,name:'Upload Products',path:'/upload'}
    ]

    const link = path.map((item)=>{
        return <Link to={item.path} key={item.id} className='hover:text-gray-500 duration-500'>{item.name}</Link>
    })

    return (
        // <BreadCrumb model={items} home={home}/>
        <nav className='mt-2'>
            <ul className='flex justify-center items-center gap-5 p-3'>
                {link}
            </ul>
        </nav>
    )
}
        