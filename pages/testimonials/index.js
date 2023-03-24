import React from 'react'
import Navbar from '../../components/navbar'
import AddTestimonial from '../../components/add-testimonials'
import TestimonialsList from '../../components/testimonials_list'
import apiUrl from '../../config'

const testimonials = ({testimonials}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <TestimonialsList testimonials={testimonials}/>
        <AddTestimonial />
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
        props : {
          testimonials,
        }
    };
  } catch (error) {
    console.error(error)

    return {
      props : {
        testimonials : [],
          error : error
      }
  };
  }
}