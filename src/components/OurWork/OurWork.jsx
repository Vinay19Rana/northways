import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


import { Autoplay } from 'swiper/modules';
import Title from '../Common/Title';
import { useScroll } from '../utils/useScroll';
import { motion } from 'framer-motion';
import { fromUp, reasonsAnimation, textAnimation } from '../utils/animations';
const OurWork = () => {
    const [element, controls] = useScroll();
    return (
        <div className='p-[1rem] lg:p-20 text-center m-5' ref={element}>
            <Title text="Our Work" controls={controls} />
            <motion.div
                variants={fromUp}
                animate={controls}
                transition={{ duration: .5, type: "tween" }}>
                <Swiper
                    className="mySwiper mt-10"
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {Array.from({ length: 10 }).map(item => (
                        <SwiperSlide key={item * 12}>
                            <img src="https://www.akaloverseas.com/akal/wp-content/uploads/2019/08/9F.jpg"
                                className='h-[300px] w-[100%] md:px-10' />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </motion.div>
        </div >
    );
}

export default OurWork