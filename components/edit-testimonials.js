import React from 'react'
import Textform from './textformfield'
import DescriptionTF from './descriptionTF'
import Button2 from './button2'
import Rating from './rate'
import UploadTestimonialImage from './upload-testimonial-image'
import Heading from './heading'
import apiUrl from '../config'
import { useRouter } from 'next/router'
import UploadButton from './upload_button';
import { useState } from 'react'

const EditTestimonial = ({testimonial}) => {
  const [image, setImage] = useState(null);


  const hiddenClicked = () => {
    document.getElementById("hiddenFile").click();
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const router = useRouter();
  
  async function onSubmit(event) {
    event.preventDefault();
    let headersList = {
      "Accept": "*/*"
     }
     
     let bodyContent = new FormData();
     bodyContent.append("name", event.target.name.value);
     bodyContent.append("occupation", event.target.occupation.value);
     bodyContent.append("rating", parseInt(event.target.rating.value));
     bodyContent.append("description", event.target.description.value);
     bodyContent.append("avatar", image);
     
     let response = await fetch(`${apiUrl}/testimonials?id=${testimonial.id}`, { 
       method: "PATCH",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);

     router.push('/testimonials');
  }

  return (
    <div className='w-full flex justify-center'>
        <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10'>
        <div className='grid text-center gap-2 mb-5'>
                    <Heading heading='Edit Testimonials' />
                </div>
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <Textform label="Name" value={testimonial.name} />
          <Textform label="Occupation" value={testimonial.occupation} />
          <p className='font-bold mb-1'>Rating</p>
          <Rating rate={testimonial.rating} />
          <DescriptionTF label="Description" value={testimonial.description} />
          <div className="">
        <p className='font-bold mt-2'>Image</p>
        { image ? (
          <div>
          <img className="w-[170px] h-[170px] rounded-full my-5" src={URL.createObjectURL(image)} />
          </div>
        ) : (<img
          className={"w-[170px] h-[170px] rounded-full my-5"}
          src={testimonial.avatarUrl}
      />)}
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
          <div className=' my-10'>
            <button type='submit' className='w-full'>
          <Button2 name="Edit testimonial" />
          </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default EditTestimonial