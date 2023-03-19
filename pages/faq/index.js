import React from 'react'
import Navbar from '../../components/navbar'
import AddFAQ from '../../components/add-faq'
import FaqList from '../../components/faq_list'

const faq = ({faqs}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <FaqList faqs={faqs}/>
        <AddFAQ />
    </main>
    </>
  )
}

export default faq

export async function getStaticProps() {
  // Fetch items data from an API or database
  const faqs = [
    {
        id: 1,
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience.",
        category: "Option 1"
    },
    {
        id: 2,
        question : "What if I couldn’t implement the design myself? Will you help me after that?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience.",
        category: "Option 2"
    },
    {
        id: 3,
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience.",
        category: "Option 2"
    },
    {
        id: 4,
        question : "What if I don’t like the design? How many options do I get?",
        answer : "Studio Stunnit is a multidisciplinary design firm envisioning interior designs that are unique and spell-binding. Established in 2022, helmed by eminent interior designers in Hyderabad, the studio focuses on crafting a premium style approach-visualising spaces with aesthetic coherence and functional congruity. With 8 years of design experience.",
        category: "Option 3"
    },
];

  return {
    props: {
      faqs,
    },
  };
}