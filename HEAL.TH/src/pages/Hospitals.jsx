import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TbLogin2 } from "react-icons/tb"; // Import yung icon from react 
import greenCity from '../assets/green-city.jpg';
import pmsh from '../assets/pmsh.jpg';
import rosario from '../assets/rosario.jpg';
import diosdado from '../assets/diosdado.jpg';


function Hospitals() {
  // Emergency Hotline PopUp Functions
  const [showGreencityPopup, setShowGreencityPopup] = useState(false);
  const [showPMSHPopup, setShowPMSHPopup] = useState(false);
  const [showRosarioPopup, setShowRosarioPopup] = useState(false);
  const [showDiosdadoPopup, setshowDiosdadoPopup] = useState(false);

  const toggleGreencityPopup = () => {
    setShowGreencityPopup(!showGreencityPopup);
  };

  const togglePMSHPopup = () => {
    setShowPMSHPopup(!showPMSHPopup);
  };

  const toggleRosarioPopup = () => {
    setShowRosarioPopup(!showRosarioPopup);
  };

  const toggleDiosdadoPopup = () => {
    setshowDiosdadoPopup(!showDiosdadoPopup);
  };

  // Ambulance PopUp Functions
  const [showGreencityAmbulance, setShowGreencityAmbulance] = useState(false);
  const [showPMSHAmbulance, setShowPMSHAmbulance] = useState(false);
  const [showRosarioAmbulance, setShowRosarioAmbulance] = useState(false);
  const [showDiosdadoAmbulance, setshowDiosdadoAmbulance] = useState(false);

  const toggleGreencityAmbulance = () => {
    setShowGreencityAmbulance(!showGreencityAmbulance);
  };

  const togglePMSHAmbulance = () => {
    setShowPMSHAmbulance(!showPMSHAmbulance);
  };

  const toggleRosarioAmbulance = () => {
    setShowRosarioAmbulance(!showRosarioAmbulance);
  };

  
  const toggleDiosdadoAmbulance = () => {
    setshowDiosdadoAmbulance(!showDiosdadoAmbulance);
  };

  const greencityHotlineInfos = [
    {name: "EMERGENCY HOTLINE:", number: "(045) 649-8700"},
    {name: "TRUNKLINE:", number: "(045) 649-8701 / (045) 649-8702"},
    {name: "GLOBE NUMBERS:", number: "0917-159-4730 / 0917-110-9972"},
    {name: "SUN/SMART NUMBERS:", number: "0933-828-6298 / 0933-828-6299"},
  ]

  const pmshHotlineInfo = [ 
    {name: "EMERGENCY HOTLINE:", number: "(045) 649-8700"},
    {name: "TRUNKLINE:", number: "(045) 649-8701 / (045) 649-8702"},
    {name: "GLOBE NUMBERS:", number: "0917-159-4730 / 0917-110-9972"},
    {name: "SUN/SMART NUMBERS:", number: "0933-828-6298 / 0933-828-6299"},
  ]

  const rosarioHotlineInfo = [ 
    {name: "EMERGENCY HOTLINE:", number: "(045) 649-8700"},
    {name: "TRUNKLINE:", number: "(045) 649-8701 / (045) 649-8702"},
    {name: "GLOBE NUMBERS:", number: "0917-159-4730 / 0917-110-9972"},
    {name: "SUN/SMART NUMBERS:", number: "0933-828-6298 / 0933-828-6299"},
  ]

  const diosdadoHotlineInfo = [ 
    {name: "EMERGENCY HOTLINE:", number: "(045) 649-8700"},
    {name: "TRUNKLINE:", number: "(045) 649-8701 / (045) 649-8702"},
    {name: "GLOBE NUMBERS:", number: "0917-159-4730 / 0917-110-9972"},
    {name: "SUN/SMART NUMBERS:", number: "0933-828-6298 / 0933-828-6299"},
  ]

  return (
    <div>
      {/* Green City */}
      <section className='relative w-full h-screen overflow-hidden' id="greenCitySection">
        <div className='absolute z-0 w-full h-[660px] top-0 blur-[3px] brightness-[0.8]'>
            <img src={greenCity} alt='green city' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute z-1 mt-5 ml-[7%] text-white'>
          <h1 className='block font-sans text-6xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900'>
            GREEN CITY MEDICAL CENTER
          </h1>
          <p className='text-xl absolute top-[120px] left-0'>
            Located at: Jose Abad Santos Avenue, Barangay Dolores 2000 San Fernando, Philippines Central Luzon
          </p>
        </div>
        <div className="flex w-max gap-4 relative ml-[95px] mt-[250px]">
            <div className="ButtonWrapper">
                <Link to="/hospitals/greencity-doctors">
                    <button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px]">
                        See List of Doctors
                    </button>
                </Link>
                <button onClick={toggleGreencityPopup} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showGreencityPopup ? 'bg-white text-black' : ''}`}>
                    Emergency Hotline
                </button>
                {showGreencityPopup && (
                    <div className="absolute top-1/2 left-[250%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[65vh] border-4 border-[#627254] rounded-2xl text-center">
                        <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                            List of Contacts
                        </h1>
                        {greencityHotlineInfos.map((gCHotlineInfo, index) => (
                            <div key={index} className='my-2'>
                                <h2 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-inherit'>
                                    {gCHotlineInfo.name}
                                </h2>
                                <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit'>
                                    {gCHotlineInfo.number}
                                </p>
                            </div>
                        ))}
                        <button className='absolute top-5 right-5' onClick={toggleGreencityPopup}>
                            <TbLogin2 size={25} />
                        </button>
                    </div>
                )}
                <button onClick={toggleGreencityAmbulance} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showGreencityAmbulance ? 'bg-white text-black' : ''}`}>
                    Ambulance
                </button>
                {showGreencityAmbulance && (
                    <div className="absolute top-1/2 left-[250%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[50vh] border-4 border-[#627254] rounded-2xl text-center">
                        <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
                            Ambulance
                        </h1>
                        <button className='absolute top-5 right-5' onClick={toggleGreencityAmbulance}>
                            <TbLogin2 size={25} />
                        </button>
                    </div>
                )}
            </div>
        </div>
      </section>


      {/* PMSH */}
      <section className='relative w-full h-screen overflow-hidden' id="pmshSection">
        <div className='absolute z-0 w-full h-[660px] top-0 blur-[3px] brightness-[0.8]'>
          <img src={pmsh} alt='PMSH' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute z-1 mt-5 ml-[30%] text-white'>
          <h1 className='block font-sans text-6xl antialiased font-semibold leading-tight tracking-normal'>
            PAMPANGA MEDICAL SPECIALIST <span className="ml-[640px]">HOSPITAL</span>
          </h1>
          <p className='text-xl absolute top-[185px] left-[100px]'>
            Located at: XJF4+4GG, Jose Abad Santos Ave, Guagua, Pampanga, Philippines Central Luzon
          </p>
        </div>
        <div className="relative ml-[1030px] mt-[350px]">
          <Link to="/hospitals/pmsh-doctors">
            <button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px]">
              See List of Doctors
            </button>
          </Link>
          {/* PMSH HOTLINE BUTTON */}
          <button onClick={togglePMSHPopup} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showPMSHPopup ? 'bg-white text-black' : ''}`}>
            Emergency Hotline
          </button>
          {showPMSHPopup && (
            <div className="absolute top-[10%] left-[-110%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[65vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                List of Contacts
              </h1>
              {pmshHotlineInfo.map((pmshHLeInfo, index) => (
                <div key={index} className='my-2'>
                  <h2 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal'>
                    {pmshHLeInfo.name}
                  </h2>
                  <p className='block font-sans text-base antialiased font-light leading-relaxed'>
                    {pmshHLeInfo.number}
                  </p>
                </div>
              ))}
              <button className='absolute top-5 right-5' onClick={togglePMSHPopup}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}

          {/* PMSH AMBULANCE BUTTON */}
          <button onClick={togglePMSHAmbulance} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showPMSHAmbulance ? 'bg-white text-black' : ''}`}>
            Ambulance
          </button>
          {showPMSHAmbulance && (
            <div className="absolute top-[10%] left-[-110%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[50vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                PMSH Ambulance
              </h1>
              <button className='absolute top-5 right-5' onClick={togglePMSHAmbulance}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 3 Rosario */}
      <section className='relative w-full h-screen overflow-hidden' id="rosarioSection">
        <div className='absolute z-0 w-full h-[660px] top-0 blur-[3px] brightness-[0.8]'>
          <img src={rosario} alt='Rosario Hospital' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute z-1 mt-5 ml-[7%] text-white'>
          <h1 className='block font-sans text-6xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900'>
            ROSARIO MEMORIAL HOSPITAL
          </h1>
          <p className='text-xl absolute top-[120px] left-0'>
            Located at: XJF4+4GG, Jose Abad Santos Ave, Guagua, Pampanga, Philippines Central Luzon
          </p>
        </div>
        <div className="relative ml-[95px] mt-[280px]">
          <Link to="/hospitals/rosario-doctors">
            <button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px]">
              See List of Doctors
            </button>
          </Link>
          {/* ROSARIO HOTLINE BUTTON */}
          <button onClick={toggleRosarioPopup} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showRosarioPopup ? 'bg-white text-black' : ''}`}>
            Emergency Hotline
          </button>
          {showRosarioPopup && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[65vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                List of Contacts
              </h1>
              {rosarioHotlineInfo.map((info, index) => (
                <div key={index} className='my-2'>
                  <h2 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal'>
                    {info.name}
                  </h2>
                  <p className='block font-sans text-base antialiased font-light leading-relaxed'>
                    {info.number}
                  </p>
                </div>
              ))}
              <button className='absolute top-5 right-5' onClick={toggleRosarioPopup}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}
          {/* ROSARIO AMBULANCE BUTTON */}
          <button onClick={toggleRosarioAmbulance} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showRosarioAmbulance ? 'bg-white text-black' : ''}`}>
            Ambulance
          </button>
          {showRosarioAmbulance && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[50vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                Rosario Ambulance
              </h1>
              <button className='absolute top-5 right-5' onClick={toggleRosarioAmbulance}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 4 Diosdado */}
      <section className='relative w-full h-screen overflow-hidden' id="diosdadoSection">
        <div className='absolute z-0 w-full h-[660px] top-0 blur-[3px] brightness-[0.8]'>
          <img src={diosdado} alt='Diosdado Memorial Hospital' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute z-1 mt-5 ml-[20%] text-white'>
          <h1 className='block font-sans text-6xl antialiased font-semibold leading-tight tracking-normal'>
            DIOSDADO MACAPAGAL MEMORIAL <span className="ml-[740px]">HOSPITAL</span>
          </h1>
          <p className='text-xl absolute top-[185px] left-[200px]'>
            Located at: XJF4+4GG, Jose Abad Santos Ave, Guagua, Pampanga, Philippines Central Luzon
          </p>
        </div>
        <div className="relative ml-[1030px] mt-[350px]">
          <Link to="/hospitals/diosdado-doctors">
            <button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px]">
              See List of Doctors
            </button>
          </Link>
          {/* DIOSDADO HOTLINE BUTTON */}
          <button onClick={toggleDiosdadoPopup} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showDiosdadoPopup ? 'bg-white text-black' : ''}`}>
            Emergency Hotline
          </button>
          {showDiosdadoPopup && (
            <div className="absolute top-[10%] left-[-110%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[65vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                List of Contacts
              </h1>
              {diosdadoHotlineInfo.map((info, index) => (
                <div key={index} className='my-2'>
                  <h2 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal'>
                    {info.name}
                  </h2>
                  <p className='block font-sans text-base antialiased font-light leading-relaxed'>
                    {info.number}
                  </p>
                </div>
              ))}
              <button className='absolute top-5 right-5' onClick={toggleDiosdadoPopup}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}
          {/* DIOSDADO AMBULANCE BUTTON */}
          <button onClick={toggleDiosdadoAmbulance} className={`bg-custom-color-2 text-white font-bold py-2 px-4 rounded block mt-6 w-[250px] ${showDiosdadoAmbulance ? 'bg-white text-black' : ''}`}>
            Ambulance
          </button>
          {showDiosdadoAmbulance && (
            <div className="absolute top-[10%] left-[-110%] transform -translate-x-1/2 -translate-y-1/2 z-2 bg-white flex flex-col justify-center items-center w-[650px] h-[50vh] border-4 border-[#627254] rounded-2xl text-center">
              <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal">
                DIOSDADO Ambulance
              </h1>
              <button className='absolute top-5 right-5' onClick={toggleDiosdadoAmbulance}>
                <TbLogin2 size={25} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Hospitals;