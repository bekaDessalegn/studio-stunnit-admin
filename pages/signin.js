import React, { useState } from 'react'
import logo from '../public/images/Asset_9.png'
import Image from 'next/image'
import Textformfield from '../components/textformfield'
import PasswordTF from '../components/passwordTF'
import auth from "../auth.json"
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'

let router
const signin = () => {
    router = useRouter()
    const [isValid, setIsValid] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    return (
        <div className='flex h-screen w-screen justify-center'>
            <div className='w-1/2 h-full hidden md:flex justify-center items-center'>
                <div className=''>
                    <Image className='max-w-[350px]' src={logo} />
                </div>
            </div>
            <div className='md:w-1/2 h-full flex justify-center items-center lg:mr-40'>
                <div className='flex-col text-center'>
                    <p className='text-4xl'>HELLO</p>
                    <p className='font-bold text-4xl'>ADMIN</p>
                    <div className='text-left mt-16'>
                        <p className='text-gray mb-2'>Please sign in to your account</p>
                        <form onSubmit={submit}>
                            <Textformfield label='Username' />
                            <PasswordTF label='Password' />
                            <div className='text-red-400 mt-10 w-full text-center mb-2 font-medium'>{isValid ? "" : "Invalid Credentials"}</div>
                            <button type='submit' disabled={isSubmitting} className='w-full bg-accentColor disabled:bg-gray-300 disabled:text-gray-600 text-primaryColor rounded-lg cursor-pointer  py-2 text-center'>
                                {isSubmitting ? "Please Wait..." : "Sign In"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )

    function submit(event) {
        event.preventDefault()
        setIsSubmitting(true)
        if (event.target.username.value === auth.username && event.target.password.value === auth.password) {
            setIsValid(true)
            cookieCutter.set('signed-in', true)
            router.replace('/')
        } else {
            setIsSubmitting(false)
            setIsValid(false)
        }
    }
}

export default signin