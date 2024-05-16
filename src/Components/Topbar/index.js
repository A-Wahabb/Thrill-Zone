import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './TopBar.css'
import { useEffect, useLayoutEffect, useRef } from 'react';


const Topbar = () => {
    const hexagonRef = useRef(null);

    useLayoutEffect(() => {
        const hexagon = hexagonRef.current;
        const hexagonHeight = hexagon.clientHeight;
        const borderSize = hexagonHeight / 2;
        console.log({ hexagon })
        // Create a style element
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            .hexagon::before,
            .hexagon::after {
                border-top: ${borderSize}px solid transparent;
                border-bottom: ${borderSize}px solid transparent;
            }
        `;
        document.head.appendChild(styleSheet);

        // Clean up the style element on component unmount
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

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
                        <div className="hexagon-container ms-auto">
                            <div ref={hexagonRef} className="hexagon">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link mx-2" aria-current="page" to="/" activeClassName="active">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link mx-2" to="/products" activeClassName="active">Products</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link mx-2" to="/pricing" activeClassName="active">Pricing</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link mx-2 dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Company
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><NavLink className="dropdown-item" to="/blog">Blog</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/about-us">About Us</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/contact-us">Contact Us</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="navbar-nav ms-auto d-none d-md-inline-flex">
                            <div className="blueBtn">
                                <button className="bg-transparent border-0">qwerty</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Topbar;
