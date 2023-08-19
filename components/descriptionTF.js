import React from 'react'

const DescriptionTF = ({label, value, inputChange}) => {

  return (
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>{label}</p>
        <textarea name={label.toLowerCase()} value={value} rows="5" id={label.toLowerCase()} placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' onChange={inputChange} required/>
    </div>
  )
}

export default DescriptionTF