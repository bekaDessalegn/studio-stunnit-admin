import React from 'react'
import Navbar from '../../components/navbar'
import AddTestimonial from '../../components/add-testimonials'
import TestimonialsList from '../../components/testimonials_list'

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
  // Fetch items data from an API or database
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
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similiqu", rating: 4
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

  return {
    props: {
      testimonials,
    },
  };
}