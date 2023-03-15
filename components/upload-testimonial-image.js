import { useState } from 'react';
import Image from 'next/image';
import UploadButton from './upload_button';

export default function UploadTestimonialImage() {
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
        <p className='font-bold my-2'>Image</p>
      {image ? (
        <div>
        <Image className="w-[230px] md:w-[150px] rounded-full my-5" width={230} height={230} src={URL.createObjectURL(image)} />
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
          id='hiddenFile'
          onChange={handleImageChange}
          className="mb-4 invisible"
        />
      </div>
    </div>
  );
}
