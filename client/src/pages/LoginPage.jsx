import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = async() => {
     
    }
    
  return (
    <>
        <main className='bg-shopping bg-cover w-screen h-screen'>
            <section className='w-full h-full flex flex-col justify-center items-center'>
                <div className='p-10 sm:p-10 sm:w-[50vh] sm:h-[60vh] rounded-3xl flex flex-col justify-center items-center gap-5 backdrop-blur-xl shadow-2xl'>
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
                        onClick={handleLogin}
                        >Log in</button>
                </div>
            </section>
        </main>
    </>
  )
}

export default LoginPage