import React from 'react'

const textformfield = ({label}) => {
  return (
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>{label}</p>
        <input type= 'text' name={label.toLowerCase()} placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' />
    </div>
  )
}

export default textformfield