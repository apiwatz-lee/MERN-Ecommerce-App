import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Input = ({id,title,type,placeholder,value,onChange}) => {

  const {errorMessage} = useContext(AppContext)

  return (
    <div className='flex flex-col gap-2'>
            <label name='product_name' className='font-light text-left'>{title}</label>
            <input 
              type={type}
              className='border rounded-full p-3 pl-7 placeholder:font-light placeholder:text-gray-300 outline-none text-gray-500 font-light'
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              />
              {errorMessage && <p className='text-red-500'>{errorMessage[id]}</p>}
    </div>
  )
}

export default Input