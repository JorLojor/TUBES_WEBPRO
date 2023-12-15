/* eslint-disable no-unused-vars */
import './intro.css';
import Footer from '../../../components/footer/Footer';
import MainContent from '../MainContent/MainContent';
import MainDataLP from '../MainDataLP/MainDataLP';
import DiscoverProject from '../DiscoverProject/DiscoverProject';
import FeaturedProjectLP from '../FeaturedProject/FeaturedProjectLP';
import {useEffect, useState} from 'react';
import axios from 'axios';
const IntroLP = () => {
    const [dataDP, setDataDP] = useState([]);
    const [dataFP, setDataFP] = useState([]);

    const getDataDP = async () => {
        axios.get('http://localhost:3777/api/project')
        .then((res) => {
            setDataDP(res.data.projects.slice(0,3));
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const getDataFP = async () => {
        axios.get('http://localhost:3777/api/project')
        .then((res) => {
            setDataFP(res.data.projects);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getDataDP();
        getDataFP();
    },[])

       
    return(
        <>
            <div className="container-intro-lp">
                <MainContent/>
                <MainDataLP/>
                <DiscoverProject data={dataDP}/>
                <FeaturedProjectLP data={dataFP}/>
            </div>
            <Footer/>
        </>
    )
}
export default IntroLP;
