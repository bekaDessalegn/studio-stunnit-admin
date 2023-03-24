import React from 'react'
import Navbar from '../../components/navbar'
import AddFAQ from '../../components/add-faq'
import FaqList from '../../components/faq_list'
import apiUrl from '../../config'

const faq = ({faqs}) => {
  return (
    <>
      <main className='' >
        <Navbar />
        <FaqList faqs={faqs}/>
        <AddFAQ />
    </main>
    </>
  )
}

export default faq

export async function getStaticProps() {
    try {
      let res = await fetch(`${apiUrl}/faqs`);
      let faqs = await res.json();
      return {
          props : {
            faqs,
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