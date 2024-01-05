/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {useParams} from 'react-router-dom'
import './FormCreateProject.css';

const FormCreateProject = () => {
    const {id} = useParams();

    console.log("id sudah di dapat",id);
    const [data, setData] = useState({
        title: '',
        description: '',
        price: '',
    });
    const [images, setImages] = useState(null);

    const updatedForm = (e) => {
        e.persist();
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('price', data.price);

            // Append each image to the FormData
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    formData.append('img', images[i]);
                }
            }

            const response = await axios.post(`http://localhost:3777/api/project/create/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            confirm('Create Success');
            console.log(response);
            window.location.href = `/profile/${id}`;
        } catch (error) {
            console.error('Failed to create project!', error);
            alert('Create Failed');
        }
    };

    return (
        <>
            <div className="" style={{
                background: "#F5F5FB"
            }}>
            <div className="container-fluid" style={{ position: 'fixed', zIndex: '1', backgroundColor: 'white', width: '100%', height: '10vh', top: '0', left: '0' }}>
                <Navbar />
            </div>

            <div className="container-fluid " style={{ marginTop: '144px',paddingTop:'50px',background: "#F5F5FB",paddingLeft:'200px',paddingRight:'200px', paddingBottom:'100px' }}>

            <h1>Create Your New Project</h1>
            <br />

                <div className="cardpopupc">
                    
                    <form className="formcp container-fluid" onSubmit={handleSubmit}>
                        <div className="cover-input-cp d-flex justify-content-center align-items-center">
                            <input
                                type="text"
                                id="titleinput"
                                name="title"
                                placeholder="Title"
                                onChange={updatedForm}
                                value={data.title}
                            />
                        </div>

                        <div className="cover-input-cp-desk-p d-flex justify-content-center align-items-center">
                            <textarea
                                
                                type="text"
                                id="descriptioninput"
                                name="description"
                                placeholder="Description"
                                onChange={updatedForm}
                                value={data.description}
                            />
                        </div>
                        <div className="cover-input-cp d-flex justify-content-center align-items-center">
                            <input
                                type="text"
                                id="priceinput"
                                name="price"
                                placeholder="Price"
                                onChange={updatedForm}
                                value={data.price}
                            />
                        </div>
                        <div className="cover-input-cp-file d-flex justify-content-center align-items-center">
                        
                        <div className="d-flex " style={{
                            width: '40%',
                        }}>
                            <input
                                type="file"
                                id="imginput"
                                name="img"
                                multiple
                                onChange={handleImageChange}
                            />
                        </div>

                        </div>
                        <div className="cover-input-cp-file d-flex justify-content-center align-items-center">
                            <div className=" d-flex justify-content-start align-items-center " style={{
                                width: '40%',
                            
                            }}>

                                <button className="submitButton btn-findap text-light" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            



            </div>
                <Footer />
            </div>
        </>
    );
};


export default FormCreateProject;
