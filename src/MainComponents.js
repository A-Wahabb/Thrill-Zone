
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './Screens/HomePage';


const MainComponents = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </BrowserRouter> 
  </>
    );
}



export default MainComponents;

