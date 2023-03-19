import React from 'react'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { useState } from 'react';
import Modal from './modal';
import Textform from './textformfield';

const links = ['https://www.youtube.com/watch?v=lmgEaacIM30', 'https://www.youtube.com/watch?v=lmgEaacIM30', 'https://www.youtube.com/watch?v=lmgEaacIM30'];

const YoutubeLinks = () => {

  const items = []

  for(let i = 0; i < links.length; i++){
    items.push({
      link: links[i],
      isEdit: false
    })
  }

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(items);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenEdit(index) {
    const newList = [...items];
    newList[index].isEdit = true;
    setList(newList);
  }

  function handleCloseEdit(index) {
    const newList = [...items];
    newList[index].isEdit = false;
    setList(newList);
  }
  return (
    <div>
        <Modal isOpen={isOpen} onClose={handleCloseModal} title="Delete link">
        <p>Are you sure you want to delete this link ?</p>
      </Modal>
    {links.map((link, index) => list[index].isEdit ? (
    <div className='flex flex-row'>
      <div className='w-full mt-2'>
      <Textform value={link}/>
      </div>
      <MdDone onClick={() => handleCloseEdit(index)} className='w-[30px] h-[30px] mr-2 cursor-pointer text-accentColor font-bold mt-4 ml-2' />
      </div>) : (
        <div key={index} className=' border-2 border-textFormBorderbg p-2 rounded-lg flex justify-between mt-3'>
            <p>{link}</p>
            <div className='flex flex-row'>
                <AiOutlineEdit onClick={() => handleOpenEdit(index)} className='w-[25px] h-[25px] mr-2 cursor-pointer' />
                <AiOutlineDelete onClick={handleOpenModal} className='w-[25px] h-[25px] fill-dangerColor cursor-pointer' />
            </div>
        </div>
    ))}
    </div>
  )
}

export default YoutubeLinks