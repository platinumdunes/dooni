import React from 'react';
import CardsHome from './CardsHome';

const Cards_Home = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl mt-12 text-white">HEALTH CONDITIONS</h2> {/* Adjusted margin */}
            <div className="mt-[-20px]"> {/* Added negative margin to the container */}
                <CardsHome />
            </div>
        </div>
    );
}

export default Cards_Home;
