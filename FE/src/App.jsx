import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'; // Fix casing issue
import LoginPage from './pages/LoginPage/LoginPage';

// booking page
import BookingPageStepThree from './pages/BookingPage/BookinPageStepThree'
import BookingPageStepTwo from './pages/BookingPage/BookingPageStepTwo';

//projectDetail
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} > </Route>
                    <Route path="/login" element={<LoginPage />} ></Route>
                    <Route path='/booking/final' element={<BookingPageStepThree />} ></Route>
                    <Route path='/booking/payment' element={<BookingPageStepTwo />} ></Route>
                    {/* <Route path='/project/:id' element={<ProjectDetail />} ></Route> */}
                    <Route path='/project' element={<ProjectDetail />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
