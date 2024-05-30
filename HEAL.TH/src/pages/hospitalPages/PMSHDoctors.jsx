import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import dune_pic from '../../assets/dune.jpg';
import hospital_reception from "../../assets/hospital_reception.jpg";
import no_pic from '../../assets/no_picture.jpg';
import drCapati from "../../assets/drCapati.jpg"
import drCromwell from "../../assets/drCromwell.jpg"
import drYu from "../../assets/drYu.jpg"

Modal.setAppElement('#root'); // Important for accessibility

function PMSHDoctors() {
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
        name: "Reyner Capati, MD",
        specialization: "Internal Medicine",
        picture: drCapati,
        number: "09463301837",
        email: "",
        sched1: "Tuesday: 1PM to 3Pm",
        clinic: "PMSH",
        room: "123"
    },
    {
        name: "Cromwell Medina, MD",
        specialization: "Internal Medicine",
        picture: drCromwell,
        number: "09190697812",
        email: "",
        sched1: "Monday to Friday: 9AM to 12NN",
        clinic: "PMSH",
        room: "214"
    },
    {
        name: "Blessie Yu, MD",
        specialization: "Internal Medicine",
        picture: drYu,
        number: "09279746745",
        email: "",
        sched1: "Monday and Thursday: 9AM to 12NN",
        clinic: "PMSH",
        room: "118"
    },
    {
        name: "Cozet Capati, MD",
        specialization: "Internal Medicine",
        picture: no_pic,
        number: "09069132680",
        email: "",
        sched1: "Saturday: 11AM to 1PM",
        clinic: "PMSH",
        room: "218"
    },
    {
        name: "Robert Magcalas, MD",
        specialization: "Internal Medicine",
        picture: no_pic,
        number: "09998743959",
        email: "",
        sched1: "Monday, Tuesday, Thursday & Saturday: 9AM to 12NN",
        clinic: "PMSH",
        room: "219"
    },
    {
        name: "Yancel Donna Mercado, MD",
        specialization: "Internal Medicine",
        picture: no_pic,
        number: "09566901648",
        email: "",
        sched1: "Tuesday: 1PM to 4PM",
        clinic: "PMSH",
        room: "221"
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
        <h1 className='text-gray-800'>PAMPANGA MEDICAL SPECIALIST HOSPITAL</h1>
        {chunkedDoctors.map((chunk, index) => (
          <div key={index}>
            {chunk.map((doctor, doctorIndex) => (
              <div
                key={doctorIndex}
                className='w-60 h-60 mb-5 text-center inline-block align-top mr-4 cursor-pointer'
                onClick={() => openModal(doctor)}
              >
                <img src={doctor.picture} alt={doctor.name} className='w-24 h-24 rounded-full object-cover mx-auto mb-4' />
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

export default PMSHDoctors;
