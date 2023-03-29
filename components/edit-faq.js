import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'
import Heading from './heading'
import apiUrl from '../config'
import { useRouter } from 'next/router'

const EditFAQ = ({faq}) => {
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
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

     router.push('/faq');
  }

  return (
    <div className='w-full flex justify-center'>
        <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10 '>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Edit FAQ' />
                </div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <Textform value={faq.question} label="Question" />
          <DescriptionTF value={faq.answer} label="Answer" />
          <p className='font-bold mb-1'>Category</p>
          <Dropdown category={faq.category} />
          <div className=' my-10'>
            <button type='submit' className='w-full'>
          <Button2 name="Edit FAQ" />
          </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default EditFAQ