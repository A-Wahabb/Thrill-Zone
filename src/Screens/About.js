import React, { useState, useRef } from "react";
import Topbar from "../Components/Topbar";
import HeadSection from "../Components/HomePage/Header";
import IrrParallelogram from "../Components/IrrParallelogram/IrrParallelogram";
import BlueParallogram from "../Components/BlueParallogram/BlueParallogram";
import vr_man from '../assets/img/vr_man.png'; // Your custom play icon
const About = () => {
    return (
        <>
            <div className="main-bg">
                <div className="top-bg">
                    <Topbar />
                    <div className="container">

                        <HeadSection />
                    </div>
                </div>
                <section>
                        <div className="row justify-content-center py-5">

                            <div className="col-12 col-md-6 col-lg-3 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                               
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                                
                            </div>
                          

                        </div>
                    </section>
                    <div className=" mx-auto w-18ch text-center">
                    <p className="font-poppins text-white fs-36 fw-600 w-18ch">Welcome to Thrill Zone Entertainment Centre, the one of its kind Laser Tag arena in Pakistan!</p>
                    <p className="font-poppins text-white fs-20 fw-400 w-18ch">Thrill Zone Entertainment Centre is well designed and equipped to cater to your requirements. Laser Tag is a safe and hi-tech combat team game suitable for kids and adults. The Jurassic Themed interior layout of the arena is guaranteed to thrill you, and provides a physical and mental challenge to people of all ages—its safe, and no environmental mess but most importantly it is planned to offer serious fun for everyone.</p>
                    <p className="font-space fs-30  text-white mt-4" >Let the adventure begin…</p>
                    </div>
            </div>

        </>
    );
}

export default About;