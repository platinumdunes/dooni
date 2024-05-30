import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import no_pic from '../../assets/no_picture.jpg';
import hospital_reception from "../../assets/hospital_reception.jpg";
import dr_grey from '../../assets/dr_grey.jpg';

function RosarioDoctors() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [nameWidth, setNameWidth] = useState(0);

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
            name: "Dr. Almalyn Sevilla., MD, FPCP, FPCC",
            specialization: "Internal Medicine",
            picture: no_pic,
            number: "09605649473",
            email: "",
            sched1: "Tuesday: 2PM to 5PM",
            clinic: "Rosario Memorial Hospital",
            room: "130"
        },
        {
            name: "Dr. John Carlo Camagay., MD",
            specialization: "Internal Medicine",
            picture: no_pic,
            number: "N/A",
            email: "",
            sched1: "Monday to Sunday: 1PM to 3PM",
            clinic: "Rosario Memorial Hospital",
            room: "N/A"
        },
        {
            name: "Dr. Carl Genesis David., MD",
            specialization: "Internal Medicine",
            picture: no_pic,
            number: "N/A",
            email: "",
            sched1: "Wednesday: 1PM to 4PM",
            clinic: "Rosario Memorial Hospital",
            room: "N/A"
        },
        {
            name: "Dr. John Levi Daluz., RMT, MD, FPCP, FPCC, FAsC",
            specialization: "Internal Medicine",
            picture: no_pic,
            number: "N/A",
            email: "",
            sched1: "Tuesday and Friday: 10AM to 12PM",
            clinic: "Rosario Memorial Hospital",
            room: "N/A"
        },
        {
            name: "Dr. Roberto Yabut., MD",
            specialization: "Internal Medicine",
            picture: no_pic,
            number: "N/A",
            email: "",
            sched1: "Tuesday and Friday: 8AM to 5PM",
            clinic: "Rosario Memorial Hospital",
            room: "N/A"
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
            <section className='w-full h-screen bg-gray-100 p-5 overflow-x-auto'>
                <h1 className='text-gray-800'>ROSARIO MEMORIAL HOSPITAL</h1>
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
                                    <h1 className='text-lg font-bold w-60 mb-5'>{selectedDoctor.name}</h1>
                                    <p className='inline-block align-top'>{selectedDoctor.specialization}</p>
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

export default RosarioDoctors;
