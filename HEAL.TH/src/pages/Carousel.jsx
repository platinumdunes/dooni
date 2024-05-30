import React from 'react';
import { Link } from 'react-router-dom';
import greencity from "../assets/greencity.png";
import diosdado from "../assets/diosdado_transparent.png";
import rosario from "../assets/rosario.jpg";
import pmsh from "../assets/pmsh.jpg";

function Carousel() {
  return (
    <div>
      <section className='w-full h-screen flex flex-col bg-brown'>
        <Link to="/hospitals" className="flex-1 relative h-1/4">
          <img src={greencity} className="w-full h-full object-cover" alt="Greencity"></img>
          <h1 className="absolute top-5 left-10 text-white text-center text-2xl font-bold cursor-pointer">GREEN CITY MEDICAL CENTER</h1>
        </Link>
        <Link to="/hospitals" className="flex-1 relative h-1/4">
          <img src={pmsh} className="w-full h-full object-cover" alt="Pmsh"></img>
          <h1 className="absolute top-5 right-10 text-white text-center text-2xl font-bold cursor-pointer">PAMPANGA MEDICAL SPECIALIST HOSPITAL</h1>
        </Link>
        <Link to="/hospitals" className="flex-1 relative h-1/4">
          <img src={rosario} className="w-full h-full object-cover" alt="Rosario"></img>
          <h1 className="absolute top-5 left-10 text-white text-center text-2xl font-bold cursor-pointer">ROSARIO MEMORIAL HOSPITAL</h1>
        </Link>
        <Link to="/hospitals" className="flex-1 relative h-1/4">
          <img src={diosdado} className="w-full h-full object-cover" alt="Diosdado"></img>
          <h1 className="absolute top-5 right-10 text-white text-center text-2xl font-bold cursor-pointer">DIOSDADO MACAPAGAL MEMORIAL HOSPITAL</h1>
        </Link>
      </section>
    </div>
  );
}

export default Carousel;
