import React from 'react'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { useState } from 'react';
import Modal from './modal';
import LinkTextformfield from './linkTF';
import apiUrl from '../config';

const YoutubeLinks = ({sth}) => {
  const [linkId, setLinkId] = useState()

  const links = JSON.parse(sth)

  const items = []

  for(let i = 0; i < links.length; i++){
    items.push({
      link: links[i].youtubeLink,
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

  function handleOpenEdit(index, id) {
    setLinkId(id)
    const newList = [...items];
    newList[index].isEdit = true;
    setList(newList);
  }

  async function onSubmit(event, index) {
    event.preventDefault();

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "youtubeLink" : event.target.link.value,
     });
     
     let response = await fetch(`${apiUrl}/testimonial-youtube-links?id=${linkId}`, { 
       method: "PATCH",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     handleCloseEdit(index);
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
      <form onSubmit={(e) => onSubmit(e, index)}>
    <div className='flex flex-row'>
        <div className='w-full mt-2'>
        <LinkTextformfield value={link.youtubeLink}/>
        </div>
        <button type='submit'>
        <MdDone className='w-[30px] h-[30px] mr-2 cursor-pointer text-accentColor font-bold mt-2 ml-2' />
        </button>
      </div></form>) : (
        <div key={index} className=' border-2 border-textFormBorderbg p-2 rounded-lg flex justify-between mt-3'>
            <p>{link.youtubeLink}</p>
            <div className='flex flex-row'>
                <AiOutlineEdit onClick={() => handleOpenEdit(index, link.id)} className='w-[25px] h-[25px] mr-2 cursor-pointer' />
                <AiOutlineDelete onClick={handleOpenModal} className='w-[25px] h-[25px] fill-dangerColor cursor-pointer' />
            </div>
        </div>
    ))}
    </div>
  )
}

export default YoutubeLinks