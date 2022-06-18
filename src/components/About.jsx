import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Daniel, thanks for coming. Please take a look around!</p>
            </div>
            <div>
              <p>I am a self driven third level student, with an underlying curiosity to constantly improve and learn. My main passion lies in technology and business, which led me to undertake my degree in computer science and business
                in Trinity College Dublin. I have a strong foundation in many programming languages. Through college I learned Java, C# and C. In addition, through 
                the startup I have been involved in in the last year 'YourTutor', I have adapted to other languages such as React, HTML and CSS. 
                By working with YourTutor it also built my knowledge of business. Apart from my field of work, I am said to be a strong team player, as well as having leadership and problem solving skills.  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;