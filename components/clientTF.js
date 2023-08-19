import React from 'react'

const ClientTF = ({label, value, inputChange}) => {
  return (
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>{label}</p>
        <textarea name='clientsWord' value={value} rows="5" id="client" placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' onChange={inputChange} />
    </div>
  )
}

export default ClientTF