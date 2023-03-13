import React from 'react'

export default function NavbarItem({name}) {

  return (
    <div className='grid'>
        <div className='grid text-center uppercase font-medium my-auto text-sm lg:text-lg'>{name}</div>
    </div>
  )
}
