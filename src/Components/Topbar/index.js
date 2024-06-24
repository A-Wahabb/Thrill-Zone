import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './TopBar.css'
import WhiteParallogram from '../WhiteParallogram/WhiteParallogram';


const Topbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-nav p-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <WhiteParallogram >
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" aria-current="page" to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/About" activeClassName="active">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/Birthday" activeClassName="active">PartyBooking</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/Gallery" activeClassName="active">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/Birthday" activeClassName="active">Packages</NavLink>
                                </li>
                            </ul>
                        </WhiteParallogram>  

                        <ul className="navbar-nav ms-auto d-none d-md-inline-flex">
                            <button class="image-button font-space px-4">Lets Talk</button>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Topbar;
