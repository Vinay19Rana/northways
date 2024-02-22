import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../Common/Button';
import { motion } from "framer-motion";
import { cardAnimation, textAnimation, topContainerAnimation } from "../utils/animations";
import { useScroll } from '../utils/useScroll';
import { sliderData } from '../../Constants';


const HeroSlider = () => {
    const [element, controls] = useScroll();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper ">
                {sliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='relative w-[100%]' >
                            <img src={item.url} className='object-cover h-[800px] w-[100%] brightness-[30%]' />
                            <div ref={element} className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[40%] text-white '>
                                <motion.h2
                                    variants={cardAnimation}
                                    animate={controls}
                                    transition={{ duration: .5, type: "tween" }}
                                    className='text-4xl md:text-5xl'>
                                    Study in <span className='red'>
                                        {item.heading}
                                    </span>
                                </motion.h2>
                                <motion.h3
                                    variants={cardAnimation}
                                    animate={controls}
                                    transition={{ duration: .5, type: "tween" }}
                                    className='text-xl md:text-3xl lg:text-2xl mt-4'>
                                    {item.subHeading}
                                </motion.h3>
                                <motion.p
                                    variants={cardAnimation}
                                    animate={controls}
                                    transition={{ duration: .5, type: "tween" }}
                                    className='text-base md:text-lg mt-2'>
                                    {item.Description}
                                </motion.p>
                                <Button controls={controls}>{item.buttonText}</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default HeroSlider