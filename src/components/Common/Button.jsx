import React from 'react'
import { motion } from 'framer-motion';
import { cardAnimation } from '../utils/animations';

const Button = ({ children, controls }) => {
    return (
        <motion.button
            variants={cardAnimation}
            animate={controls}
            transition={{ duration: .5, type: "tween" }}
            class="mt-10 md:text-xl bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
            {children}
        </motion.button>

    )
}

export default Button