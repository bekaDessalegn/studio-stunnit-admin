import { useState } from 'react';
import Image from 'next/image';
import UploadButton from './upload_button';

export default function UploadImage({imageUrl}) {
  const [image, setImage] = useState(null);

  const hiddenClicked = () => {
    document.getElementById("hiddenFile").click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="">
        <p className='font-bold my-2'>Main image</p>
      {image ? (
        <div>
        <img className='max-w-[250px] h-[150px] rounded-lg my-5' src={URL.createObjectURL(image)} />
        </div>
      ) : imageUrl ? (<img
        className={"max-w-[250px] h-[150px] rounded-lg my-5"}
        src={imageUrl}
    />) : (<div></div>)
    }
      <div className="flex flex-col">
        <UploadButton onClick={hiddenClicked}/>
        <input
          type="file"
          accept="image/*"
          id='hiddenFile'
          onChange={handleImageChange}
          className="mb-4 invisible"
        />
      </div>
    </div>
  );
}
