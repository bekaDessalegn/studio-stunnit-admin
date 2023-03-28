import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import AddTestimonial from '../../components/add-testimonials'
import TestimonialsList from '../../components/testimonials_list'
import apiUrl from '../../config'
import LeftRightAligner from '../../components/left-right-aligner'

const testimonials = ({ testimonials }) => {
  const [allTestimonials, setAllTestimonials] = useState(testimonials)
  return (
    <>
      <main className='' >
        <Navbar />
        <TestimonialsList testimonials={allTestimonials} />
        <div className='h-8'></div>
        <LeftRightAligner>
          <AddTestimonial addTestimonial={testimonial => setAllTestimonials([...allTestimonials, testimonial])} />
        </LeftRightAligner>
        <div className='h-8'></div>
      </main>
    </>
  )
}

export default testimonials

export async function getStaticProps() {

  try {
    let res = await fetch(`${apiUrl}/testimonials`);
    let testimonials = await res.json();
    return {
      props: {
        testimonials,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        testimonials: [],
        error: error
      }
    };
  }
}