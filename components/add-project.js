import CircularProgress from '@mui/joy/CircularProgress'
import { useEffect, useState } from 'react'
import apiUrl from '../config'
import Button2 from './button2'
import ClientTF from './clientTF'
import DescriptionTF from './descriptionTF'
import Heading from './heading'
import Textform from './textformfield'
import UploadButton from './upload_button'

export default function AddProject({ addProject }) {
  const [isImageNull, setIsImageNull] = useState(false)
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    clientsWord: ""
  })

  function clearTxt() {
    setInputValues({
      title: "",
      description: "",
      clientsWord: ""
    })
    setImage(null)
    setImages([])
  }

  const hiddenClicked = () => {
    document.getElementById("hiddenFile").click();
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo(0, 0);
  };

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
      setLoading(true)
      let headersList = {
        "Accept": "*/*"
      }
      console.log("data check")
      console.log(event.target.title.value)
      console.log(event.target.clientsWord.value)
      console.log(event.target.description.value)
      console.log(image)
      console.log(images)

      let bodyContent = new FormData();
      bodyContent.append("title", event.target.title.value);
      bodyContent.append("clientsWord", event.target.clientsWord.value);
      bodyContent.append("description", event.target.description.value);
      bodyContent.append("mainImage", image);
      images.map((image) => {
        bodyContent.append("moreImages", image);
      })
      console.log(bodyContent)
      
      let response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
      console.log("response")
      console.log(response)
      
      let data = await response.text();
      console.log(data)
      addProject(data)
      handleButtonClick();
      clearTxt();
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full items-center border-2 rounded-md border-textFormBorderbg px-10 py-10'>
        <div className='grid text-center gap-2 mb-5'>
          <Heading heading='Add Project' />
        </div>
        <form onSubmit={onSubmit} encType='multipart/form-data' className='space-y-5'>
          <Textform value={inputValues.title} inputChange={handleChange}  label="Title" />
          <DescriptionTF value={inputValues.description} inputChange={handleChange} label="Description"  />
          <ClientTF value={inputValues.clientsWord} inputChange={handleChange} label="Client's word" />
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
          {loading ? (<div className='w-full flex items-center justify-center'>
            <CircularProgress color="warning" />
          </div>) : (<button type='submit' className='w-full'>
            <Button2 name="Add project" />
          </button>)}
        </form>
      </div>
    </div>
  )
}
