import React from 'react'
import LinkTextformfield from './linkTF'
import Button2 from './button2'
import YoutubeLinks from './youtube_links'
import Heading from './heading'
import apiUrl from '../config'

const AddTestimonialLink = ({links}) => {

  async function onSubmit(event){
    event.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
      }
       
      let bodyContent = JSON.stringify({
        "youtubeLink" : event.target.link.value
      });
       
       let response = await fetch(`${apiUrl}/testimonial-youtube-links`, { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
  }

  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mt-16 mb-5'>
            <Heading heading='Youtube Links' />
      </div>
        <YoutubeLinks sth={links} />
        <div className='grid text-center gap-2 mt-5 mb-5'>
                    <Heading heading='Add Testimonial Youtube Link' />
                </div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <LinkTextformfield label="Testimonial Youtube Link" />
          <div className=' my-10'>
            <button type='submit' className='w-full'>
          <Button2 name="Add testimonial youtube link" />
          </button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default AddTestimonialLink