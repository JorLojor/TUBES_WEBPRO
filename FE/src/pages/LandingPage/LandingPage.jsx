import './LandingPage.css';
import IntroLP from './IntroLP/intro';
const LandingPage = () => {

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
