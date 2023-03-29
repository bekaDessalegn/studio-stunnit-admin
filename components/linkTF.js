import React from 'react'

const linkTextformfield = ({label, value, inputChange}) => {

  label = label ? label : "";

  return (
    <div className='text-left my-1'>
        {label ? (<p className='font-bold mb-1'>{label}</p>) : (<></>)}
        <input value={value} type= 'text' name='link' placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' onChange={inputChange} required/>
    </div>
  )
}

export default linkTextformfield