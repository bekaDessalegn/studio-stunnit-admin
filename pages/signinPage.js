import React from 'react'
import logo from '../public/images/Asset_9.png'
import Image from 'next/image'
import Textformfield from '../components/textformfield'
import PasswordTF from '../components/passwordTF'
import Button from '../components/button'
import Link from 'next/link'

const signinPage = () => {
  return (
    <div className='flex h-screen w-screen'>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <div className=''>
                <Image className='max-w-[350px]' src={logo} />
            </div>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center mr-40'>
            <div className='flex-col text-center'>
                <p className='text-4xl'>HELLO</p>
                <p className='font-bold text-4xl'>ADMIN</p>
                <div className='text-left mt-16'>
                <p className='text-gray mb-2'>Please sign in to your account</p>
                <Textformfield label='Username' />
                <PasswordTF label='Password' />
                <div className='mt-10'>
                <Link href="/"><Button name='Sign in' /></Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default signinPage