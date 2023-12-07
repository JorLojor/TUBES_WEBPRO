import './LandingPage.css';
import IntroLP from './IntroLP/intro';
const LandingPage = () => {
    const token = localStorage.getItem('accessToken');
    if (token === ""){
        window.location.href('/login');
    }

    return(
        <>
            <div className="container-fluid container-landing-page">
                <section className="section-intro-lp">
                    <IntroLP/>
                </section>
            </div>
        </>
    )
}

export default LandingPage;
