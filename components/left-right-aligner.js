import React from 'react'

export default function LeftRightAligner({children}) {
  return (
    <div className='grid mx-3 sm:mx-10 md:mx-5 lg:mx-18 xl:mx-auto max-w-[1200px]'>
        {children}
    </div>
  )
}
