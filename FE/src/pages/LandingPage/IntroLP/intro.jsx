/* eslint-disable no-unused-vars */
import './intro.css';
import Footer from '../../../components/footer/footer';
import MainContent from '../MainContent/MainContent';
import MainDataLP from '../MainDataLP/MainDataLP';
import DiscoverProject from '../DiscoverProject/DiscoverProject';
import FeaturedProjectLP from '../FeaturedProject/FeaturedProjectLP';
import {useEffect, useState} from 'react';
import axios from 'axios';
const IntroLP = () => {
    const [dataDP, setDataDP] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3777/api/project')
        .then((res) => {
            setDataDP(res.data.projects.slice(0,3));
            console.log(res.data.projects)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    return(
        <>
            <div className="container-intro-lp">
                <MainContent/>
                <MainDataLP/>
                <DiscoverProject data={dataDP}/>
                <FeaturedProjectLP/>
            </div>
            <Footer/>
        </>
    )
}
export default IntroLP;
