import React from 'react'

const Button2 = ({name}) => {
  return (
    <div className='bg-accentColor text-primaryColor rounded-lg w-full py-2 flex justify-center my-1 cursor-pointer'>
                <p className='font-bold'>{name}</p>
            </div>
  )
}

export default Button2