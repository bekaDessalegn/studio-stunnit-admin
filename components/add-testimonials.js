import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import UploadButton from './upload_button'
import Button2 from './button2'
import Image from 'next/image'
import Rating from './rate'
import img from '../public/images/Asset_12.png'

const AddTestimonial = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add Testimonial</p>
        <Textform label="Full Name" />
        <Textform label="Occupation" />
        <p className='font-bold mb-1'>Rating</p>
        <Rating />
        <DescriptionTF label="Description" />
        <div>
        <Image className="w-[230px] md:w-[150px] rounded-full" src={img} />
        </div>
        <p className='font-bold my-2'>Image</p>
        <UploadButton />
        <div className=' my-10'>
        <Button2 name="Add testimonial" />
        </div>
        <p className='text-xl font-bold'>Add Testimonial Youtube Link</p>
        <Textform label="Testimonial Youtube Link" />
        <div className=' my-10'>
        <Button2 name="Add testimonial youtube link" />
        </div>
        </div>
    </div>
  )
}

export default AddTestimonial