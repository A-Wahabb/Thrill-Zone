import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
import playIcon from '../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../assets/img/pause_btn.svg'; // Your custom pause icon
// import videoFile from '../assets/s_video.mp4';
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";
import BlueParallogram from "../Components/BlueParallogram/BlueParallogram";
import vr_man from '../assets/img/vr_man.png'; // Your custom play icon

const HomePage = () => {
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
                <div className="top-bg">
                    <Topbar />
                    <div className="container">

                        <HeadSection />
                    </div>
                </div>
                <div className="container">
                    <div className="pb-5">
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
                    <section className="pb-5" >
                        <BlueParallogram>
                            <p className="font-space text-dark-blue px-2 mb-0 ">About us</p>
                        </BlueParallogram>

                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="font-space text-white fs-36" >Thrill Zone has something beyond the biggest Laser Tag field in Islamabad</p>
                                <p className="font-poppins text-white-1">We have Enjoyable activities for all ages (5 years and above). Book a space at Thrill Zone for youngsters birthday parties, corporate group building or just a bit of excitement with family and friends…</p>
                                <button class="white-image-button text-nowrap px-5 mt-3 text-blue font-space">Read More</button>

                            </div>
                            <div className="col-12 col-md-6 HalfImg borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                        </div>
                    </section>
                    <section>
                        <BlueParallogram>
                            <p className="font-space text-dark-blue px-2 mb-0 ">Games</p>
                        </BlueParallogram>
                        <div className="d-flex align-items-center">
                            <p className="fs-5vw font-space text-white mb-0" >EXPERIENCE A NEW THRILL</p>
                            <button class="white-image-button text-nowrap px-5 ms-auto text-blue font-space">Read More</button>
                        </div>
                    </section>
                    <section>
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Arcade Games</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Kids Play Area</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">BUMPER CARS</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Trampoline</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Ninja Courses</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Toddlers Area</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">CAFE</button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                <button class="image-button font-space text-nowrap position-absolute buttonToParallelogram px-5">Party Place</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomePage;
