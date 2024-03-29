import CircularProgress from '@mui/joy/CircularProgress'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import apiUrl from '../config'
import Button2 from './button2'
import DescriptionTF from './descriptionTF'
import Dropdown from './dropdown'
import Heading from './heading'
import Textform from './textformfield'

const EditFAQ = ({faq}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(faq.category)
  const [inputValues, setInputValues] = useState({
    question: faq.question,
    answer: faq.answer
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
     location.reload

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
          <Dropdown category={category} setSelectedItem={(item) => setCategory(item)} />
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