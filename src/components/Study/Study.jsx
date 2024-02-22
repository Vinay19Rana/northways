import React from 'react'
import { studyData } from '../../Constants'

const Study = () => {
    return (
        <div className='py-10 lg:px-40 md:20'>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl lg:text-4xl items-center mt-10 relative inline-flex '>
                    Study In Abroad
                    <span className='inline-block top-[100%] left-0 absolute h-[4px] bg-red-400 w-[100%]'></span>
                </h1>
            </div>

            <div className='m-10 mx-10 lg:mx-[20%] text-sm leading-6'>
                <p>
                    “It will change your life. You’ll come back a new person.” For years, the benefits of study abroad have been described in these words. Everyone in the study abroad field believed it could greatly impact a student’s life, but the exact long-term benefits were unknown—until now.
                </p>
                <p>
                    The first large-scale survey to explore the long-term impact of study abroad on a student’s personal, professional, and academic life shows that study abroad positively and unequivocally influences the career path, world-view, and self-confidence of students.
                </p>
                <p>
                    The benefit a student can expect to gain from joining a study abroad program goes far beyond the curriculum material s/he will study. The classroom teaching style will be different, so the student is forced to develop their ability to learn. The lifestyle and social rhythms within the walls of the university or educational center will be different, forcing the student to expand their social skills in order to get assistance from tutors, teachers’ assistants, school staff, classmates, as well as to make friends among their peers. This interaction will also be the basis from which the study abroad program’s chief benefit to humanity will emerge, as we will explore later. Full participation in a study abroad program produces new and better opportunities for success as a result.
                </p>
                <p>
                    There are several reasons that Akal Overseas Consultancy knows why students should prefer study abroad. If you really want to know why you should go for it, AOCS is here to acknowledge you in the best possible way. Reaching to any part of the country is just a click away, but sensing the energy, scents, sights and sounds live is an enticing experience and nothing can replace it.
                </p>
                {studyData?.map((item) => (
                    <div key={item.title} className='mt-10'>
                        <h1 className='text-3xl'>{item.title}</h1>
                        <p className='mt-5'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Study