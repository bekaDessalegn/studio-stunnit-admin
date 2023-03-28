import React from 'react'
import FaqItem from './faqItem'
import Heading from './heading'

const FaqList = ({faqs}) => {
  return (
    <div className="container mx-auto grid gap-6 mt-16">
      <div className='grid text-center gap-2'>
            <Heading heading='FAQs' />
      </div>
      <FaqItem items={faqs} />
    </div>
  )
}

export default FaqList