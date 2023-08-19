import React, { useState } from 'react'
import AddTestimonial from '../../components/add-testimonials'
import Navbar from '../../components/navbar'
import TestimonialsList from '../../components/testimonials_list'
import apiUrl from '../../config'

const testimonials = ({testimons}) => {
  const [testimonials, setTestimonials]=useState(testimons)
  return (
    <>
      <main className='' >
        <Navbar />
        <TestimonialsList testimonials={testimonials}/>
        <AddTestimonial setTestimonials={setTestimonials}/>
    </main>
    </>
  )
}

export default testimonials

export async function getServerSideProps() {
  try {
    let headersList = {
      "Accept": "*/*",
    }
    let response = await fetch(`${apiUrl}/testimonials`, {
      method: "GET",
      headers: headersList
    });
    let data = await response.text();
    const testimonials = JSON.parse(data);

    return {
      props: {
        testimons: testimonials,
      }
    };
  } catch (error) {
    console.error(error)
    return {
      props: {
        testimons: [],
        error: error
      }
    };
  }
}