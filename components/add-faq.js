import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'

const AddFAQ = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add FAQ</p>
        <Textform label="Question" />
        <DescriptionTF label="Answer" />
        <p className='font-bold mb-1'>Category</p>
        <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
        <div className=' my-10'>
        <Button2 name="Add FAQ" />
        </div>
        </div>
    </div>
  )
}

export default AddFAQ