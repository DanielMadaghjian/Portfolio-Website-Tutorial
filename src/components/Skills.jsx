import React from 'react'
import ReactLogo from '../assets/react.png';
import C from '../assets/c.png';
import csharp from '../assets/csharp.png';
import java from '../assets/java.jpg';
import HTML from '../assets/html.png';
import css from '../assets/css.png'
import leader from '../assets/leader.jpg';
import problemSolving from '../assets/problem solving.png';
import publicSpeaking from '../assets/public speaking.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactLogo} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={csharp} alt="HTML icon" />
                <p className='my-4'>CSHARP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={C} alt="HTML icon" />
                <p className='my-4'>C</p>
            </div>          
        </div>
        
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>

        </div>
        {/* <div>
            <p className='py-4'> Soft Skills</p>
           
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={leader} alt="HTML icon" />
                <p className='my-4'>Leadership</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={publicSpeaking} alt="HTML icon" />
                <p className='my-4'>Public Speaking</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={problemSolving} alt="HTML icon" />
                <p className='my-4'>Problem Solving</p>
            </div>
        </div> */}
    </div>
  </div>
  )
}

export default Skills