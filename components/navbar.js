import Image from 'next/image'
import React from 'react'
import NavbarItem from './navbarItem'
import logo from '../public/SVG/Asset_26.svg'
import { FiMenu } from 'react-icons/fi';
import LeftRightAligner from './left-right-aligner'
import Link from 'next/link'
import Button from './button'
import { useState, useEffect } from 'react';
import Modal from './modal';
import { Drawer } from '@mui/material';
import { useRouter } from 'next/router'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [drawerState, toggleDrawer] = useState(false)
    let currentPage = ''
    const router = useRouter()
    useEffect(() => {
        currentPage = router.pathname
    }, [router])

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} title="Log out">
                <p>Are you sure you want to logout ?</p>
            </Modal>
            <LeftRightAligner>
                <div className='px-4'>
                    <div className=' py-3 grid grid-flow-col border-b'>
                        {/* logo start */}
                        <div className='mr-auto my-auto grid'>
                            <Link href="/"><Image className='max-w-[70px]' src={logo} /></Link>
                        </div>
                        {/* nav items start */}
                        <div className=' ml-auto my-auto grid grid-flow-col gap-8'>
                            <div className='my-auto grid-flow-col gap-8 hidden md:grid'>
                                <NavbarItem name='Projects' path="/" />
                                <NavbarItem name='Testimonials' path="/testimonials" />
                                <NavbarItem name='Testimonial Link' path="/testimonial_link" />
                                <NavbarItem name='FAQ' path="/faq" />
                            </div>
                            <div className='invisible md:visible w-full'>
                                <Button onClick={handleOpenModal} name='log out' />
                            </div>
                            <div className='my-auto grid md:hidden cursor-pointer'>
                                <div onClick={() => toggleDrawer(true)}>
                                    <FiMenu className='w-[40px] h-[40px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Drawer
                        anchor='right'
                        open={drawerState}
                        onClose={() => toggleDrawer(false)}
                    >
                        <div className='flex flex-col justify-between h-full pb-8 px-8 pr-16'>
                            <div className='space-y-5'>
                                <div className='py-6 border-b'>
                                    <Link href="/"><Image className='max-w-[70px]' src={logo} /></Link>
                                </div>
                                <div className='grid-flow-row grid space-y-2'>
                                    <Link href='/'>
                                        <div className={router.pathname == '/' ? 'text-[18px] py-1  text-primary' : 'text-[18px] py-1 '}>
                                            Projects
                                        </div>
                                    </Link>
                                    <Link href='/testimonials'>
                                        <div className={router.pathname == '/testimonials' ? 'text-[18px] py-1  text-primary' : 'text-[18px] py-1 '}>
                                            Testimonials
                                        </div>
                                    </Link>
                                    <Link href='/testimonial_link'>
                                        <div className={router.pathname == '/testimonial_link' ? 'text-[18px] py-1  text-primary' : 'text-[18px] py-1 '}>
                                            Testimonial Link
                                        </div>
                                    </Link>
                                    <Link href='/faq'>
                                        <div className={router.pathname == '/faq' ? 'text-[18px] py-1  text-primary' : 'text-[18px] py-1 '}>
                                            FAQ&apos;s
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div onClick={() => {
                                    toggleDrawer(false);
                                    handleOpenModal();
                                }} className='bg-accentColor w-full py-2 text-center text-white font-bold rounded-lg cursor-pointer'>
                                    Logout
                                </div>
                            </div>
                        </div>
                    </Drawer>
                </div>
            </LeftRightAligner>
        </div>
    )
}
