import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useScroll } from '../utils/useScroll';
import { motion } from 'framer-motion';
import { fromUp, textAnimation } from '../utils/animations';
import { details } from '../../Constants';


const TopInfo = () => {
    const [element, controls] = useScroll();
    return (
        <div ref={element} className='flex flex-col items-center justify-center gap-3 lg:gap-10 p-3 bg-sky-300 md:flex-row'>
            {details.map((item) => (
                <motion.a
                    variants={textAnimation}
                    animate={controls}
                    transition={{ duration: .5, type: "tween" }}
                    className='flex items-center gap-2 text-md text-black cursor-pointer'
                    key={item.text}
                    href={item.href}
                >
                    {<item.icon />} {item.text}
                </motion.a>
            ))}
        </div>
    )
}

export default TopInfo