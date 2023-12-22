import React,{useState} from 'react';
import {Link, useLocation,useNavigate} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from 'react';
import { AppContext } from '../App';
import { useAuth } from '../context/Authentication';
import { jwtDecode } from 'jwt-decode';
import { FaBars,FaTimes } from "react-icons/fa";

export default function Navigator() {

    const location = useLocation();
    const {cart} = useContext(AppContext)
    const {logout,isAuthenticated} = useAuth();
    const navigate = useNavigate();

    let anchor;
    let name;

    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
   

    if(isAuthenticated){
        const getToken = localStorage.getItem('token') 
        const decodeToken = jwtDecode(getToken) 
        const role = decodeToken.role
        name = decodeToken.firstname
        if(role === 'admin'){
            anchor = [
                {id:1,name:'Product list',path:'/product'},
                {id:2,name:'Upload Products',path:'/product/upload'}]
        }else if(role === 'user'){
            anchor = [{id:1,name:'Product list',path:'/product'}]
        }
        
    }else if(!isAuthenticated){
         anchor = [
            {id:1,name:'Product list',path:'/product'},
        ]
    }

    const mobileMenu = anchor.map((item)=> <Link to={item.path} className='w-[30vh] text-center p-2 text-white font-bold hover:bg-[#86413b] duration-300 rounded-lg'>{item.name}</Link>)
  
   
    return (
        <>
            <aside className={`sm:hidden fixed z-10 ${isOpen ? 'top-0':'top-[-100%]'} h-auto w-full bg-[#84312a] duration-300`}>
                <FaTimes className={`${isOpen ? 'top-5':'top-[-100%]'} text-2xl text-white fixed left-5 duration-1000`} onClick={toggleMenu}/>
                <ul className='flex flex-col justify-center items-center gap-5 p-20'>
                    {mobileMenu}
                    <Link to='/product/cart' className='mt-5 w-[30vh] p-2 text-white flex justify-center items-center text-3xl hover:bg-[#86413b] duration-300 rounded-lg'>
                        <div className='relative'>
                            <FiShoppingCart/>
                            {cart.length !== 0 && <span className='absolute border bg-[#E04132] top-[-22px] left-[14px] text-white rounded-full w-5 h-5 text-center text-[12px] flex justify-center items-center'>{cart.length}</span>}
                        </div>
                    </Link>
                </ul>
            </aside>

            <nav className='flex justify-between lg:text-base items-center px-10 sm:px-20 pt-5'>
                <ul className='hidden sm:flex justify-center items-center gap-5 lg:p-3 h-16'>
                    {anchor && anchor.map((item)=>{
                        return <li key={item.id}>
                                    <Link 
                                    to={item.path} 
                                    className={`text-[15px] sm:text-base text-center text-gray-500 hover:text-gray-800 duration-500
                                    ${location.pathname === item.path ? 'text-gray-950 font-bold sm:font-normal underline-offset-8 sm:bg-gray-100 sm:p-2 rounded-xl':null}`}>
                                        {item.name}
                                    </Link>
                                </li>
                    })}
                </ul>

                <ul className='relative flex justify-between sm:justify-center items-center gap-5 p-3 w-full sm:w-auto'>

                    <Link to ='/product/cart' className={`hidden sm:block ${location.pathname === '/product/cart' ? ' bg-gray-100 p-3 duration-500 rounded-full':'p-3'}`}>
                        <FiShoppingCart className={`text-3xl text-gray-500 hover:text-gray-800 duration-500 cursor-pointer`}/>
                        {cart.length !== 0 && <span className='absolute border bg-[#E04132] top-[5px] left-[43px] text-white rounded-full w-5 h-5 text-center text-[12px] flex justify-center items-center'>{cart.length}</span>}
                    </Link>

                    <div className='sm:hidden' onClick={toggleMenu}>
                        <FaBars className='text-2xl text-gray-700'/>
                    </div>

                    <li className='text-gray-400 flex gap-3 justify-center items-center cursor-pointer'>
                        <p> {isAuthenticated && `Hi ${name}`} </p>
                        <span> | </span>
                        {isAuthenticated ? 
                            <p className='cursor-pointer hover:text-gray-700 duration-500' onClick={()=>logout()}>Log out</p>
                            :
                            <p className='cursor-pointer hover:text-gray-700 duration-500' onClick={()=>navigate('/login')}>Log in</p>
                        }
                    </li>
                </ul>
            </nav>
        </>
    )
}
        