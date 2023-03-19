import React from 'react'
import Navbar from '../../../components/navbar'
import EditTestimonial from '../../../components/edit-testimonials';

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
    const testimonials = [
        {
          id: 1,
            customerName: "K Murthy",
            position: "Director Manager, K Murthy",
            imageUrl: "/images/Asset 17.png",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
            rating: 5
        },
        {
          id: 2,
            customerName: "Aruna",
            position: "Director Manager, K Murthy",
            imageUrl: "/images/Asset 12.png",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
            rating: 4
        },
        {
          id: 3,
            customerName: "Sanjeev",
            position: "Director Manager, K Murthy",
            imageUrl: "/images/Asset 18.png",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similiqu", 
            rating: 4
        },
        {
          id: 4,
            customerName: "Punith",
            position: "Director Manager, K Murthy",
            imageUrl: "/images/Asset 19.png",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
            rating: 5
        }
      ];

    const testimonial = testimonials.find( function (testimonial) {
        return testimonial.id.toString() === params.id;
    })
  
    return {
      props: {
        testimonial,
      },
    };
  }