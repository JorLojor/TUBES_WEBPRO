/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/navbar/Navbar";
import { useParams } from 'react-router-dom';
import imgprofile from "../../assets/image306.png";
import FormLengkapiProfile from "../../components/formLengkapiProfile/FormLengkapiProfile"; 
import YourProject from '../../components/yourProject/YourProject';
import Footer from "../../components/footer/Footer";
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

    const datadummy = [
        {
            id: 1,
            title: 'mancing',

        },
    ]


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

                    <ul >
                        <li className='mt-5 row listproject justify-content-between px-5 my-3'>
                            <div className='col-3 d-flex'>
                                <img src={imgprofile} alt="" style={{ width: "60px", height: "60px", borderRadius: "10px" }} className="mt-2 me-2" />
                                <p className='mt-4'> exampp features</p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>si entong </p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>5000000</p>
                            </div>
                            <div className='col-3 text-end'>
                                <button className='mt-3' style={{
                                    backgroundColor: '#F5F5FB',
                                    border: 'none',
                                    borderRadius: '10px',
                                    width: '100px',
                                    height: '40px',
                                    color: '#A8A8A8'
                                }}>
                                    {">"}
                                </button>
                            </div>

                        </li>
                        <li className='row listproject justify-content-between px-5 my-3'>
                            <div className='col-3 d-flex'>
                                <img src={imgprofile} alt="" style={{ width: "60px", height: "60px", borderRadius: "10px" }} className="mt-2 me-2" />
                                <p className='mt-4'> metafers</p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>h beliau saha</p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>909000</p>
                            </div>
                            <div className='col-3 text-end'>
                                <button className='mt-3' style={{
                                    backgroundColor: '#F5F5FB',
                                    border: 'none',
                                    borderRadius: '10px',
                                    width: '100px',
                                    height: '40px',
                                    color: '#A8A8A8'
                                }}>
                                    {">"}
                                </button>
                            </div>

                        </li>
                        <li className='row listproject justify-content-between px-5 my-3'>
                            <div className='col-3 d-flex'>
                                <img src={imgprofile} alt="" style={{ width: "60px", height: "60px", borderRadius: "10px" }} className="mt-2 me-2" />
                                <p className='mt-4'>nanaonan</p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>si fulan</p>
                            </div>
                            <div className='col-3 text-center'>
                                <p className='mt-4'>35000000</p>
                            </div>
                            <div className='col-3 text-end'>
                                <button className='mt-3' style={{
                                    backgroundColor: '#F5F5FB',
                                    border: 'none',
                                    borderRadius: '10px',
                                    width: '100px',
                                    height: '40px',
                                    color: '#A8A8A8'
                                }}>
                                    {">"}
                                </button>
                            </div>

                        </li>
                    </ul>

                </div>



                <div className="pt-5 justify-content-around">
                    <div>
                        <h3 className='ms-1'>Your project</h3>
                        <Link to={`/create-project/${id}`} className='btn btn-warning p-3' style={{borderRadius:'10px'}}>
                            <h3 className='text-light m-auto'>+ Create Project</h3>

                        </Link>
                    </div>

                    <div className="row mt-5 justify-content-between">
                        <YourProject data={datadummy} />

                        {/* nanti di maps untuk menampilkan project buatan user itu sendiri */}
                        {/* <Link className="col-2 " to={`/project-detail/`}>
                            <div className="box-content-features m-auto" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',}}>
                                <div className="image-content-features">
                                    <img src={img1} alt="" style={{ width: '100%', height: '100%' }} />
                                    <div className="text-image-content">
                                        mancing
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <div className="col-12 mt-3 text-dark">
                                        wes kuliah, wes kerja, wes nikah, wes mancing
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="outer-bar-features">
                                            <div className="inner-bar-features"></div>
                                        </div>
                                    </div>
                                    <div className="col-11 mt-2">
                                        <div className="row set-data-per-features justify-content-between">
                                            <div className="col-4 text-start text-start set-pecents"><p>75%</p></div>
                                            <div className="col-5 text-end set-price">2000000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}

                       
                    </div>
                </div>


                
            </div>
            <Footer/>
            
        </>
    );
};

export default Profile;
