import React from 'react'
import Textform from './textformfield'
import Button2 from './button2'
import YoutubeLinks from './youtube_links'
import Heading from './heading'

const AddTestimonialLink = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mt-16 mb-5'>
            <Heading heading='Youtube Links' />
      </div>
        <YoutubeLinks />
        <p className='text-xl font-bold mt-5 mb-2'>Add Testimonial Youtube Link</p>
        <Textform label="Testimonial Youtube Link" />
        <div className=' my-10'>
        <Button2 name="Add testimonial youtube link" />
        </div>
        </div>
    </div>
  )
}

export default AddTestimonialLink