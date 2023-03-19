import React from 'react'
import TestimonialCard from './testimonial-card'
import LeftRightAligner from './left-right-aligner'
import Heading from './heading'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Carousel } from 'flowbite-react'
import { useState } from 'react';
import Modal from './modal';

export default function TestimonialsList({testimonials}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <>
    <Modal isOpen={isOpen} onClose={handleCloseModal} title="Delete link">
        <p>Are you sure you want to delete this testimonial ?</p>
      </Modal>
    <LeftRightAligner>
            <div className='grid gap-6 my-16'>

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
                                            <TestimonialCard onClick={handleOpenModal} testimonial={testimonial} />
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