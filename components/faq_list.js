import React from 'react'
import FaqItem from './faqItem'
import Heading from './heading'

const faqs = [
    {
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience."
    },
    {
        question : "What if I couldn’t implement the design myself? Will you help me after that?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience."
    },
    {
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience."
    },
    {
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience."
    },
]

const FaqList = () => {
  return (
    <div className="container mx-auto px-4 grid gap-6 my-16">
      <div className='grid text-center gap-2'>
            <Heading heading='FAQs' />
      </div>
      <FaqItem items={faqs} />
    </div>
  )
}

export default FaqList