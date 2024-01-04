/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import imgprofile from '../../assets/img/imgprofile.png';

const YourProject = () => {
    // const [data, setData] = useState([]);


    // const cutString = (str, num) => {
    //     if (str.length > num) {
    //         return str.slice(0, num) + '...';
    //     } else {
    //         return str;
    //     }
    // };

    return (
        <>
            <ul>
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
            </ul>
        </>
    )

}
