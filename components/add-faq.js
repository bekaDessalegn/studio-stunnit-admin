import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'
import Heading from './heading'
import apiUrl from '../config'
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';

const AddFAQ = ({ addFaq }) => {
  const [isCategoryNull, setIsCategoryNull] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo(0, 0);
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (event.target.category.value === 'Dropdown') {
      setIsCategoryNull(true);
    } else {
      setLoading(true)
      setIsCategoryNull(false);
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
        "question": event.target.question.value,
        "answer": event.target.answer.value,
        "category": event.target.category.value
      });

      let response = await fetch(`${apiUrl}/faqs`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
      let data = await response.text();
      addFaq(JSON.parse(data))
      handleButtonClick();
      setLoading(false)
    }
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10'>
        <div className='grid text-center gap-2 mb-5'>
          <Heading heading='Add FAQ' />
        </div>
        <form onSubmit={onSubmit} encType='multipart/form-data' className='space-y-5'>
          <Textform label="Question" />
          <DescriptionTF label="Answer" />
          <div>
            <p className='font-bold mb-1'>Category</p>
            <Dropdown />
            {
              (isCategoryNull && (<div className='text-dangerColor '>
                <p>Please select a category</p>
              </div>))
            }
          </div>
          {loading ? (<div className='w-full flex items-center justify-center'>
            <CircularProgress color="warning" />
          </div>) : (
            <button type='submit' className='w-full'>
            <Button2 name="Add FAQ" />
          </button>)}
        </form>
      </div>
    </div>
  )
}

export default AddFAQ