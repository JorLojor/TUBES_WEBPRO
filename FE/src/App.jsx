import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'; // Fix casing issue
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} > </Route>
                    <Route path="/login" element={<LoginPage />} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
