import './intro.css';
import Footer from '../../../components/footer/footer';
import MainContent from '../MainContent/MainContent';
import MainDataLP from '../MainDataLP/MainDataLP';
import DiscoverProject from '../DiscoverProject/DiscoverProject';
import FeaturedProjectLP from '../FeaturedProject/FeaturedProjectLP';



const IntroLP = () => {

    return(
        <>
            <div className="container-intro-lp">
                <MainContent/>
                <MainDataLP/>
                <DiscoverProject/>
                <FeaturedProjectLP/>


            </div>

            

            <Footer/>
        </>
    )
}

export default IntroLP;
