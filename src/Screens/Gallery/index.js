import HeadSection from "./HeadSection";
import Topbar from "../../Components/Topbar";
import vr_man from '../../assets/img/vr_man.png'; // Your custom play icon
import downArrow from '../../assets/img/downArrow.svg'; // Your custom play icon
import IrrParallelogram from "../../Components/IrrParallelogram/IrrParallelogram";
import ExperinceTrill from "../../Components/ExperienceTrill";
import Footer from "../../Components/Footer";


const Gallery = () => {
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

                    <section>
                        <p className="font-poppins-500 fs-5vw text-center text-white" >THRILL Gallery</p>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mb-5 h-300 borderParallelogram position-relative">
                                <IrrParallelogram>
                                    <img src={vr_man} alt='' className="h-100 w-100 object-fit-cover" />
                                </IrrParallelogram>
                            </div>
                        </div>
                        <div className="d-flex gap-2 justify-content-center">
                            <img src={downArrow} alt='arr' />
                            <p className='text-white mb-0 align-content-center font-space'>Load More</p>
                        </div>
                    </section>
                    <ExperinceTrill />
                </div>
                <section className="mt-5 position-relative overflow-hidden">
                    <Footer />
                </section>
            </div>
        </>
    );
}

export default Gallery;