import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Dropdown from './dropdown'
import Heading from './heading'
import apiUrl from '../config'
import { useState } from 'react'

const AddFAQ = () => {
  const [isCategoryNull, setIsCategoryNull] = useState(false)

  async function onSubmit(event){
    event.preventDefault();
    if(event.target.category.value === ''){
      setIsCategoryNull(true);
    } else {
      setIsCategoryNull(false);
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "question" : event.target.question.value,
         "answer": event.target.answer.value,
         "category": event.target.category.value
       });
       
       let response = await fetch(`${apiUrl}/faqs`, { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
    }
  }

  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10 '>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Add FAQ' />
                </div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <Textform label="Question" />
          <DescriptionTF label="Answer" />
          <p className='font-bold mb-1'>Category</p>
          <Dropdown />
          {
            (isCategoryNull && (<div className='text-dangerColor '>
              <p>Please select a category</p>
            </div>))
          }
          <div className=' my-10'>
            <button type='submit' className='w-full'>
          <Button2 name="Add FAQ" />
          </button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default AddFAQ