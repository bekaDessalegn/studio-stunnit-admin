import React from 'react'
import Navbar from '../../../components/navbar'
import EditFAQ from '../../../components/edit-faq'
import apiUrl from '../../../config'

const editFaq = ({faq}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <EditFAQ faq={faq}/>
    </main>
    </>
  )
}

export default editFaq

export async function getStaticPaths() {
    // Fetch the list of item IDs from an API or database
    const ids = [];

    try {
      let res = await fetch(`${apiUrl}/faqs`);
      let faqs = await res.json();
      const id = faqs.map((faq) => faq.id)
      ids.push(...id)
    } catch (error) {
      console.error(error)
    }
  
    // Map the IDs to the required format for Next.js dynamic routes
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
     
     let response = await fetch(`${apiUrl}/faqs?id=${params.id}`, { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.text();
     const faqs = JSON.parse(data);
     const faq = faqs.find( function (faq) {
      return faq.id.toString() === params.id;
      })
     return {
      props : {
        faq,
      }
  };
  } catch (error) {
    console.error(error)

    return {
      props : {
          faqs : [],
          error : error
      }
  };
  }
  }