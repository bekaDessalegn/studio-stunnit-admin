import React, { useState } from 'react'
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"

const categories = ["Option 1", "Option 2", "Option 3", "Option 4"]

const Dropdown = ({category, setSelectedItem}) => {

  const [isOpen, setIsOpen] = useState(false)

  function getText(item) {
    var category = document.getElementById("value");
    category.value = item;
  }

  return (
    <div className='w-full relative flex flex-col md:w-[340px] rounded-lg'>
      <div onClick={() => setIsOpen((prev) => !prev)} className='bg-textFormbg border-textFormBorderbg rounded-lg p-2 w-full flex items-center justify-between border-2 active:border-accentColor duration-300 active:text-accentColor cursor-pointer'>
        {category ? (<p>{category}</p>) : (<p>Dropdown</p>)}
        {!isOpen ? (
          <AiFillCaretDown />
        ) : (
          <AiFillCaretUp />
        ) }
        </div>
        {isOpen && (<div className='bg-textFormbg border-textFormBorderbg border-2 absolute top-14 flex flex-col items-start rounded-lg p-2 w-full'>
          {categories.map((item, i) => (
            <div onClick={() => {
              setSelectedItem(item)
              setIsOpen((prev) => !prev)
              getText(item);
              }} className='hover:bg-background2 cursor-pointer w-full rounded-r-lg border-l-transparent hover:border-l-accentColor border-l-4' key={i}>
              <h3 id="category">{item}</h3>
            </div>
          ))}
        </div>)}
        <input id='value' name='category' className='hidden' value={category}/>
    </div>
  )
}

export default Dropdown