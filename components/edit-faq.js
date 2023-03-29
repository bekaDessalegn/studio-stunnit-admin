import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'
import Heading from './heading'
import apiUrl from '../config'
import { useRouter } from 'next/router'
import CircularProgress from '@mui/joy/CircularProgress';
import { useState } from 'react'

const EditFAQ = ({faq}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    question: faq.question,
    answer: faq.answer,
    category: faq.category
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "question" : event.target.question.value,
       "answer": event.target.answer.value,
       "category": event.target.category.value
     });
     
     let response = await fetch(`${apiUrl}/faqs?id=${faq.id}`, { 
       method: "PATCH",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);

     setLoading(false);

     router.push('/faq');
  }

  return (
    <div className='w-full flex justify-center'>
        <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10 '>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Edit FAQ' />
                </div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <Textform value={inputValues.question} inputChange={handleChange} label="Question" />
          <DescriptionTF value={inputValues.answer} inputChange={handleChange} label="Answer" />
          <p className='font-bold mb-1'>Category</p>
          <Dropdown category={inputValues.category} />
          <div className=' my-10'>
            {loading ? (<div className='w-full flex items-center justify-center'>
            <CircularProgress color="warning" />
          </div>) : (<button type='submit' className='w-full'>
          <Button2 name="Edit FAQ" />
          </button>)}
          </div>
        </form>
        </div>
    </div>
  )
}

export default EditFAQ