import './LandingPage.css';
import IntroLP from './IntroLP/intro';
import Navbar from '../../components/Navbar/Navbar';
import './LandingPage.css';
const LandingPage = () => {
    const token = localStorage.getItem('accessToken');
    if (token === ""){
        window.location.href('/login');
    }

    return(
        <>  
            <div className="container-fluid" style={{position:'fixed',zIndex:'1', 
                backgroundColor:'white',width:'100%',height:'10vh',top:'0',left:'0'}}>
                <Navbar/>
            </div>
            <div className="container-fluid container-landing-page">
                <section className="section-intro-lp">
                    <IntroLP/>
                </section>
            </div>
        </>
    )
}

export default LandingPage;
