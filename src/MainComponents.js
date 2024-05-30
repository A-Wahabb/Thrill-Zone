
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Screens/About';
import HomePage from './Screens/HomePage';
import Gallery from './Screens/Gallery';


const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Gallery' element={<Gallery />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}



export default MainComponents;

