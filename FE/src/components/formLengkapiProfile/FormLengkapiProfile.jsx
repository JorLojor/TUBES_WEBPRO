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
                    <button type="submit" onClick={handleSubmit}>Confirm</button>
            </div>
        </div>
    );
};

FormLengkapiProfile.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired, // Properti untuk menutup popup
};

export default FormLengkapiProfile;
