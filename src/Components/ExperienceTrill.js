import IrrParallelogram from "./IrrParallelogram/IrrParallelogram";
import vr_man from '../assets/img/vr_man.png'


const ExperinceTrill = () => {
    return (
        <>
            <section>
                <div className="d-flex align-items-center">
                    <p className="fs-5vw font-space text-white mb-0" >EXPERIENCE A NEW THRILL</p>
                    <button class="white-image-button text-nowrap px-5 ms-auto text-blue font-space  bg-transparent border-0 text-center fs-16 d-inline-block">Read More</button>
                </div>
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
        </>
    );
}

export default ExperinceTrill;