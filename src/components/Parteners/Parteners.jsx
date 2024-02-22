import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Title from '../Common/Title';
import { useScroll } from '../utils/useScroll';
import { motion } from 'framer-motion';
import { fromUp } from '../utils/animations';
const Parteners = () => {
    const [element, controls] = useScroll();
    const partenes = [
        {
            "id": 1,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/47.jpg"
        },
        {
            "id": 2,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/48.jpg"
        },
        {
            "id": 3,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/49.jpg"
        },
        {
            "id": 4,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/61.png"
        },
        {
            "id": 5,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/71.jpg"
        },
        {
            "id": 6,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/1.png"
        },
        {
            "id": 7,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/2.png"
        },
        {
            "id": 8,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/3.png"
        },
        {
            "id": 9,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/4.png"
        },
        {
            "id": 10,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/5.png"
        },
        {
            "id": 11,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/11.jpg"
        },
        {
            "id": 12,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/12.jpg"
        },
        {
            "id": 13,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/13.jpg"
        },
        {
            "id": 14,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/14.jpg"
        },
        {
            "id": 15,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/15.jpg"
        },
        {
            "id": 16,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/17.jpg"
        },
        {
            "id": 17,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/18.jpg"
        },
        {
            "id": 18,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/19.jpg"
        },
        {
            "id": 19,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/20.jpg"
        },
        {
            "id": 20,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/21.jpg"
        },
        {
            "id": 21,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/22.jpg"
        },
        {
            "id": 22,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/23.jpg"
        },
        {
            "id": 23,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/24.jpg"
        },
        {
            "id": 24,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/25.jpg"
        },
        {
            "id": 25,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/26.jpg"
        },
        {
            "id": 26,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/27.jpg"
        },
        {
            "id": 27,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/28.jpg"
        },
        {
            "id": 28,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/29.jpg"
        },
        {
            "id": 29,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/30.jpg"
        },
        {
            "id": 30,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/31.jpg"
        },
        {
            "id": 31,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/32.jpg"
        },
        {
            "id": 32,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/33.jpg"
        },
        {
            "id": 33,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/34.jpg"
        },
        {
            "id": 34,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/35.jpg"
        },
        {
            "id": 35,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/36.jpg"
        },
        {
            "id": 36,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/37.jpg"
        },
        {
            "id": 37,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/38.jpg"
        },
        {
            "id": 38,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/39.jpg"
        },
        {
            "id": 39,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/40.jpg"
        },
        {
            "id": 40,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/41.jpg"
        },
        {
            "id": 41,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/42.jpg"
        },
        {
            "id": 42,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/43.jpg"
        },
        {
            "id": 43,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/44.jpg"
        },
        {
            "id": 44,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/45.jpg"
        },
        {
            "id": 45,
            "src": "https://www.akaloverseas.com/akal/wp-content/uploads/2019/07/46.jpg"
        }
    ]
    return (
        <div ref={element} className='p-10 lg:pl-40 text-center'>
            <Title text="Our Partners" />
            <motion.div
                variants={fromUp}
                animate={controls}
                transition={{ duration: .5, type: "tween" }}
            >
                <Swiper
                    className="mySwiper mt-10 mb-10"
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {partenes.map(testimonial => (
                        <SwiperSlide key={testimonial.id}>
                            <img className="h-[200px] w-[300px] mr-4" src={testimonial.src} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Parteners