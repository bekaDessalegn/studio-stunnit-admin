import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import apiUrl from '../config';
import LinkTextformfield from './linkTF';
import Modal from './modal';

const YoutubeLinks = ({ setAllLinks, sth, removeLink }) => {
  const [deleteLinkId, setLinkId] = useState()
  const [editLinkId, setEditLinkId] = useState()
  const [isOpen, setIsOpen] = useState(false);

  const links = sth;

  function handleOpenModal(id) {
    setLinkId(id)
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOpenEdit(id) {
    setEditLinkId(id)
  }

  async function onSubmit(event, index) {
    event.preventDefault();

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "youtubeLink": event.target.link.value,
    });

    let response = await fetch(`${apiUrl}/testimonial-youtube-links?id=${editLinkId}`, {
      method: "PATCH",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.text();

    let response2 = await fetch(`${apiUrl}/testimonial-youtube-links`, {
      method: "GET",
      headers: headersList
    });

    let data2 = await response2.text();
    let links = JSON.parse(data2)
    setAllLinks(links)

    handleCloseEdit();

  }

  function handleCloseEdit() {
    setEditLinkId(0)
  }

  async function onDelete() {
    setIsOpen(false);
    let headersList = {
      "Accept": "*/*"
    }

    let response = await fetch(`${apiUrl}/testimonial-youtube-links?id=${deleteLinkId}`, {
      method: "DELETE",
      headers: headersList
    });

    let data = await response.text();
    console.log(data);

    removeLink(deleteLinkId);

  }

  return (
    <div>
      <Modal onClick={onDelete} isOpen={isOpen} onClose={handleCloseModal} title="Delete link">
        <p>Are you sure you want to delete this link ?</p>
      </Modal>
      {links.map((link, index) => editLinkId === link.id ?
        (
          <form onSubmit={(e) => onSubmit(e, index)}>
            <div className='flex flex-row'>
              <div className='w-full mt-2'>
                <LinkTextformfield value={link.youtubeLink} />
              </div>
              <button type='submit'>
                <MdDone className='w-[30px] h-[30px] mr-2 cursor-pointer text-accentColor font-bold mt-2 ml-2' />
              </button>
            </div></form>)
        :
        (
          <div key={index} className=' border-2 border-textFormBorderbg p-2 rounded-lg flex justify-between mt-3'>
            <p>{link.youtubeLink}</p>
            <div className='flex flex-row'>
              <AiOutlineEdit onClick={() => handleOpenEdit(link.id)} className='w-[25px] h-[25px] mr-2 cursor-pointer' />
              <AiOutlineDelete onClick={() => handleOpenModal(link.id)} className='w-[25px] h-[25px] fill-dangerColor cursor-pointer' />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default YoutubeLinks