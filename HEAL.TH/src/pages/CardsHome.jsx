import React, { useState } from "react";
import { Link } from 'react-router-dom';
import adhd_pic from '../assets/adhd_pic.png';
import next_icon from '../assets/next.png';
import prev_icon from '../assets/prev.png';

function CardsHome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        {
            title: "Fever",
            description: "brief description test test test test test test test test test",
            section: "Fever"
        },
        {
            title: "Asthma",
            description: "brief description test test test test test test test test test",
        },
        {
            title: "Covid-19",
            description: "brief description test test test test test test test test test",
        },
        {
            title: "Whooping Cough (Pertussis)",
            description: "brief description test test test test test test test test test",
        },
        {
            title: "Influenza (Flu)",
            description: "brief description test test test test test test test test test",
        },
        {
            title: "Pneumonia",
            description: "brief description test test test test test test test test test",
        },
        {
            title: "Diabetes Mellitus (Diabetes)",
            description: "brief description test test test test test test test test test",
        },
    ];

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
    };

    const slideWidth = 300; // Adjust this value based on your card width and margins

    return (
        <div className="max-w-[1010px] mx-auto mt-[50px] relative w-full h-screen">
            <div className="flex overflow-x-hidden">
                <div
                    className="flex transition-transform duration-500 ease"
                    style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}>
                    {cards.map((card, index) => (
                        <div key={index} className="flex-none w-[30%] mx-[5px]">
                            <div className="max-w-xs bg-custom-color-2 border border-green-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to={`/health-conditions/${card.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                                    <img className="rounded-t-lg" src={adhd_pic} alt="" />
                                    <div className="p-4">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {card.title}
                                        </h5>
                                        <p className="mb-3 font-normal text-gray-700">
                                            {card.description}
                                        </p>
                                        <Link to="/health-conditions" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                            View more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button id="prevButton" className="absolute top-1/3 transform -translate-y-1/2 left-0 ml-1 bg-transparent border-none text-black cursor-pointer" onClick={handlePrevSlide}>
                <img src={prev_icon} alt="" className="w-[50px]" />
            </button>
            <button id="nextButton" className="absolute top-1/3 transform -translate-y-1/2 right-0 mr-1 bg-transparent border-none text-black cursor-pointer" onClick={handleNextSlide}>
                <img src={next_icon} alt="" className="w-[50px]" />
            </button>
        </div>
    );
}

export default CardsHome;
