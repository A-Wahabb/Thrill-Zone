
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Screens/About';
import HomePage from './Screens/HomePage';


const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/About' element={<About />} />
  
                </Routes>
            </BrowserRouter> 
  </>
    );
}



export default MainComponents;

