import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Rating from './rate'
import UploadTestimonialImage from './upload-testimonial-image'
import Heading from './heading'

const EditTestimonial = ({testimonial}) => {
    console.log(testimonial);
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mt-16 mb-5'>
                    <Heading heading='Edit Testimonials' />
                </div>
        <Textform label="Full Name" value={testimonial.customerName} />
        <Textform label="Occupation" value={testimonial.position} />
        <p className='font-bold mb-1'>Rating</p>
        <Rating rate={testimonial.rating} />
        <DescriptionTF label="Description" value={testimonial.detail} />
        <UploadTestimonialImage imageUrl={testimonial.imageUrl}/>
        <div className=' my-10'>
        <Button2 name="Edit testimonial" />
        </div>
        </div>
    </div>
  )
}

export default EditTestimonial