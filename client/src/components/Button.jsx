import React from 'react'

const Button = ({type,title,onClick}) => {
  
  return    <button 
                  type={type} 
                  className={`border p-3 rounded-full w-28 lg:w-56 ${title === 'ยืนยัน' ? `text-white bg-[#E04132]`:`bg-white text-[#E04132]`}`}
                  onClick={onClick}
                  >
                {title}
            </button>  
}

export default Button