import { useState } from 'react';
import Image from 'next/image';
import UploadButton from './upload_button';
import {AiOutlineDelete} from 'react-icons/ai'

export default function UploadListImages({imageUrls}) {
  const [images, setImages] = useState([]);

  const hiddenClicked = () => {
    document.getElementById("hiddenListFile").click();
  }

  const handleImageChange = (e) => {
    var addedImages = []
    const file = e.target.files;
    for (let i = 0; i < file.length; i++) {
        console.log("This is the file" + file[i])
        addedImages.push(file[i])
    }
    console.log("This is the list" + addedImages)
    setImages(addedImages);
  };

  function removeImage(index){
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  }

  return (
    <div className="">
        <p className='font-bold'>More images</p>
      {images.length !== 0 ? 
      (
        <div className="grid grid-cols-3 gap-[20px] my-5">
        {images.map((image, index) => (
          <div key={index}>
            <div className='relative max-w-[250px] h-[150px] rounded-lg overflow-hidden'>
            <img className='object-cover w-full h-full' src={URL.createObjectURL(image)}/>
            <div onClick={() => removeImage(index)} class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-dangerColor text-white text-xs text-center leading-4 cursor-pointer">Delete</div>
            </div>
          </div>
        ))}
      </div>
      ) 
      : imageUrls ? (
        <div className="grid grid-cols-3 gap-[20px] my-5">
        {imageUrls.map((image, index) => (
          <div key={index}>
            <div className='relative max-w-[250px] h-[150px] rounded-lg overflow-hidden'>
            <img className='object-cover w-full h-full' src={image}/>
            <div onClick={() => removeImage(index)} class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-dangerColor text-white text-xs text-center leading-4 cursor-pointer">Delete</div>
            </div>
          </div>
        ))}
      </div>
      ) : (
        <div className="">
        </div>
      )}
      <div className="flex flex-col">
        <UploadButton onClick={hiddenClicked}/>
        <input
          type="file"
          accept="image/*"
          id='hiddenListFile'
          onChange={handleImageChange}
          className="mb-4 invisible"
          multiple
        />
      </div>
    </div>
  );
}
