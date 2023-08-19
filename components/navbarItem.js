import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NavbarItem({ name, path }) {

  const router = useRouter()
  const currentPageDesign = ' font-medium'
  return (
    <Link href={path}>
      <div className='grid relative'>
        <div className={'grid text-center uppercase my-auto text-sm lg:text-lg '+ (path === router.pathname ? currentPageDesign :'')}>{name}</div>
        {path === router.pathname ? <div className='absolute bottom-[-7px] w-full h-[3px] bg-primary rounded'></div> : null}
        <div className='opacity-0 hover:opacity-100 absolute w-full h-full'>
          <div className='absolute bottom-[-5px] h-[7px] w-full'></div>
          <div className='absolute bottom-[-7px] w-full h-[3px] bg-primary rounded'></div>
        </div>
      </div>
    </Link>
  )
}
