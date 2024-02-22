import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";

import Logo from './Logo'
import TopInfo from './TopInfo'
import { motion } from 'framer-motion';
import { useScroll } from '../utils/useScroll';
import { textAnimation } from '../utils/animations';
import { navItems } from '../../Constants';



const Header = () => {
    const [element, controls] = useScroll();
    const [isShow, setIsShow] = useState(false)
    function menuHandler() {
        setIsShow(prev => !prev)
    }


    return (
        <>
            <TopInfo />
            <nav class="bg-white border-gray-200 border-b-2 ">
                <div ref={element} class="md:px-16 relative px-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <Logo />
                    <motion.button
                        variants={textAnimation}
                        animate={controls}
                        transition={{ duration: .5, type: "tween" }}
                        type="button" onClick={menuHandler} class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
                        <HiMenuAlt1 color='red' size={40} className='font-bold ' />
                    </motion.button>
                    <div class={`${!isShow ? "hidden" : "smooth-open absolute top-[80%] left-0 z-[9999]"} w-full lg:block lg:w-auto`} id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
                            {navItems.map((items) => (
                                <motion.li
                                    variants={textAnimation}
                                    animate={controls}
                                    transition={{ duration: .5, type: "tween" }}
                                    key={items.link}
                                    className='text-lg '
                                > <NavLink
                                    to={items.link}
                                    onClick={isShow ? menuHandler : () => { }}
                                    className={({ isActive }) =>
                                        isActive ? "text-red-700" : "text-slate-700 hover:text-red-700"
                                    }
                                >
                                        {items.text}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* </div> */}
        </>
    )
}

export default Header