import React from 'react'
import Navbar from '../../../components/navbar'
import EditTestimonial from '../../../components/edit-testimonials';
import apiUrl from '../../../config';

export default function editTestimonial({testimonial}) {

  return (
    <>
      <main className='' >
        <Navbar />
        <EditTestimonial testimonial={testimonial} />
    </main>
    </>
  )
}

export async function getStaticPaths() {
   const ids = [];

    try {
      let res = await fetch(`${apiUrl}/testimonials`);
      let testimonials = await res.json();
      const id = testimonials.map((testimonial) => testimonial.id)
      ids.push(...id)
    } catch (error) {
      console.error(error)
    }

    const paths = ids.map((id) => ({
      params: { id: id.toString()},
    }));
  
    return { paths, fallback: true };
  }

export async function getStaticProps({ params }) {
  console.log(params)

  try{
    let headersList = {
      "Accept": "*/*",
     }
     
     let response = await fetch(`${apiUrl}/testimonials`, { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.text();
     const testimonials = JSON.parse(data);
     const testimonial = testimonials.find( function (testimonial) {
      return testimonial.id.toString() === params.id;
      })

     return {
      props : {
        testimonial: testimonial,
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