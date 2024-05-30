import React from 'react';
import gtsdPic from '../assets/gtsdImage.png';
import { Link } from 'react-router-dom';

function GoToSelfD() {
  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div className="w-screen h-full">
          <img className=" w-full h-full object-cover object-center" src={gtsdPic} alt=''></img>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 p-8">
        <div className='absolute top-10 '>
          <h1 className="text-7xl font-bold text-red text-center">SELF DIAGNOSIS</h1>
        </div>
        <div className='absolute w-80 text-center top-15 '>
          <p className="-mt-20 text-2xl">Discover tailored insights into your health with our convenient self-diagnosis tool, guiding you towards informed decisions for your well-being.</p>
        </div>
        <div className="absolute mt-7 bottom-10 right-10">
          <Link to='/self-diagnosis'>
            <button className="bg-custom-color-2 text-white py-2 px-4 rounded">Get Self-Diagnosed &gt;</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default GoToSelfD;
