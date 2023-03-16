import React from 'react'
import {FiUpload} from 'react-icons/fi'

const UploadButton = ({onClick}) => {
  return (
            <div onClick={onClick} className='bg-accentColor text-primaryColor rounded-lg w-full md:w-80 py-2 flex justify-center my-1 cursor-pointer'>
                <FiUpload className='w-[20px] h-[20px]' />
            </div>
  )
}

export default UploadButton