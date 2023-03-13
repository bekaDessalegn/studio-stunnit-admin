import React from 'react'
import {FiUpload} from 'react-icons/fi'

const UploadButton = () => {
  return (
            <div className='bg-accentColor text-primaryColor rounded-lg w-80 py-2 flex justify-center my-1'>
                <FiUpload className='w-[20px] h-[20px]' />
            </div>
  )
}

export default UploadButton