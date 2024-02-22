import React, { useRef } from 'react'
import Card from '../Common/Card'
import Study from '../../assets/canada-study.jpeg'
import Ilets from '../../assets/ilets.jpeg'
import Travel from '../../assets/travel.jpeg'
import { useScroll } from '../utils/useScroll'
import { cardAnimation, textAnimation } from '../utils/animations'
import { motion } from 'framer-motion';
import Title from '../Common/Title'
const Services = () => {
    const [element, controls] = useScroll();
    return (
        <div className='p-5 bg-gray-200 text-center mt-10' ref={element}>
            <Title text="Services" controls={controls} />
            <div className='flex flex-col gap-5 mt-4 md:px-20 lg:flex-row lg:pt-8 lg:p-10' >

                <Card
                    variants={cardAnimation}
                    animate={controls}
                    image={Study}
                    service="Student Visa"
                    content="It will change your life. You’ll come back a new person.” For years, the benefits of study abroad have been described in these words." />

                <Card
                    variants={cardAnimation}
                    animate={controls}
                    image={Ilets}
                    service="IELTS & PTE Coaching"
                    content="We are running IELTS Coaching classes, Spoken English Classes. We are also preparing students for Embassy Interviews." />

                <Card
                    variants={cardAnimation}
                    animate={controls}
                    image={Travel}
                    service="Travel Arrangements"
                    content="We arrange travel tickets to our students and other clients. We arrange Air Tickets for Students, provide Airport Pick up" />

            </div>

        </div>
    )
}

export default Services