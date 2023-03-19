import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'
import Heading from './heading'

const EditFAQ = ({faq}) => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10 '>
        <div className='grid text-center gap-2 mt-16 mb-5'>
                    <Heading heading='Edit FAQ' />
                </div>
        <Textform value={faq.question} label="Question" />
        <DescriptionTF value={faq.answer} label="Answer" />
        <p className='font-bold mb-1'>Category</p>
        <Dropdown category={faq.category} />
        <div className=' my-10'>
        <Button2 name="Edit FAQ" />
        </div>
        </div>
    </div>
  )
}

export default EditFAQ