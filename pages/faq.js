import React from 'react'
import Navbar from '../components/navbar'
import AddFAQ from '../components/add-faq'
import FaqList from '../components/faq_list'

const faq = () => {
  return (
    <>
      <main className='' >
        <Navbar />
        <FaqList />
        <AddFAQ />
    </main>
    </>
  )
}

export default faq