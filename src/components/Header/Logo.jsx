import React, { useRef } from 'react'
import logo from '../../../public/logo.svg'
import longlogo from '../../../public/longlogo.svg'
import { motion } from 'framer-motion'
import { useScroll } from '../utils/useScroll';
import { textAnimation } from '../utils/animations';
import { useNavigate } from 'react-router-dom';
const Logo = ({ type = "short" }) => {
    const navigate = useNavigate()
    const [element, controls] = useScroll();


    return (
        <div ref={element}>
            {type == "short" ?
                <motion.img
                    onClick={() => { navigate('/') }}
                    variants={textAnimation}
                    animate={controls}
                    transition={{ duration: .5, type: "tween" }}
                    src={logo}
                    height={100}
                    width={100}
                    className='cursor-pointer h-16 w-16 md:w-20 md:h-20 '
                /> :
                <motion.img
                    onClick={() => { navigate('/') }}
                    variants={textAnimation}
                    animate={controls}
                    transition={{ duration: .5, type: "tween" }}
                    src={longlogo}
                    height={200}
                    width={350}
                    className='cursor-pointer'
                />
            }
        </div>
    )
}

export default Logo