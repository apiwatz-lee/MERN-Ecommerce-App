import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFoud = () => {
  return (
    <div className='text-5xl flex flex-col justify-center items-center h-screen gap-20'>
        <p>You are not login</p>  
        <Link to='/' className='underline text-orange-600 animate-bounce'>Here is our site</Link>  
    </div>
  )
}

export default PageNotFoud