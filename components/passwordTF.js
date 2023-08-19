import React from 'react'

const passwordTF = ({label}) => {
  return (
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>{label}</p>
        <input type= 'password' name='password' placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-80 py-1 px-2 rounded-lg' />
    </div>
  )
}

export default passwordTF