import React from 'react'
import Navbar from '../components/navbar'
import AddTestimonial from '../components/add-testimonials'
import TestimonialsList from '../components/testimonials_list'

const testimonials = () => {
  return (
    <>
      <main className='' >
        <Navbar />
        <TestimonialsList />
        <AddTestimonial />
    </main>
    </>
  )
}

export default testimonials