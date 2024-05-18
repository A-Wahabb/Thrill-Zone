import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
import playIcon from '../assets/img/play_btn.svg'; // Your custom play icon
import pauseIcon from '../assets/img/pause_btn.svg'; // Your custom pause icon
import videoFile from '../assets/sample-video.mp4';
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";
import BlueParallogram from "../Components/BlueParallogram/BlueParallogram";

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
                                    className="clip-path-video"
                                    autoPlay
                                    muted
                                    loop
                                    ref={videoRef}
                                >
                                    <source src={videoFile} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className="video-control-btn" onClick={togglePlayPause}>
                                    <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
                                </button>
                            </IrrParallelogram>
                        </div>
                    </div>
                    <section>
                        <BlueParallogram>
                            <p className="font-space text-dark-blue px-2 mb-0 ">About us</p>
                        </BlueParallogram>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomePage;
