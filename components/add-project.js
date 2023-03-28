import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import ClientTF from './clientTF'
import Button2 from './button2'
import Heading from './heading'
import apiUrl from '../config'
import { useState } from 'react'
import UploadButton from './upload_button'

export default function AddProject({ addProject }) {
  const [isImageNull, setIsImageNull] = useState(false)

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const hiddenClicked = () => {
    document.getElementById("hiddenFile").click();
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const hiddenListClicked = () => {
    document.getElementById("hiddenListFile").click();
  }

  const handleListImageChange = (e) => {
    var addedImages = []
    const file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      console.log("This is the file" + file[i])
      addedImages.push(file[i])
    }
    console.log("This is the list" + addedImages)
    setImages(addedImages);
  };

  function removeImage(index) {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (event.target.mainImage.value === '') {
      setIsImageNull(true);
    } else {
      setIsImageNull(false);
      let headersList = {
        "Accept": "*/*"
      }

      let bodyContent = new FormData();
      bodyContent.append("title", event.target.title.value);
      bodyContent.append("clientsWord", event.target.clientsWord.value);
      bodyContent.append("description", event.target.description.value);
      bodyContent.append("mainImage", image);
      images.map((image) => {
        bodyContent.append("moreImages", image);
      })

      let response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });

      let data = await response.text();
      addProject(data)
    }
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10'>
        <div className='grid text-center gap-2 mb-5'>
          <Heading heading='Add Project' />
        </div>
        <form onSubmit={onSubmit} encType='multipart/form-data' className='space-y-5'>
          <Textform label="Title" />
          <DescriptionTF label="Description"  />
          <ClientTF label="Client's word" />
          <div className="">
            <p className='font-bold mt-2'>Main Image</p>
            {image ? (
              <div>
                <img className="max-w-[250px] h-[150px] rounded-lg my-5" src={URL.createObjectURL(image)} />
              </div>
            ) : (<div></div>)}
            <div className="flex flex-col">
              <UploadButton onClick={hiddenClicked} />
              <input
                name="mainImage"
                type="file"
                accept="image/*"
                id='hiddenFile'
                onChange={handleImageChange}
                className="invisible h-0"
              />
            </div>
          </div>
          {
            (isImageNull && (<div className='text-dangerColor '>
              <p>Please select an image</p>
            </div>))
          }
          <div className="">
            <p className='font-bold'>More images</p>
            {images.length !== 0 ?
              (
                <div className="grid grid-cols-3 gap-[20px] my-5">
                  {images.map((image, index) => (
                    <div key={index}>
                      <div className='relative max-w-[250px] h-[150px] rounded-lg overflow-hidden'>
                        <img className='object-cover w-full h-full' src={URL.createObjectURL(image)} />
                        <div onClick={() => removeImage(index)} class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-dangerColor text-white text-xs text-center leading-4 cursor-pointer">Delete</div>
                      </div>
                    </div>
                  ))}
                </div>
              )
              : (
                <div>
                </div>
              )}
            <div className="flex flex-col">
              <UploadButton onClick={hiddenListClicked} />
              <input
                type="file"
                accept="image/*"
                id='hiddenListFile'
                onChange={handleListImageChange}
                className="mb-4 hidden"
                multiple
              />
            </div>
          </div>
          <div className='h-3'></div>
          <button type='submit' className='w-full'>
            <Button2 name="Add project" />
          </button>
        </form>
      </div>
    </div>
  )
}
