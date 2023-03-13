import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import UploadButton from './upload_button'
import Button2 from './button2'
import Image from 'next/image'
import img from '../public/images/Asset_12.png'

const AddTestimonial = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add Testimonial</p>
        <Textform label="Full Name" />
        <Textform label="Occupation" />
        <Textform label="Rating" />
        <DescriptionTF label="Description" />
        <div>
        <Image className='max-w-[250px] rounded-lg mt-5' src={mainImage} />
        </div>
        <p className='font-bold my-2'>Main image</p>
        <UploadButton />
        <ImagesGrid />
        <p className='font-bold my-2'>More images</p>
        <UploadButton />
        <div className=' my-10'>
        <Button2 name="Add project" />
        </div>
        </div>
    </div>
  )
}

export default AddTestimonial