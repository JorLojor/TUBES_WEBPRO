/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/navbar/Navbar";
import { useParams } from 'react-router-dom';
import imgprofile from "../../assets/image306.png";
import FormLengkapiProfile from "../../components/formLengkapiProfile/FormLengkapiProfile"; 
import YourProject from '../../components/yourProject/YourProject';
import Footer from "../../components/footer/Footer";
import YourInvest from '../../components/yourInvest/YourInvest';
import FormCreateProject from '../../components/FromCreateProject/FormCreateProject';
import img1 from '../../assets/m3.png'
import img2 from '../../assets/sub-querry.png'
import img3 from '../../assets/onzeus.png'
import img4 from '../../assets/ngoding.png'
import img5 from '../../assets/sxr.png'
import { Link } from 'react-router-dom';

import './Profile.css';

const Profile = () => {
    
    const { id } = useParams();
    const url = 'http://localhost:3777/api/users/';

    const [user, setUser] = useState();
    const [data, setData] = useState({
        age: null,
        phone: null,
        address: null,
    });
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    // const [idPinjamModal, setIdPinjamModal] = useState();


    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
        try {
            const res = await axios.get(`${url}${id}`);
            setUser(res.data.data);
            setData({
                age: res.data.data.age,
                phone: res.data.data.phone,
                address: res.data.data.address,
            });
            console.log(res.data.data._id);
            setLoading(false);
        } catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    };


    



    

    const lebgkapiProfile = () => {
        if (loading) {
            return <h3>Loading...</h3>;
        }

        if (data.age === undefined && data.phone === undefined && data.address === undefined) {
            return (
                <>
                    <button className='btn-warning p-3' onClick={() => setShowForm(true)}  style={{borderRadius:'10px'}}>
                        <h3 className='text-light m-auto'>lengkapi profile anda !</h3>
                    </button>

                    {showForm && <FormLengkapiProfile id={id} onClose={() => setShowForm(false)} />}
                </>
            )
        }

        return null;
    };

    // create project


    return (
        <>
            <div className="container-fluid" style={{ position: 'fixed', zIndex: '1', backgroundColor: 'white', width: '100%', height: '10vh', top: '0', left: '0' }}>
                <Navbar />
            </div>

            <div className="container-fluid" style={{ marginTop: '144px',paddingTop:'30px',paddingBottom:'50px',background: "#F5F5FB",paddingLeft:'200px',paddingRight:'200px' }}>
                <div className="ps-5" style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100%',
                    left: '76%',
                    top: '250px',

                }}>
                    {lebgkapiProfile()}
                </div>

                {user && (
                    
                        <div className="row justify-content-between px-5">
                            <div className="col-3">
                                <h3>Dashboard</h3>
                                <p>Look what you have made today!</p>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <img src={imgprofile} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} className="mt-2 me-2" />
                                <div className="box-profile-page">
                                    <div className="d-flex">
                                        <h3>{user.name}</h3>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h5>{user.email}</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                    
                )}
                
                <div className="row pt-5 justify-content-between">
                    

                    <div className="col-3 boxketeranganapakek">
                        <div className="card-profile-page">
                            <div className="card-body">
                                <h5 className="card-title">Ctribute Project</h5>
                                <h1>3</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 boxketeranganapakek">
                        <div className="card-profile-page">
                            <div className="card-body">
                                <h5 className="card-title">Modal</h5>
                                <h1>900.000.000</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 boxketeranganapakek">
                        <div className="card-profile-page">
                            <div className="card-body">
                                {/* keuntungan */}
                                <h5 className="card-title">Revenue</h5> 
                                <h1>
                                    500.000.000
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" pt-5 mt-5 justify-content-around">
                    <h3 className='ms-1'>Your investation project</h3>

                    <YourInvest idUser={id} />

                </div>



                <div className="pt-5 justify-content-around">
                    <div>
                        <h3 className='ms-1'>Your project</h3>
                        <Link to={`/create-project/${id}`} className='btn btn-warning p-3' style={{borderRadius:'10px'}}>
                            <h3 className='text-light m-auto'>+ Create Project</h3>

                        </Link>
                    </div>

                    
                    <YourProject idUser={id} />                       
                   
                </div>


                
            </div>
            <Footer/>
            
        </>
    );
};

export default Profile;
