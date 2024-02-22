import React from 'react'
import { services } from '../../Constants'

const ServicesPage = () => {
    return (
        <div className='py-10 lg:px-40 md:20'>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl lg:text-4xl items-center mt-10 relative inline-flex '>
                    Our Services
                    <span className='inline-block top-[100%] left-0 absolute h-[4px] bg-red-400 w-[100%]'></span>
                </h1>
            </div>

            <div className='m-10 mx-10 lg:mx-[20%] text-sm leading-6'>
                <p>
                    With more than 10 years of experience in placing thousands of students in various institutions overseas, we understand the challenges faced by those aspiring to study overseas. Keeping in mind the needs of such students, we have designed our processes in a manner that every single task starting from admission to visa to making travel arrangements is smooth and hassle free.
                </p>

                <div className='mt-10 text-2xl text-center red font-bold'>
                    <h2>“Our mission aims at a renewed commitment to excellence.”</h2>
                </div>
                {services?.map((item) => (
                    <div key={item.title} className='mt-10'>
                        <h1 className='text-3xl'>{item.title}</h1>
                        <p className='mt-5'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesPage