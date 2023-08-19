import React, { useState } from 'react'
import AddTestimonialLink from '../components/add-testimonial-link'
import LeftRightAligner from '../components/left-right-aligner'
import Navbar from '../components/navbar'
import apiUrl from '../config'

const testimonials = ({ links }) => {

  const  [allLinks, setAllLinks] = useState(links)

  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <AddTestimonialLink setAllLinks={setAllLinks} links={allLinks} removeLink={(id) => setAllLinks(allLinks.filter(t => t.id !== id))} addLinks={testimonialLink => setAllLinks([...allLinks, testimonialLink])} />
        </LeftRightAligner>
      </main>
    </>
  )
}

export default testimonials

export async function getServerSideProps() {
  try {
    let res = await fetch(`${apiUrl}/testimonial-youtube-links`);
    let data = await res.json();
    return {
      props: {
        links: data,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        links: [],
        error: error
      }
    };
  }
}