import React from 'react'
import { GoHorizontalRule } from "react-icons/go";
import { motion } from "framer-motion";
import { useScroll } from '../utils/useScroll';
import { reasonsAnimation, textAnimation, videoAnimation } from "../utils/animations";
import Title from '../Common/Title';
const AboutSection = () => {
    const [element, controls] = useScroll();
    return (
        <div ref={element} className='w-[100%] mt-11 flex-col flex items-center justify-around p-5 md:p-20 gap-2 lg:gap-16 lg:mt-3 lg:flex-row lg:p-40'>
            <motion.div
                variants={videoAnimation}
                animate={controls}
                transition={{ duration: .5, type: "tween" }}
                className='h-[500px] w-[100%] about-bg rounded-lg lg:flex-1'>
            </motion.div>
            <motion.div
                variants={reasonsAnimation}
                animate={controls}
                transition={{ duration: .5, type: "tween" }}
                className='flex-1 flex justify-center item-center flex-col p-5 gap-1 lg:gap-5'>
                <h4 className='text-xl md:text-3xl lg:text-lg flex items-center uppercase '>
                    <GoHorizontalRule size={60} className='mb-1 red' />
                    our progress</h4>
                <Title text="About Us" controls={controls} />
                <p className='font-thin leading-relaxed  text-lg md:text-2xl lg:text-lg' >
                    The philosophy of the firm is to provide competent, ethical legal services at reasonable fees, and to represent the client to the fullest extent possible, always operating within appropriate rules and regulations and showing respect for the clients. Our extensive knowledge and vast experience in general immigration, business immigration is second to none.
                </p>
                {/* <p className='font-thin leading-relaxed text-lg md:text-2xl lg:text-lg'>
                    We offer assistance to corporate and individuals in the field of immigration and cater to various markets including Australia, Canada, United Kingdom, United States of America, New Zealand, Italy, France and Germany. We operate through a network of business associates who are qualified immigration lawyers/certified immigration attorneys thus enabling our clients an access to seamless immigration service’s all over the world.</p> */}
                <button className='bg-black p-5 md:p-7 text-xl md:text-2xl lg:p-3 mt-10 lg:mt-7 w-[70%] self-center rounded-lg text-white'>Read More</button>
            </motion.div>

        </div>

    )
}

export default AboutSection