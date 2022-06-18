import React, {useState} from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import Popup from './Popup';
import CovidAppImg from '../assets/CovidApp.png';

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work!</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-10'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${CovidAppImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Covid-19 App
              </span>
              <div className='pt-8 text-center'>
                
                  <button onClick={togglePopup} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Description
                  </button>
                  {isOpen && <Popup
                         content={<>
                         <div className='font-bold'>
                            <p className='text-2xl text-orange-300 '>Covid-19 App</p>
                            <p className='text-gray-700'>As part of a first year project, 
                            I worked alongside 3 fellow students in implementing a Covid-19 App, 
                            which received a first class honors (94%). The app displayed up to date 
                            information on Covid-19 cases drawing a focus on states in America, written in Java and Processing. 
                            We provided graphs and visualizations along with various pieces of information with the sole emphasis of
                             ensuring user interface was a priority, allowing the user to interact with the app through queries and filtering etc. </p>
                        </div>
                    </>}
                    handleClose={togglePopup}
                 />}
               
                <a href='https://photos.app.goo.gl/3dhXv4qWVkswdec86'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/DanielMadaghjian/Covid-19-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://photos.app.goo.gl/3dhXv4qWVkswdec86'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/DanielMadaghjian/Covid-19-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default Work;