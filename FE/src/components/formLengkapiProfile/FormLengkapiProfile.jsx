/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './FormLengkapiProfile.css';

const FormLengkapiProfile = ({ id, onClose }) => {
    const [data, setData] = useState({
        age: null,
        phone: null,
        address: null,
    });

    const updatedForm = (e) => {
        e.persist();
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3777/api/users/${id}`, data);
            alert('Update Successful!');
            console.log(response)
            // Tambahkan logika atau perubahan state setelah pembaruan berhasil jika diperlukan
            onClose(); // Tutup popup setelah berhasil menyimpan data
        } catch (error) {
            console.error('Gagal melakukan pembaruan!', error);
            alert('Update Failed');
        }
    };

    return (
        <div
            className=""
            style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                zIndex: '999999',
                top: '-19%',
                left: '-85%',
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
        >
            <div className="cardpopup">
                <div className="d-flex justify-content-between" style={{background: 'rgba(21, 44, 91, 0.60)',padding:'10px'}}>
                    <h3 className='text-light my-auto' style={{fontSize:'25px'}}>lengkapi profile</h3>
                    <button className="closeButton p-3" onClick={onClose} style={{fontWeight:'600',backgroundColor:'rgb(233, 63, 63)',borderRadius:'10px'}}>
                        X
                    </button>
                </div>
                <form className="form px-4 set-input-lkp" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="ageinput"
                        name="age"
                        placeholder="Age"
                        onChange={updatedForm}
                        value={data.age || ''}
                    />
                    <input
                        type="text"
                        id="phoneinput"
                        name="phone"
                        placeholder="+62 ..."
                        onChange={updatedForm}
                        value={data.phone || ''}
                    />
                    <input
                        type="text"
                        id="addressinput"
                        name="address"
                        placeholder="Alamat"
                        onChange={updatedForm}
                        value={data.address || ''}
                    />

                </form>
                <div className="px-4 mt-5">
                    <button className='set-btn-flp' type="submit" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

FormLengkapiProfile.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired, // Properti untuk menutup popup
};

export default FormLengkapiProfile;
