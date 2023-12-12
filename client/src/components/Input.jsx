import React from 'react'

const Input = ({title,placeholder}) => {
  return (
    <div className='flex flex-col gap-2'>
            <label name='product_name' className='font-light'>{title}</label>
            <input 
              type='text'
              className='border rounded-full p-3 placeholder:font-light placeholder:text-gray-300'
              placeholder={placeholder}
              />
    </div>
  )
}

export default Input