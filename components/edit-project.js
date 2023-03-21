import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import ClientTF from './clientTF'
import Button2 from './button2'
import UploadImage from './upload-image'
import UploadListImages from './upload-list-images'
import Heading from './heading'

export default function EditProject({project}) {
  return (
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-x-2 border-textFormBorderbg px-10'>
        <div className='grid text-center gap-2 mb-5 mt-16'>
                    <Heading heading='Edit Project' />
                </div>
        <Textform value={project.title} label="Title" />
        <DescriptionTF value={project.description} label="Description" />
        <ClientTF value={project.testimony} label="Client's word" />
        <UploadImage />
        <UploadListImages />
        <div className=' my-10'>
        <Button2 name="Edit project" />
        </div>
        </div>
    </div>
  )
}
