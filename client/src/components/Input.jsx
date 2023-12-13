import React from 'react'

const Input = ({title,type,placeholder,value,onChange}) => {

  return (
    <div className='flex flex-col gap-2'>
            <label name='product_name' className='font-light text-center sm:text-left'>{title}</label>
            <input 
              type={type}
              className='border rounded-full p-3 placeholder:font-light placeholder:text-gray-300 outline-none text-gray-500'
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              />
    </div>
  )
}

export default Input