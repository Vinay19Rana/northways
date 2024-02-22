import React from 'react'
import { motion } from 'framer-motion';
import { textAnimation } from '../utils/animations';

const Title = ({ text, controls }) => {

    return (
        <motion.h2
            variants={textAnimation}
            animate={controls}
            transition={{ duration: .5, type: "tween" }}
            className='text-4xl md:text-6xl lg:text-4xl pt-1 pb-3 font-semibold '>{text}</motion.h2>
    )
}

export default Title