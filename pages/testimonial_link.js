import React from 'react'
import Navbar from '../components/navbar'
import AddTestimonialLink from '../components/add-testimonial-link'
import apiUrl from '../config'

const testimonials = ({links}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <AddTestimonialLink links={links} />
    </main>
    </>
  )
}

export default testimonials

export async function getStaticProps() {
  try {
    let res = await fetch(`${apiUrl}/testimonial-youtube-links`);
    let data = await res.text();
    return {
        props : {
          links: data,
        }
    };
  } catch (error) {
    console.error(error)

    return {
      props : {
          links : [],
          error : error
      }
  };
  }
}