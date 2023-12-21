import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/Authentication'

const LoginPage = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const { login } = useAuth();

    const handleLogin = async(e) => {
        e.preventDefault();
        const data = {
            username,
            password
        };
        login(data)
    }
    
  return (
    <>
        <main className='bg-shopping bg-cover w-screen h-screen'>
            <section className='w-full h-full flex flex-col justify-center items-center'>
                <form onSubmit={handleLogin} className='p-10 sm:p-10 sm:w-[70vh] sm:h-[80vh] rounded-3xl flex flex-col justify-center items-center gap-5 backdrop-blur-xl shadow-2xl'>
                    <h1 className='text-white text-center text-xl sm:text-5xl font-bold'>Login Page</h1>

                    <label className='text-lg sm:text-xl font-semibold sm:w-96 text-white mt-5'>Username</label>
                    <input 
                        type="text" 
                        className='bg-transparent border p-3 sm:w-96 rounded-lg outline-none text-white'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />

                    <label className='text-lg sm:text-xl font-semibold sm:w-96 text-white'>Password</label>
                    <input 
                        type="password" 
                        className='bg-transparent border p-3 sm:w-96 rounded-lg outline-none text-white'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                    <button 
                        className='text-white border p-5 w-44 rounded-full font-bold text-xl mt-5'
                        >Log in</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default LoginPage