import { useState } from 'react';
import Image from 'next/image';
import UploadButton from './upload_button';

export default function UploadTestimonialImage({imageUrl}) {

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
        <p className='font-bold mt-2'>Image</p>
        { image ? (
          <div>
          <Image className="w-[170px] h-[170px] rounded-full my-5" width={230} height={230} src={URL.createObjectURL(image)} />
          </div>
        ) : imageUrl ? (<img
          className={"w-[170px] h-[170px] rounded-full my-5"}
          src={imageUrl}
      />) : (<div></div>)}
      <div className="flex flex-col">
        <UploadButton onClick={hiddenClicked}/>
        <input
        name = "avatar"
          type="file"
          accept="image/*"
          id='hiddenFile'
          onChange={handleImageChange}
          className="invisible h-0"
        />
      </div>
    </div>
  );
}
