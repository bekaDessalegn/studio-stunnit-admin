import React from 'react'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import { useState } from 'react';
import Modal from './modal';
import Textform from './textformfield';

const links = ['https://www.youtube.com/watch?v=lmgEaacIM30', 'https://www.youtube.com/watch?v=lmgEaacIM30', 'https://www.youtube.com/watch?v=lmgEaacIM30'];

const YoutubeLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenEdit() {
    setIsEdit(true)
  }
  return (
    <div>
        <Modal isOpen={isOpen} onClose={handleCloseModal} title="Delete link">
        <p>Are you sure you want to delete this link ?</p>
      </Modal>
    {links.map((link, index) => isEdit ? (<div><Textform /></div>) : (
        <div key={index} className=' border-2 border-textFormBorderbg p-2 rounded-lg flex justify-between mt-3'>
            <p>{link}</p>
            <div className='flex flex-row'>
                <AiOutlineEdit onClick={handleOpenEdit} className='w-[25px] h-[25px] mr-2 cursor-pointer' />
                <AiOutlineDelete onClick={handleOpenModal} className='w-[25px] h-[25px] fill-dangerColor cursor-pointer' />
            </div>
        </div>
    ))}
    </div>
  )
}

export default YoutubeLinks