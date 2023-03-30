import React, { useState } from 'react'
import TestimonialCard from './testimonial-card'
import LeftRightAligner from './left-right-aligner'
import Heading from './heading'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Carousel } from 'flowbite-react'

export default function TestimonialsList({ testimonials, removeTestimonial }) {
    return (
        <>
            <LeftRightAligner>
                <div className='grid mt-16'>

                    <div className='grid text-center gap-2'>
                        <Heading heading='Testimonials' />
                    </div>
                    <div className='grid gap-2'>

                        <div className='h-[900px] md:h-80 grid'>

                            <Carousel slide={false} leftControl={<MdArrowBackIosNew className='text-4xl text-darkGray hover:text-onSurface' />} rightControl={<MdArrowForwardIos className='text-4xl text-darkGray hover:text-onSurface' />} className='m-auto' indicators={false}>

                                {
                                    testimonials.map(
                                        (testimonial, index) =>
                                        (
                                            <div key={index} className="w-[92%] md:w-[80%] xl:w-[70%] max-w-[1126px] md:h-[300px]">
                                                <TestimonialCard testimonial={testimonial} removeTestimonial={removeTestimonial} />
                                            </div>
                                        )
                                    )
                                }
                            </Carousel>
                        </div>
                    </div>

                </div>
            </LeftRightAligner>
        </>
    )
}