import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import dune_pic from '../../assets/dune.jpg';
import hospital_reception from "../../assets/hospital_reception.jpg";
import dr_grey from '../../assets/dr_grey.jpg';

function DiosdadoDoctors() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [nameWidth, setNameWidth] = useState(0); // Define nameWidth and setNameWidth
  
    const nameRef = useRef(null);
  
    const openModal = (doctor) => {
      setSelectedDoctor(doctor);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedDoctor(null);
    };
  
    useEffect(() => {
      if (selectedDoctor && nameRef.current) {
        setNameWidth(nameRef.current.offsetWidth);
      }
    }, [selectedDoctor]);
  
    const PMSHDoctors = [
      {
        name: "Gomez, Federico C., MD",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Tuesday, Thursday, Saturday: 9AM to 1PM",
        clinic: "Green City Medical Center",
        room: "HMO Office"
      },
      {
        name: "Muñoz, Norman S., MD",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Wednesday: 1PM to 3PM",
        clinic: "Green City Medical Center",
        room: "27"
      },
      {
        name: "Ng, Anthea L., MD, DPCP",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Monday, Wednesday, Friday: 9AM to 1PM",
        clinic: "Green City Medical Center",
        room: "HMO Office"
      },
      {
        name: "Jose, Jhonnathan N., MD",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Tuesday, Thursday: 10AM to 12NN",
        clinic: "Green City Medical Center",
        room: "36"
      },
      {
        name: "Yumang, Gabroiel L., MD, FPCP",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Monday to Saturday: 1PM to 4PM",
        clinic: "Green City Medical Center",
        room: "21"
      },
      {
        name: "Medina, Cromwell P., MD",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Monday and Thursday: 4PM to 7Pm",
        clinic: "Green City Medical Center",
        room: "19"
      },
      {
        name: "De Guzman, Noel D., MD, MHA",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Monday and Wednesday: 1PM to 4PM",
        clinic: "Green City Medical Center",
        room: "19"
      },
      {
        name: "Pantig, Virgilio D., MD, MHA",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Monday and Friday: 1PM to 3PM",
        clinic: "Green City Medical Center",
        room: "18"
      },
      {
        name: "Lopez, John Kenneth M., MD",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Tuesday and Thursday: 4PM to 7PM",
        clinic: "Green City Medical Center",
        room: "10"
      },
      {
        name: "Tayao-Yu, Blessie D., MD, FPCP",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Tuesday, Thursday: 4PM to 6PM",
        clinic: "Green City Medical Center",
        room: "04"
      },
      {
        name: "Guiao, Francisco P., MD, FPCP",
        specialization: "Internal Medicine",
        picture: dune_pic,
        number: "099999999999",
        email: "johndoe@gmail.com",
        sched1: "Saturday: 9AM to 12PM",
        clinic: "Green City Medical Center",
        room: "33"
      },
    ];
  
    const chunkArray = (array, chunkSize) => {
      const chunkedArray = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
      }
      return chunkedArray;
    };
  
    const chunkedDoctors = chunkArray(PMSHDoctors, 5);
  
    return (
      <div>
        <section className='w-full bg-gray-100 p-5 whitespace-nowrap overflow-x-auto'>
          <h1 className='text-gray-800'>DIOSDADO MACAPAGAL MEMORIAL HOSPITAL</h1>
          {chunkedDoctors.map((chunk, index) => (
            <div key={index}>
              {chunk.map((doctor, doctorIndex) => (
                <div
                  key={doctorIndex}
                  className='w-60 h-60 mb-5 text-center inline-block align-top mr-4 cursor-pointer'
                  onClick={() => openModal(doctor)}
                >
                  <img src={doctor.picture} alt={doctor.name} className='w-24 h-24 rounded-full mx-auto mb-3' />
                  <div className="doctor-details">
                    <h2 className='text-lg'>{doctor.name}</h2>
                    <p className='text-sm'>{doctor.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
        
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Doctor Details"
          className="modal w-full h-full flex items-center justify-center"
          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-75"
        >
          {selectedDoctor && (
            <div className='relative w-full h-full'>
              <section className='w-full h-full relative'>
                <img src={hospital_reception} alt='reception of a hospital' className='absolute inset-0 filter blur-sm object-cover w-full h-full' />
  
                <div className='absolute w-9/12 max-w-xl bg-custom-color-2 text-white p-10 rounded-3xl flex items-center justify-center top-1/2 transform -translate-y-1/2 left-[55%] -translate-x-1/2' style={{ left: `calc(60% - ${nameWidth / 2}px)` }}>
                  <div className='translate-x-2/2'>
                    <h1 className='text-2xl'>Clinic Hours:</h1>
                    <p>{selectedDoctor.clinic}</p>
                    <p>{selectedDoctor.sched1}</p>
                    <p>Room: {selectedDoctor.room}</p>
                    <button className='bg-white text-black rounded-2xl w-32 h-8 mr-10 mt-10'>MESSAGE</button>
                    <button className='bg-white text-black rounded-2xl w-32 h-8'>EMAIL</button>
                  </div>
                </div>
  
                <div className='absolute w-75 bg-[#535353] text-white p-5 rounded-3xl flex items-center justify-center top-1/2 transform -translate-y-1/2 left-1/3 transform -translate-x-1/2'>
                  <div className='text-center'>
                    <img ref={nameRef} src={selectedDoctor.picture} className='w-20 h-20 rounded-full object-cover mx-auto mb-4' alt='Dr. Merideth Grey' />
                    <h1 className='text-xl font-bold'>{selectedDoctor.name}</h1>
                    <p>{selectedDoctor.specialization}</p>
                    <p>{selectedDoctor.number}</p>
                    <p>{selectedDoctor.email}</p>
                  </div>
                </div>
              </section>
              <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-red-500 rounded-full p-2'>X</button>
            </div>
          )}
        </Modal>
      </div>
    );
  }

export default DiosdadoDoctors
