import React from 'react';
import background from '../assets/landing-page-bg.png';

const Hero = () => {
    return (
        <div>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={background} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-w">
                   <h1 className="sm:text-9xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4">HEAL.TH</h1>
                    <p className="text-lg text-gray-300 mb-8">Join us in revolutionizing the way individuals engage with healthcare. 
                        Take control of your health with heal.th today.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
