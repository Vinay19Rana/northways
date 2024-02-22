import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Title from '../Common/Title';
import { useScroll } from '../utils/useScroll';
import { motion } from 'framer-motion';
import { fromUp, textAnimation, videoAnimation } from '../utils/animations';

const Testimonials = () => {
    const [element, controls] = useScroll();
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, Company ABC',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Designer, XYZ Designs',
            comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 8,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 9,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 10,
            name: 'David Johnson',
            position: 'Developer, Tech Corp',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="py-10 bg-gray-100">
            <div ref={element} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Title text="Testimonials" controls={controls} />
                <div className="mt-5">
                    <Swiper
                        className="mySwiper"
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {testimonials.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    variants={fromUp}
                                    animate={controls}
                                    transition={{ duration: .5, type: "tween" }}
                                    key={testimonial.id} className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <blockquote>
                                            <div className="text-xl font-medium text-gray-900">{testimonial.comment}</div>
                                        </blockquote>
                                        <div className="mt-6 flex items-center">
                                            <img className="h-12 w-12 rounded-full mr-4" src={testimonial.imageUrl} alt={testimonial.name} />
                                            <div>
                                                <p className="text-md font-medium text-gray-900">{testimonial.name}</p>
                                                <p className="text-md text-gray-500">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
