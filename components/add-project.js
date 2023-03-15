import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import ClientTF from './clientTF'
import Button2 from './button2'
import UploadImage from './upload-image'
import UploadListImages from './upload-list-images'

export default function AddProject({}) {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <p className='text-xl font-bold'>Add Project</p>
        <Textform label="Title" />
        <DescriptionTF label="Description" />
        <ClientTF label="Client's word" />
        <UploadImage />
        <UploadListImages />
        <div className=' my-10'>
        <Button2 name="Add project" />
        </div>
        </div>
    </div>
  )
}
