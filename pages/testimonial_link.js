import React, { useState } from 'react'
import Navbar from '../components/navbar'
import AddTestimonialLink from '../components/add-testimonial-link'
import apiUrl from '../config'
import LeftRightAligner from '../components/left-right-aligner'

const testimonials = ({ links }) => {

  const  [allLinks, setAllLinks] = useState(links)

  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <AddTestimonialLink links={allLinks} addLinks={testimonialLink => setAllLinks([...allLinks, testimonialLink])} />
        </LeftRightAligner>
      </main>
    </>
  )
}

export default testimonials

export async function getStaticProps() {
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