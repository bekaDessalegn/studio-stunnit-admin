import React from 'react'
import Navbar from '../../../components/navbar'
import EditFAQ from '../../../components/edit-faq'

const editFaq = ({faq}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <EditFAQ faq={faq}/>
    </main>
    </>
  )
}

export default editFaq

export async function getStaticPaths() {
    // Fetch the list of item IDs from an API or database
    const ids = [1, 2, 3, /* ... */, 100];
  
    // Map the IDs to the required format for Next.js dynamic routes
    const paths = ids.map((id) => ({
      params: { id: id.toString()},
    }));
  
    return { paths, fallback: true };
  }

export async function getStaticProps({ params }) {
    console.log(params)
    // Fetch the item data for the specified ID from an API or database
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

    const faq = faqs.find( function (faq) {
        return faq.id.toString() === params.id;
    })
  
    return {
      props: {
        faq,
      },
    };
  }