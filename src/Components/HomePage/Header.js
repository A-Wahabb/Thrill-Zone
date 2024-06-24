import './HomePage.css';
import arrow_narrow_right from '../../assets/img/arrow-narrow-right.svg'
import BlueParallogram from '../BlueParallogram/BlueParallogram';


const HeadSection = () => {
    return (
        <>
            <div className="pt-5" >
                <div className="d-flex justify-content-center">

                    <BlueParallogram >
                        <div className="d-flex gap-3 align-items-baseline">
                            <p className="mb-0 text-black fw-bold font-poppins">Laser Tag</p>
                            <div className="dot" />
                            <p className="mb-0 text-black fw-bold font-poppins">6D Cinema</p>
                            <div className="dot" />
                            <p className="mb-0 text-black fw-bold font-poppins">Entertainment Center</p>
                        </div>
                    </BlueParallogram>
                </div>
                {/* <p className="font-poppins fs-7vw fw-bold lh-base text-center text-white mx-auto w-18ch mt-4 banner-content" >The Pinnacle of Entertainment Hubs</p>
                <p className='my-4 font-poppins fs-18 text-white-80 text-center w-50 mx-auto'>Dive into thrilling multiplayer battles, epic adventures, and the latest releases. Challenge friends or embark on solo missions. Get ready for non-stop fun!"</p> */}

                <div>
                    <ul className="d-flex gap-3 justify-content-center pt-3">
                        <button class="white-image-button text-nowrap px-5 text-blue font-poppins-500 bg-transparent border-0 text-center fs-16 d-inline-block">Booking</button>
                        <div className="d-flex gap-2">
                            <p className='text-white mb-0 align-content-center font-poppins-500'>Explore</p>
                            <img src={arrow_narrow_right} alt='arr' />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeadSection;