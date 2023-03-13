import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'

export default function AddProject({}) {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add Project</p>
        <Textform label="Title" />
        <DescriptionTF label="Description" />
        </div>
    </div>
  )
}
