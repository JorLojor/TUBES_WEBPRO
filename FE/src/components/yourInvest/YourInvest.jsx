/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


const YourInvest = ({idUser}) => {
    const [data, setData] = useState([]);
    const [project, setProject] = useState([]);
    const url = 'http://localhost:3777/api/users/';
    const urlProject = 'http://localhost:3777/api/project/pemodal/';


    console.log(idUser);

    const getData = async () => {
        try {
            const res = await axios.get(`${url}${idUser}`);
            setData(res.data.data);
           
        } catch (err) {
            console.log(err.message);
        }
    }

    const getProject = async () => {
        try {
            const res = await axios.get(`${urlProject}${idUser}`);
            setProject(res.data.dataUserTanamModal.project);
            console.log(res.data.dataUserTanamModal.project);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {

        getData();
        getProject();
    } ,[]);

    const cutString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

    return (
        <>
            <ul className='px-5'>
                
                {project.map((item, index) => (
                    <li to={`/project-detail/${item._id}`} key={item._id} className="mt-5 row listproject justify-content-between my-3 p-1 " >
                            <div className="col-3 d-flex justify-content-between align-items-center ">
                                <img src={`http://localhost:3777/get-img/${item.img[0]}`} alt="" style={{ width: "70px", height: "100%", borderRadius: "10px" }}  />
                                <p className='mt-3'> {item.title}</p>
                            </div>
                            <div className="col-4 text-end ">
                                <p className='mt-3'> {
                                    cutString(item.description, 20)
                                }</p>
                            </div>
                            <div className="col-2 text-end ">
                                <p className='mt-3'> {item.price}</p>
                            </div>
                            <div className="col-3 text-end ">
                                <button className='mt-2' style={{
                                    backgroundColor: '#F5F5FB',
                                    border: 'none',
                                    borderRadius: '10px',
                                    width: '100px',
                                    height: '40px',
                                    color: '#A8A8A8',
                                }}>
                                    {">"}
                                </button>

                            </div>
                    </li>
                ))}
            </ul>
        </>
    )



}

YourInvest.propTypes = {
    idUser: PropTypes.string.isRequired,
};

export default YourInvest;
