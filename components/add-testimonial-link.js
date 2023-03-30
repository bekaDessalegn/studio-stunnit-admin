import React, { useState, useEffect } from 'react'
import LinkTextformfield from './linkTF'
import Button2 from './button2'
import YoutubeLinks from './youtube_links'
import Heading from './heading'
import apiUrl from '../config'
import CircularProgress from '@mui/joy/CircularProgress';

const AddTestimonialLink = ({ links, addLinks, removeLink }) => {
  const [isLinkInvalid, setIsLinkInvalid] = useState()
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    link: ""
  })

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo(0, 0);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  function clearTxt() {
    setInputValues({
      link: ""
    })
  }

  async function onSubmit(event) {
    event.preventDefault();

    // regular expression pattern to match YouTube URLs
    let pattern = /^(?:(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]{11}))$/;

    // check if the string matches the pattern
    if (pattern.test(event.target.link.value)) {
      setIsLinkInvalid(false)
      setLoading(true)
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }
  
      let bodyContent = JSON.stringify({
        "youtubeLink": event.target.link.value
      });
  
      let response = await fetch(`${apiUrl}/testimonial-youtube-links`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
  
      let data = await response.text();
      console.log(JSON.parse(data));
      addLinks(JSON.parse(data));
      handleButtonClick();
      clearTxt();
      setLoading(false)
    } else {
      setIsLinkInvalid(true)
    }
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full items-center'>
        <div className='grid text-center gap-2 mt-16 mb-5'>
          <Heading heading='Youtube Links' />
        </div>
        <YoutubeLinks sth={links} removeLink={removeLink} />
        <div className='h-16'></div>
        <div className='border-2 rounded-md border-textFormBorderbg py-10 px-10 mb-10'>
          <div className='grid text-center gap-2 mt-5 mb-5'>
            <Heading heading='Add Testimonial Youtube Link' />
          </div>
          <form onSubmit={onSubmit} encType='multipart/form-data'>
            <LinkTextformfield value={inputValues.link} inputChange={handleChange} label="Testimonial Youtube Link" />
            {
              (isLinkInvalid && (<div className='text-dangerColor '>
                <p>Please enter a valid youtube link</p>
              </div>))
            }
            <div className=' my-10'>
              {loading ? (<div className='w-full flex items-center justify-center'>
            <CircularProgress color="warning" />
          </div>) : (<button type='submit' className='w-full'>
                <Button2 name="Add testimonial youtube link" />
              </button>)}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTestimonialLink