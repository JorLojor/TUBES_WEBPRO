import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'; // Fix casing issue
import LoginPage from './pages/LoginPage/LoginPage';
// midleware
import AuthGuard from './middleware/AuthGuard';

// booking page
import BookingPageStepThree from './pages/BookingPage/BookinPageStepThree'
import BookingPageStepTwo from './pages/BookingPage/BookingPageStepTwo';
import BookingPageStepOne from './pages/BookingPage/BookingPageStepOne';
import RegisterPage from './pages/LoginPage/RegisterPage';

//projectDetail
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import ProjectPage from './pages/ProjectPage/ProjectPage';

//aboutPage
import AboutPage from './pages/AboutPage/AboutPage';
//ContactUs
import ContactUs from './pages/ContactUs/ContactUs';
//profile
import Profile from './pages/ProfilePage/Profile';

//formCreateProject
import FormCreateProject from './components/FromCreateProject/FormCreateProject';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} > </Route>
                    <Route path="/register" element={<RegisterPage />} ></Route>
                    <Route path="/login" element={<LoginPage />} ></Route>

                    <Route path='/booking/final' element={<AuthGuard><BookingPageStepThree /></AuthGuard>} />
                    <Route path='/booking/payment' element={<AuthGuard><BookingPageStepTwo /></AuthGuard>} />
                    <Route path='/booking' element={<AuthGuard><BookingPageStepOne /></AuthGuard>} />
                    <Route path='/profile/:id' element={<AuthGuard><Profile /></AuthGuard>} />
                    <Route path='/create-project/:id' element={<AuthGuard><FormCreateProject /></AuthGuard>} />

                    
                    <Route path='/project-detail/:id' element={<AuthGuard><ProjectDetail /></AuthGuard>} />
                    <Route path='/project' element={<AuthGuard><ProjectPage /></AuthGuard>} />
                  
                    <Route path='/about' element={<AboutPage />} ></Route>
                    <Route path='/ContactUs' element={<ContactUs />} ></Route>

                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
