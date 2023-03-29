import React from 'react'

const textformfield = ({label, value, inputChange}) => {

  label = label ? label : "";

  return (
    <div className='text-left my-1'>
        {label ? (<p className='font-bold mb-1'>{label}</p>) : (<></>)}
        <input id={label.toLowerCase()} value={value} type= 'text' name={label.toLowerCase()} placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' onChange={inputChange} required/>
    </div>
  )
}

export default textformfield