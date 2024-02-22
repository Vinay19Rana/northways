import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Card = ({ image, service, content, variants, animate }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="blog-container"
            variants={variants}
            animate={animate}
            transition={{ duration: .5, type: "tween" }}
        >
            <div className='m-5' >
                <div className='relative bg-black h-[content-fit] rounded-lg'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className='h-[100%] w-[100%] text-white rounded-lg flex justify-center items-center bg-[rgba(6,6,6,0.46)] absolute cursor-pointer'>
                        {!isHovered ? (<h1 className='text-3xl text-center md:text-5xl tracking-widest transition'>{service}</h1>) :
                            (<p className='text-white w-[100%] h-[100%] text-center m-[auto] md:text-2xl flex items-center rounded-lg text-lg transition bg-[rgba(6,6,6,0.46)] p-10 '>{content}</p>)}
                    </div>
                    <img className="object-fill object-center rounded-lg" src={image} alt="services image" />
                </div>
            </div>
        </motion.div>
    )
}

export default Card