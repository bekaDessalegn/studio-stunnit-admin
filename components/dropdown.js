import React, { useState } from 'react'
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"

const categories = ["Option 1", "Option 2", "Option 3", "Option 4"]

const Dropdown = ({category}) => {

  category = category ? category : "Dropdown"

  const [selectedItem, setSelectedItem] = useState(category)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full relative flex flex-col md:w-[340px] rounded-lg'>
      <button onClick={() => setIsOpen((prev) => !prev)} className='bg-textFormbg border-textFormBorderbg rounded-lg p-2 w-full flex items-center justify-between border-2 active:border-accentColor duration-300 active:text-accentColor'>
        {selectedItem ? (<p>{selectedItem}</p>) : (<p>Dropdown</p>)}
        {!isOpen ? (
          <AiFillCaretDown />
        ) : (
          <AiFillCaretUp />
        ) }
        </button>
        {isOpen && (<div className='bg-textFormbg border-textFormBorderbg border-2 absolute top-14 flex flex-col items-start rounded-lg p-2 w-full'>
          {categories.map((item, i) => (
            <div onClick={() => {
              setSelectedItem(() => item)
              setIsOpen((prev) => !prev)
              }} className='hover:bg-background2 cursor-pointer w-full rounded-r-lg border-l-transparent hover:border-l-accentColor border-l-4' key={i}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>)}
    </div>
  )
}

export default Dropdown