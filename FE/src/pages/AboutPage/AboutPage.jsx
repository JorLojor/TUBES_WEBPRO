
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './AboutPage.css';
import fotoAbout from '../../assets/fotoabout.png'
import FisiMisi from "./FisiMisi/FisiMisi";
import ChoseUs from "./ChoseUs/ChoseUs";
import OurGroup from "./OurGroup/OurGroup";

const AboutPage = () => {
    return(
        <>
            <div className="container-fluid" style={{position:'fixed',zIndex:'1', 
                    backgroundColor:'white',width:'100%',height:'10vh',top:'0',left:'0'}}>
                    <Navbar/>
            </div>
            <section className="container-fluid section-main">
                <img src={fotoAbout} alt="" />
                <h1>
                    About Our Company
                </h1>
            </section>
            <section className="mt-5 pt-5">
                < FisiMisi />

            </section>
            <section className="mt-5 pt-5">
                < ChoseUs />
            </section>
            <section className="mt-5 pt-5">
                < OurGroup />
            </section>
            <Footer/>
        </>
    )
}

export default AboutPage;
