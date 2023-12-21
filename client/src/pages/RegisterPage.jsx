import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Authentication'
import {useNavigate} from 'react-router-dom'
import PasswordChecklist from "react-password-checklist"

const RegisterPage = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [errorMessage,setErrorMessage] = useState({})
    const { register } = useAuth();
    const navigate = useNavigate()

    const handleValidate = (e) => {
        e.preventDefault();
        const lowerCase = /[a-z]/g;
        const upperCase = /[A-Z]/g;
        const numbers = /[0-9]/g;
        if(username === ''){
            setErrorMessage({username:'Username is required'})
        }else if(password === ''){
            setErrorMessage({password:'Password is required'})
        }else if(!password.match(lowerCase)){
            setErrorMessage({password:'Password should contains lowercase letters!'});
        }else if(!password.match(upperCase)){
            setErrorMessage({password:'Password should contains uppercase letters!'});
        }else if(!password.match(numbers)){
            setErrorMessage({password:'Password should contains numbers also!'});
        }else if(password.length < 9){
            setErrorMessage({password:'Password length should be more than 9'});
        }else if(password){
            setErrorMessage({password:'Password is strong'});
        }else if(firstname === ''){
            setErrorMessage({firstname:'Firstname is required'})
        }else if(lastname === ''){
            setErrorMessage({lastname:'Lastname is required'})
        }else{
            handleRegister()
        }
    }
    
    const handleRegister = async(e) => {
        e.preventDefault();
        const data = {
            username,
            password,
            firstname,
            lastname
        };
        register(data)
    }
    
  return (
    <>
        <main className='bg-shopping bg-cover w-screen h-screen'>
            <section className='w-full h-full flex flex-col justify-center items-center'>
                <form onSubmit={handleValidate} className='border p-10 sm:p-10 w-[280px] sm:w-[40vh] rounded-3xl flex flex-col justify-center items-center gap-5 backdrop-opacity-5 bg-gray-950 bg-opacity-90 shadow-2xl'>
                    <h1 className='text-gray-100 text-center text-2xl sm:text-3xl font-bold'>Account Register</h1>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg sm:text-xl font-semibold sm:w-[30vh] text-white mt-5'>Username</label>
                        <input 
                            type="text" 
                            placeholder='Enter your username'
                            className='bg-transparent border p-3 sm:w-[30vh] rounded-lg outline-none text-white placeholder:text-gray-300 placeholder:text-sm'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        <p className='text-red-500 pl-2'>{errorMessage.username && <span>{errorMessage.username}</span>}</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                         <label className='text-lg sm:text-xl font-semibold sm:w-[30vh] text-white'>Password</label>
                        <input 
                            type="password" 
                            placeholder='e.g. ToonLogin!3'
                            className='bg-transparent border p-3 sm:w-[30vh] rounded-lg outline-none text-white placeholder:text-gray-300 placeholder:text-sm'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        <p className={`text-red-500 pl-2 ${errorMessage.password === 'Password is strong' && 'text-green-500'}`}>{errorMessage.password && <span>{errorMessage.password}</span>}</p>       
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg sm:text-xl font-semibold sm:w-[30vh] text-white '>Firstname</label>
                        <input 
                            type="text" 
                            placeholder='Enter your firstname'
                            className='bg-transparent border p-3 sm:w-[30vh] rounded-lg outline-none text-white placeholder:text-gray-300 placeholder:text-sm'
                            value={firstname}
                            onChange={(e)=>setFirstname(e.target.value)}
                            />
                         <p className='text-red-500 pl-2'>{errorMessage.firstname && <span>{errorMessage.firstname}</span>}</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className='text-lg sm:text-xl font-semibold sm:w-[30vh] text-white'>Lastname</label>
                        <input 
                            type="text" 
                            placeholder='Enter your lastname'
                            className='bg-transparent border p-3 sm:w-[30vh] rounded-lg outline-none text-white placeholder:text-gray-300 placeholder:text-sm'
                            value={lastname}
                            onChange={(e)=>setLastname(e.target.value)}
                            />
                         <p className='text-red-500 pl-2'>{errorMessage.lastname && <span>{errorMessage.lastname}</span>}</p>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center items-center sm:justify-end gap-1 w-[30vh]'>
                        <p className='text-white'>Already have an account ? </p>
                        <span className='text-blue-600 underline cursor-pointer' onClick={()=>navigate('/')}>Log in</span>
                    </div>

                    <button 
                        type="submit"
                        className='text-white border p-5 w-44 rounded-full font-bold text-xl mt-5 hover:bg-gray-600 hover:border-gray-600 duration-300'
                        >Sign Up</button>

                </form>
            </section>
        </main>
    </>
  )
}

export default RegisterPage