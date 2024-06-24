import React, { useState, useRef } from "react";
import HeadSection from "./HeadSection";
import Topbar from "../../Components/Topbar";
import birthday1 from '../../assets/img/birthday1.png';
import birthday2 from '../../assets/img/birthday2.png';
import birthday3 from '../../assets/img/birthday3.png';
import birthday4 from '../../assets/img/birthday4.png';
import birthday5 from '../../assets/img/birthday5.png';
import birthday6 from '../../assets/img/birthday6.png';
import birthdayplan from '../../assets/img/birthdayplan.png';
import plan1 from '../../assets/img/plan1.png';
import plan2 from '../../assets/img/plan2.png';
import playIcon from '../../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../../assets/img/pause_btn.svg'; // Your custom pause icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";


import Footer from "../../Components/Footer";


const Gallery = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);


    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <div className="main-bg">
                <div className="birthday_top-bg">
                    <Topbar />
                    <div className="container">

                        <HeadSection />
                    </div>
                </div>
                <div className="container">

                    <section>
                        <p className="font-poppins  fw-bold fs-5vw text-center text-white mt-5" >Birthday Party Area</p>
                        <p className='my-4 font-poppins fs-20 text-white-80 text-center w-80 mx-auto fw-bold'>When the adrenaline is rushing, there’s no stopping from the fun activities. To replenish the energy and excitement are sumptuous bakery products and snacks along with premium coffee from Illy at the in-house café. The perfect pit-stop!</p>
                        <p className='my-4 font-poppins fs-20 text-white-80 text-center w-80 mx-auto fw-bold'>What’s more, there is an exclusive animated party area ideal for birthdays, special occasions. The special zone along with Dinosaur props serves as a great backdrop where players can take memorable pictures to share with the world.</p>
                        <p className='my-4 font-poppins fs-20 text-white-80 text-center w-80 mx-auto fw-bold'>Thrill Zone is sure to have a surprise waiting around every corner and is perfect for birthday parties, team buildings and other special events.</p>
                        <div className="row mt-5">
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative ">
                                <IrrParallelogram>
                                    <img src={birthday1} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={birthday2} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={birthday3} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={birthday4} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={birthday5} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={birthday6} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                        </div>

                    </section>
                    <div className="pb-5 mt-5">
                        <div className="videoClip borderParallelogram position-relative">
                            <IrrParallelogram>

                                <video
                                    className="clip-path-video w-100"
                                    autoPlay
                                    muted
                                    loop
                                    ref={videoRef}
                                >
                                    <source src='https://thrill-zone.vercel.app/videos/s_video.mp4' type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className="video-control-btn" onClick={togglePlayPause}>
                                    <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
                                </button>
                            </IrrParallelogram>
                        </div>
                    </div>
                    <p className="font-poppins  fw-bold fs-3vw text-center text-white mt-5" >PRICING FOR BIRTHDAY PARTY</p>
               
                <div className="d-flex justify-content-center">
                    <div className="birthday-pricing col-12 col-lg-4 d-flex justify-content-center">
                        <img src={birthdayplan} />
                    </div>
                    {/* <div className="birthday-pricing col-12 col-lg-4">
                        <img src={plan1} />
                    </div>
                    <div className="birthday-pricing col-12 col-lg-4">
                        <img src={plan2} />
                    </div> */}
                    </div>
                </div>
                <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default Gallery;