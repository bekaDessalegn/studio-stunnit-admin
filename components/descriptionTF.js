import React from 'react'
import { useState } from 'react'

const DescriptionTF = ({label, value}) => {
  const [data, setData] = useState(value)

  return (
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>{label}</p>
        <textarea name={label.toLowerCase()} value={data} rows="5" id={label.toLowerCase()} placeholder={'Enter your ' + label.toLowerCase()} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' onChange={(e) => setData(e.target.value)} required/>
    </div>
  )
}

export default DescriptionTF