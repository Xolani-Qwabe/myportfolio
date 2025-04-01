// HeroGrid.tsx
// This component is a grid layout that displays a About me section 
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function AboutGrid() {
  return (
    <div className="w-[80vw] h-[80vh] flex items-center justify-center  rounded-lg shadow-lg ">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 w-full h-full">
        <div className="flex flex-col md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 bg-blue-500 p-4 shadow-lg">
          <div className="border-b-2 self-start">
            <h1 className="text-3xl sm:text-5xl md:text-3xl lg:text-5xl font-bold">01.</h1>
          </div>
          <div className="flex-grow flex items-center">
            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl font-extrabold">WeThinkCode <span className='text-5xl md:text-5xl lg:text-9xl'>Alumni</span> </h1>
          </div>
        </div>

        <div className="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2  flex items-center justify-center overflow-hidden shadow-lg">
          <Image
            src="/flo.jpg"
            alt="flo"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />

        </div>
        <div className="md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3 bg-green-400 flex shadow-lg p-4">
          <div className='border-b-2 self-start'>
            <h1 className="text-3xl md:text-5xl  font-bold">02.</h1>
          </div>
          <div className='flex-grow flex items-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-extrabold">Full-Stack <span className='text-3xl md:text-5xl lg:text-5xl '>Web3 Dev</span> </h1>
          </div>
        </div>
        <div className="md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-4  flex items-center justify-center overflow-hidden shadow-lg">
          <Image
            src="/waves.webp"
            alt="waves"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />


        </div>
        <div className="md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4 bg-purple-500 flex shadow-lg p-4">
          <div className='border-b-2 self-start text-2xl md:text-3xl font-bold'>
            03.
          </div>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-5xl  font-extrabold inline-block'>Hire Me</h1>
            <Link href={'/contact'} className='flex items-center '>
              <div className='text-xl md:text-3xl font-extrabold text-green-500 hover:text-green-700 transition px-4 duration-300 bg-black self-end'>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutGrid;