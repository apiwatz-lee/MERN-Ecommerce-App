import React from 'react'

const Input = ({id,className,title,type,placeholder,value,onChange}) => {

  return (
    <div className='flex flex-col gap-2'>
            <label name={id} className='font-light text-left'>{title}</label>
            <input 
              type={type}
              className={className}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              />
    </div>
  )
}

export default Input