import { useState } from 'react';
import Image from 'next/image';
import UploadButton from './upload_button';

export default function UploadListImages() {
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

  return (
    <div className="">
        <p className='font-bold'>More images</p>
      {images.length !== 0 ? 
      (
        <div className="grid grid-cols-3 gap-[20px] my-5">
        {images.map((image, index) => (
          <div key={index}>
            <Image className='max-h-[150px] h-[150px] rounded-lg' width={250} height={150} src={URL.createObjectURL(image)}/>
          </div>
        ))}
      </div>
      ) 
      : (
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
