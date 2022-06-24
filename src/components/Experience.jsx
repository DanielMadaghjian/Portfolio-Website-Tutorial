import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p> <br/>
            <div>
                <p className='py-4 text-2xl font-bold'>Chief Technology Officer</p>
                <p className='font-bold'>YourTutor</p>
                <p>Sep 2021 - Present</p>
                <div>
                    <p>I am currently working on a Start-Up with two fellow colleagues. The company is called ‘YourTutor’, 
                        which matches Tutors with secondary school students. Some of my responsibilities and work include:</p>
                        <ul style={{ listStyleType: 'decimal' }}>
                            <li>Developing various features on the website and acquiring skills in front-end design, 
                                such as displaying reviews and profiles of our tutors on the home page</li>
                                <li>Implemented a referral system in the aim of growing the number of customers, 
                                    achieving the goal of customer acquisitions we set out from the beginning</li>
                                    <li>Presented a successful pitch of the start up to investors, 
                                        which secured us a position in an incubator program, broadening my public speaking skills</li>
                                        <li>Constantly developing my knowledge of web development using Laravel, HTML/CSS and JavaScript, 
                                            programming languages I picked up and enjoy myself</li>
                        </ul>
                </div>
            </div>
            
            
        </div>

        
            
        
    </div>
    </div>
  )
}

export default Experience