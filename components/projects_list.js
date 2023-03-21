import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Modal from './modal';


export default function ProjectsList({projects}) {


    const data = projects
    const [currentProject, setCurrentProject] = useState(data[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
      }
    
      function handleCloseModal() {
        setIsOpen(false);
      }


    return (
        <>
        <Modal isOpen={isOpen} onClose={handleCloseModal} title="Delete project">
        <p>Are you sure you want to delete this project ?</p>
      </Modal>
            <div className='flex justify-end'>
            <Link href={`/projects/${currentProject.id}/edit`}><div className='text-xl font-bold text-primary mr-2 cursor-pointer'>Edit</div></Link>
            <div onClick={handleOpenModal} className='text-xl font-bold mr-5 text-dangerColor cursor-pointer'>Delete</div>
            </div>
        <div className="relative grid bg-center h-[400px]">
            {/* <Image src={image2} alt='place' className='opacity-0 mx-auto cover max-h-screen max-w-screen' /> */}
            <div className='w-full h-full grid my-auto'>
                <div className='m-auto'>
                    <AnimatePresence className=' '>
                        {/* {currentProject.map((item) => ( */}
                        <motion.div

                            key={currentProject.id}
                            // style={{ x: -100 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            // exit={{ y:50 }}
                            // transition={{ duration: 2 }}
                            className=' grid h-full'
                        >
                            <Image src={currentProject.primaryImage} className='h-[400px] w-screen mx-auto  object-cover' />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* section heading start */}
            <div className=" absolute grid w-full m-auto ">
                <div className="m-auto grid">
                    <div className="max-w-[400px] mx-auto uppercase mt-10 font-bold text-3xl text-onPrimary" >Projects </div>
                </div>
            </div>
            {/* section heading end */}

            <div className='absolute bottom-5 w-full'>

                <div className=' flex justify-between px-5 sm:px-10 lg:px-0 mx-auto max-w-[1000px]'>
                        <div className='ml-3 text-3xl font-medium underline text-onPrimary'>
                            {currentProject.title}
                        </div>
                    <div className='ml-auto mr-3'>
                        <div className='grid grid-flow-col gap-2'>
                            <div className=' m-auto cursor-pointer' onClick={() => setCurrentProject(data[prev(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowBackIosNew className='text-2xl hover:3xl md:text-4xl mr-4 text-onPrimary font-bold ' />
                            </div>
                            <div className='m-auto text-xl text-onPrimary font-medium'>
                                {(currentIndex + 1) + '/' + data.length}
                            </div>
                            <div className='m-auto cursor-pointer' onClick={() => setCurrentProject(data[next(currentIndex, setCurrentIndex, data)])}>
                                <MdArrowForwardIos className='text-2xl hover:3xl md:text-4xl ml-4 text-onPrimary font-bold' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}


function next(index, setCurrentIndex, fullData) {
    if (index < fullData.length - 1) {
        setCurrentIndex(index + 1)
        return index + 1
    }
    else {
        setCurrentIndex(0)
        return 0
    }
}

function prev(index, setCurrentIndex, fullData) {
    console.log('prev called', index, fullData)
    if (index > 0) {
        setCurrentIndex(index - 1)
        return index - 1
    }
    else {
        setCurrentIndex(fullData.length - 1)
        return fullData.length - 1
    }
}