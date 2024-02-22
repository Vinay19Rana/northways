import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import ContactImg from '../../assets/contact.jpeg'
import { address, email, mapLoaction, phone } from '../../Constants'

const Contact = () => {
    return (
        <div className='py-10 lg:px-40 md:20 bg-[rgba(200,200,200,0.4)]' >
            <div className='flex items-center justify-center '>
                <h1 className='text-4xl items-center mt-10 relative inline-flex '>
                    Contact Us
                    <span className='inline-block top-[100%] left-0 absolute h-[4px] bg-red-400 w-[100%]'></span>
                </h1>
            </div>
            <div className='m-20 mx-[5%] lg:flex-row text-sm leading-6 flex flex-col items-center gap-20'>
                <div>
                    <img src={ContactImg} alt="" height={600} width={600} className='rounded-xl' />
                </div>
                <div className='text-lg lg:text-3xl md:text-2xl flex flex-col gap-10 lg:gap-[50px]'>
                    <div className='flex items-center gap-5'>
                        <FaLocationDot className='red' />
                        <a href={mapLoaction} className='text-black font-medium hover:underline'>
                            {address}
                        </a>
                    </div>
                    <div className='flex items-center gap-5'>
                        <IoCallSharp className='red' />
                        <a href={`tel:${phone}`} className='text-black font-medium hover:underline'>
                            {`+91-${phone}`}
                        </a>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GrMail className='red' />
                        <a href={`mailto:${email}`} className='text-black font-medium hover:underline'>
                            {email}
                        </a>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact