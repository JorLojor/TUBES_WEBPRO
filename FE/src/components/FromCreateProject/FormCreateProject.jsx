/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import {useParams} from 'react-router-dom'

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
            <div className="container-fluid" style={{ position: 'fixed', zIndex: '1', backgroundColor: 'white', width: '100%', height: '10vh', top: '0', left: '0' }}>
                <Navbar />
            </div>

            <div className="container-fluid" style={{ marginTop: '144px',paddingTop:'30px',paddingBottom:'50px',background: "#F5F5FB",paddingLeft:'200px',paddingRight:'200px' }}>

            

                <div className="cardpopup">
                    
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="titleinput"
                            name="title"
                            placeholder="Title"
                            onChange={updatedForm}
                            value={data.title}
                        />
                        <input
                            type="text"
                            id="descriptioninput"
                            name="description"
                            placeholder="Description"
                            onChange={updatedForm}
                            value={data.description}
                        />
                        <input
                            type="text"
                            id="priceinput"
                            name="price"
                            placeholder="Price"
                            onChange={updatedForm}
                            value={data.price}
                        />
                        <div className="d-flex">
                            <input
                                type="file"
                                id="imginput"
                                name="img"
                                multiple
                                onChange={handleImageChange}
                            />
                        </div>
                        <button className="submitButton" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            



            </div>
        </>
    );
};


export default FormCreateProject;
