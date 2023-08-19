import React from 'react'
import EditFAQ from '../../../components/edit-faq'
import LeftRightAligner from '../../../components/left-right-aligner'
import Navbar from '../../../components/navbar'
import apiUrl from '../../../config'

const editFaq = ({ faq }) => {
  
  return (
    <>
      <main className='' >
        <Navbar />
        <LeftRightAligner>
          <div className='h-14'></div>
          <EditFAQ faq={faq} />
          <div className='h-14'></div>
        </LeftRightAligner>
      </main>
    </>
  )
}

export default editFaq

export async function getServerSideProps({ params }) {
  try {
    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch(`${apiUrl}/faqs?id=${params.id}`, {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    const faq = JSON.parse(data);
  
    return {
      props: {
        faq:faq[0],
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        faq: null,
        error: error
      }
    };
  }
}