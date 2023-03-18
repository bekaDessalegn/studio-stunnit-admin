import React from 'react'
import { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

const FaqItem = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }
  return (
    <div className="accordion w-screen flex flex-col justify-center items-center">
      {items.map((item, index) => (
        <div className={`accordion-item ${index === activeIndex ? 'active' : ''} w-3/5 bg-surface`} key={index}>
          <div className="accordion-item-title" onClick={() => handleClick(index)}>
            <div className=' font-semibold'>{item.question}</div>
            <div>{index === activeIndex ? <AiOutlineUp className='text-3xl text-accentColor' /> : <AiOutlineDown className='text-3xl text-accentColor' />}</div>
          </div>
          <div className="accordion-item-content">{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default FaqItem