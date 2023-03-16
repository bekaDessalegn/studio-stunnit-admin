import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Rating from './rate'
import UploadTestimonialImage from './upload-testimonial-image'

const AddTestimonial = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold mt-10'>Add Testimonial</p>
        <Textform label="Full Name" />
        <Textform label="Occupation" />
        <p className='font-bold mb-1'>Rating</p>
        <Rating />
        <DescriptionTF label="Description" />
        <UploadTestimonialImage />
        <div className=' my-10'>
        <Button2 name="Add testimonial" />
        </div>
        </div>
    </div>
  )
}

export default AddTestimonial