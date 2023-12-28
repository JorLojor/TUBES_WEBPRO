/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/navbar/Navbar";
import { useParams } from 'react-router-dom';
import imgprofile from "../../assets/image306.png";
import FormLengkapiProfile from "../../components/formLengkapiProfile/FormLengkapiProfile"; // Import komponen FormLengkapiProfile

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

    // State untuk mengelola tampilan popup
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get(`${url}${id}`);
            setUser(res.data.data);

            // Set nilai data berdasarkan res.data.data atau sesuai kebutuhan
            setData({
                age: res.data.data.age,
                phone: res.data.data.phone,
                address: res.data.data.address,
            });

            setLoading(false);
        } catch (err) {
            console.log(err);
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
                    <button onClick={() => setShowForm(true)}>
                        <h3>lengkapi profile anda</h3>
                    </button>
                    {/* Menampilkan popup jika showForm true */}
                    {showForm && <FormLengkapiProfile id={id} onClose={() => setShowForm(false)} />}
                </>
            )
        }

        return null;
    };

    return (
        <>
            <div className="container-fluid" style={{ position: 'fixed', zIndex: '1', backgroundColor: 'white', width: '100%', height: '10vh', top: '0', left: '0' }}>
                <Navbar />
            </div>

            <div className="container-fluid" style={{ marginTop: '15vh' }}>
                <div className="container-fluid">
                    {lebgkapiProfile()}
                </div>

                {user && (
                    <div className="container-fluid" style={{ background: "#F5F5FB" }}>
                        <div className="row justify-content-between px-5">
                            <div className="col-3">
                                <h3>Dashboard</h3>
                                <p>Look what you have made today!</p>
                            </div>
                            <div className="col-3 d-flex">
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
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
