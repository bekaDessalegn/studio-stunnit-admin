import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Rating from './rate'
import UploadTestimonialImage from './upload-testimonial-image'
import Heading from './heading'

const AddTestimonial = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Add Testimonial' />
                </div>
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