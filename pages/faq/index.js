import React, { useState } from 'react'
import AddFAQ from '../../components/add-faq'
import FaqList from '../../components/faq_list'
import LeftRightAligner from '../../components/left-right-aligner'
import Navbar from '../../components/navbar'
import apiUrl from '../../config'

const faq = ({ faqs }) => {
  const [allFaqs, setAllFaqs] = useState(faqs)
  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <FaqList faqs={allFaqs} removeFaq={(id) => setAllFaqs(allFaqs.filter(t => t.id !== id))} />
          <div className='h-16'></div>
          <AddFAQ addFaq={faq => {setAllFaqs([...allFaqs, faq])}} />
        </LeftRightAligner>
        <div className='h-8'></div>
      </main>
    </>
  )
}

export default faq

export async function getServerSideProps() {
  try {
    let res = await fetch(`${apiUrl}/faqs`);
    let faqs = await res.json();
    return {
      props: {
        faqs,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        faqs: [],
        error: error
      }
    };
  }
}