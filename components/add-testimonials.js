import CircularProgress from "@mui/joy/CircularProgress";
import React, { useEffect, useState } from "react";
import apiUrl from "../config";
import Button2 from "./button2";
import DescriptionTF from "./descriptionTF";
import Heading from "./heading";
import LeftRightAligner from "./left-right-aligner";
import Rating from "./rate";
import Textform from "./textformfield";
import UploadButton from "./upload_button";

const AddTestimonial = ({ setTestimonials }) => {
  const [isImageNull, setIsImageNull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);
  const [inputValues, setInputValues] = useState({
    name: "",
    occupation: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  function clearTxt() {
    setInputValues({
      name: "",
      occupation: "",
      description: "",
    });
    setImage(null);
    setRate(0);
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo(0, 0);
  };

  const hiddenClicked = () => {
    document.getElementById("hiddenFile").click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  async function onSubmit(event) {
    event.preventDefault();
    console.log("submitting");
    let imageLess = false;
    if (event.target.avatar.value === "") {
      // setIsImageNull(true);
      imageLess = true;
    }
    // else {
    setIsImageNull(false);
    setLoading(true);
    let headersList = {
      Accept: "*/*",
    };

    let bodyContent = new FormData();
    bodyContent.append("name", event.target.name.value);
    bodyContent.append("occupation", event.target.occupation.value);
    bodyContent.append("rating", parseInt(event.target.rating.value));
    bodyContent.append("description", event.target.description.value);
    imageLess ? null : bodyContent.append("avatar", image);

    let response = await fetch(`${apiUrl}/testimonials`, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    // fetching the update
    let response2 = await fetch(`${apiUrl}/testimonials`, {
      method: "GET",
      headers: headersList,
    });

    let data2 = await response2.text();
    let tesimon = JSON.parse(data2);
    setTestimonials(tesimon);
    handleButtonClick();
    clearTxt();
    setLoading(false);
    // }
  }

  return (
    <div className='py-10'>
      <LeftRightAligner>
        <div className="w-full flex justify-center">
          <div className="w-full items-center border-x-2 border-2 rounded-md border-textFormBorderbg px-10 py-10">
            <div className="grid text-center gap-2 mb-5">
              <Heading heading="Add Testimonial" />
            </div>
            <form
              onSubmit={onSubmit}
              encType="multipart/form-data"
              className="space-y-5"
            >
              <Textform
                value={inputValues.name}
                inputChange={handleChange}
                label="Name"
              />
              <Textform
                value={inputValues.occupation}
                inputChange={handleChange}
                label="Occupation"
              />
              <p className="font-bold mb-1">Rating</p>
              <Rating rate={rate} setRate={(rate) => setRate(rate)} />
              <DescriptionTF
                value={inputValues.description}
                inputChange={handleChange}
                label="Description"
              />
              <div className="">
                <p className="font-bold mt-2">Image</p>
                {image ? (
                  <div>
                    <img
                      className="w-[170px] h-[170px] rounded-full my-5"
                      src={URL.createObjectURL(image)}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="flex flex-col">
                  <UploadButton onClick={hiddenClicked} />
                  <input
                    name="avatar"
                    type="file"
                    accept="image/*"
                    id="hiddenFile"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>
              {isImageNull && (
                <div className="text-dangerColor ">
                  <p>Please select an image</p>
                </div>
              )}
              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <CircularProgress color="warning" />
                </div>
              ) : (
                <button type="submit" className="w-full">
                  <Button2 name="Add testimonial" />
                </button>
              )}
            </form>
          </div>
        </div>
      </LeftRightAligner>
    </div>
  );
};

export default AddTestimonial;
