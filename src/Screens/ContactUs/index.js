import React, { useRef, useState } from 'react'
import Topbar from '../../Components/Topbar'
import HeadSection from './HeadSection'
import IrrParallelogram from '../../Components/ContactUsLayout/ContactLayout'
import ContactUsImg from '../../assets/img/contactUs.png'

const ContactUs = () => {


    const [selectedItem, setSelectedItem] = useState("Auswählen...");
    const [isOpen, setIsOpen] = useState(false);
    const selectBoxRef = useRef(null);

    const items = [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' },
        { id: 'item4', title: 'Item 4' },
        { id: 'item5', title: 'Item 5' }
    ];

    const handleItemClick = (title) => {
        setSelectedItem(title);
        setIsOpen(false);
    };

    const handleBlur = (event) => {
        if (!selectBoxRef.current.contains(event.relatedTarget)) {
            setIsOpen(false);
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="main-bg">
            <div className="top-bg">
                <Topbar />
                <div className="container">
                    <HeadSection />
                </div>
            </div>
            <div className='container'>
                <p className=" fs-7vw text-center text-white mx-auto w-18ch mt-4" >Online Booking</p>
                <div className="col-12 contactborder position-relative">

                    <IrrParallelogram>
                        <div className="row pad">
                            <div className="col-12 col-md-6 frst_sec">
                                <p className="fs-3vw text-white" >Booking</p>
                                <p className='font-poppins fs-16 text-white-80'>Sed ut perspiciatis unde </p>
                                <label className='form-label text-white fw-500 font-poppins fs-14' >First Label</label>
                                <input type="text" className='form-control bg-transparent text-white input-feild font-poppins fw-400' />
                                <label className='form-label text-white fw-500 font-poppins fs-14' >Email address</label>
                                <input type="text" className='form-control bg-transparent text-white input-feild font-poppins fw-400' />
                                <label className='form-label text-white fw-500 font-poppins fs-14' >Phone Number</label>
                                <input type="text" className='form-control bg-transparent text-white input-feild font-poppins fw-400' />
                                <label className='form-label text-white fw-500 font-poppins fs-14' >Service</label>


                                <div className={`contact-select mb-3 ${isOpen ? 'open' : ''}`} ref={selectBoxRef} tabIndex={0} onBlur={handleBlur}>
                                    <div className="summary radios form-control bg-transparent input-feild  text-white fw-500 font-poppins fs-14" aria-haspopup="listbox" aria-expanded={isOpen} onClick={handleToggle} onFocus={() => setIsOpen(true)}>
                                        {selectedItem}
                                        <input type="radio" className='text-white font-poppins fw-400' name="item" id="default" title="Auswählen..." checked={selectedItem === "Auswählen..."} readOnly />
                                        {items.map(item => (
                                            <input key={item.id} type="radio" className='text-white font-poppins fw-400' name="item" id={item.id} title={item.title} checked={selectedItem === item.title} readOnly />
                                        ))}
                                    </div>
                                    {isOpen && (
                                        <ul className="list" role="listbox">
                                            {items.map(item => (
                                                <li key={item.id} role="option">
                                                    <label className='text-white fw-500 font-poppins fs-14' htmlFor={item.id} onClick={() => handleItemClick(item.title)}>
                                                        {item.title}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>



                                <button class="white-image-button text-nowrap px-5 text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Book Now</button>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="w-100 h-100 object-fit-cover" src={ContactUsImg} />
                            </div>

                        </div>
                    </IrrParallelogram>
                </div>
            </div>
        </div>
    )
}

export default ContactUs