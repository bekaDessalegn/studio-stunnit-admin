import React from 'react';
import EditTestimonial from '../../../components/edit-testimonials';
import LeftRightAligner from '../../../components/left-right-aligner';
import Navbar from '../../../components/navbar';
import apiUrl from '../../../config';

export default function editTestimonial({ testimonial }) {

  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <div className='h-14'></div>
          <EditTestimonial testimonial={testimonial} />
          <div className='h-14'></div>
        </LeftRightAligner>
      </main>
    </>
  )
}

export async function getServerSideProps({ params }) {

  try {
    const ids = [];

    let res = await fetch(`${apiUrl}/testimonials`);
    let testimonials_list = await res.json();
    const id = testimonials_list.map((testimonial) => testimonial.id)
    ids.push(...id)

    const paths = ids.map((id) => ({
      params: { id: id.toString() },
    }));

    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch(`${apiUrl}/testimonials`, {
      method: "GET",
      headers: headersList
    });


    let data = await response.text();
    const testimonials = JSON.parse(data);
    const testimonial = testimonials.find(function (testimonial) {
      return testimonial.id.toString() === params.id;
    })

    return {
      props: {
        testimonial: testimonial,
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