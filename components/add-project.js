import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import ClientTF from './clientTF'
import Button2 from './button2'
import UploadImage from './upload-image'
import UploadListImages from './upload-list-images'
import Heading from './heading'

export default function AddProject({}) {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Add Project' />
                </div>
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
