import Image from 'next/image'
import React from 'react'
import NavbarItem from './navbarItem'
import logo from '../public/SVG/Asset_26.svg'
import Button from './button'
import { FiMenu } from 'react-icons/fi';
import LeftRightAligner from './left-right-aligner'


export default function Navbar() {
    return (
        <LeftRightAligner>
            <div className=' py-3 grid grid-flow-col '>
                {/* logo start */}
                <div className='mr-auto my-auto grid'>
                    <Image className='max-w-[70px]' src={logo} />
                </div>
                {/* nav items start */}
                <div className=' ml-auto my-auto grid grid-flow-col gap-8'>
                    <div className='my-auto grid-flow-col gap-8 hidden md:grid'>
                        <NavbarItem name='Projects' />
                        <NavbarItem name='Testimonials' />
                        <NavbarItem name='FAQ' />
                    </div>
                    <div className='my-auto grid md:hidden'>
                        <FiMenu className='w-[40px] h-[40px]' />
                    </div>

                </div>
            </div>
        </LeftRightAligner>
    )
}
