import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import AddFAQ from '../../components/add-faq'
import FaqList from '../../components/faq_list'
import apiUrl from '../../config'
import LeftRightAligner from '../../components/left-right-aligner'

const faq = ({ faqs }) => {
  const [allFaqs, setAllFaqs] = useState(faqs)
  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <FaqList faqs={allFaqs} />
          <div className='h-16'></div>
          <AddFAQ addFaq={faq => {
            // console.log(allFaqs)
            setAllFaqs([...allFaqs, faq])
            // console.log(allFaqs)
          }} />
        </LeftRightAligner>
        <div className='h-8'></div>
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