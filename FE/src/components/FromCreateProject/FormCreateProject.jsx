/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const FormCreateProject = ({ id, onClose }) => {
    console.log(id);
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

            const response = await axios.post(`http://localhost:3777/api/project/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Create Successful!');
            console.log(response);
            onClose(); // Close the form after successful submission
        } catch (error) {
            console.error('Failed to create project!', error);
            alert('Create Failed');
        }
    };

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    width: '100vw',
                    height: '100%',
                    zIndex: '999999',
                    top: '0',
                    left: '0',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            >
                <div className="cardpopup">
                    <button className="closeButton" onClick={onClose}>
                        X
                    </button>
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

FormCreateProject.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FormCreateProject;
