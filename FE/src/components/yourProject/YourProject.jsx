/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const YourProject = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Ambil data dari API, misalnya menggunakan fetch atau axios
        // Gantilah URL_API sesuai dengan endpoint API Anda
        const URL_API = 'http://localhost:3777/api/project/myproject/6596fb578f82d45729fd7b9c';

        fetch(URL_API)
            .then((response) => response.json())
            .then((data) => {
                setData(data.dataUserPinjamModal.project);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const cutString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">

            
            {data.map((item, index) => (
                <Link to={`/project-detail/${item._id}`} key={item._id} className="col-12 col-md-3 mt-5 text-dark">
                    <div className="box-content-features m-auto" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)' }}>
                        <div className="image-content-features">
                            
                            <img src={`http://localhost:3777/get-img/${item.img[0]}`} alt="" style={{ width: '100%', height: '100%' }} />
                            <div className="text-image-content">{item.title}</div>
                        </div>
                        <div className="row ps-2">
                            <div className="col-12 mt-3">{cutString(item.description, 100)}</div>
                            <div className="col-12 mt-3">
                                <div className="outer-bar-features">
                                    <div className="inner-bar-features"></div>
                                </div>
                            </div>
                            <div className="col-11 mt-2">
                                <div className="row justify-content-between set-data-per-features">
                                    <div className="col-2 text-start set-pecents">75%</div>
                                    
                                    <div className="col-5 text-end set-price">{item.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
};

export default YourProject;
