import React from 'react'
import { aboutData } from '../../Constants'

const About = () => {
    return (
        <div className='py-10 lg:px-40 md:20'>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl lg:text-4xl items-center mt-10 relative inline-flex '>
                    Company overview
                    <span className='inline-block top-[100%] left-0 absolute h-[4px] bg-red-400 w-[100%]'></span>
                </h1>
            </div>

            <div className='m-10 mx-10 lg:mx-[20%] text-sm leading-6'>
                <p>
                    The philosophy of the firm is to provide competent, ethical legal services at reasonable fees, and to represent the client to the fullest extent possible, always operating within appropriate rules and regulations and showing respect for the clients. Our extensive knowledge and vast experience in general immigration, business immigration is second to none.
                </p>
                <p>
                    We offer assistance to corporate and individuals in the field of immigration and cater to various markets including Australia, Canada, United Kingdom, United States of America, New Zealand, Italy, France and Germany. We operate through a network of business associates who are qualified immigration lawyers/certified immigration attorneys thus enabling our clients an access to seamless immigration service’s all over the world.
                </p>
                <p>
                    More importantly, as a firm handling a high volume of cases, we have acquired a level of expertise in this field, which enables us to find answers to virtually any conceivable problem. As experienced practitioners we are always up to date on the latest developments. We provide each case with individual attention. The firm takes pride in its ability to work closely with clients and to address and meet individual needs. We are responsive to our clients needs and understand how important each situation is.
                </p>
                <p>
                    The combination of specialized knowledge, Superior technical capabilities, expertise and comprehensive support facilities, enables our firm to maintain its high success rate in the processing of all immigration cases.

                </p>
                <div className='mt-20 text-2xl text-center red font-bold'>
                    <h2>“Our mission aims at a renewed commitment to excellence.”</h2>
                </div>
                {aboutData?.map((item) => (
                    <div key={item.title} className='mt-10'>
                        <h1 className='text-3xl'>{item.title}</h1>
                        <p className='mt-5'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default About