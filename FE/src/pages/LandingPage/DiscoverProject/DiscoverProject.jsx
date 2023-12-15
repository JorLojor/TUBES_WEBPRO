/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DiscoverProject = ({ data }) => {
    const imgUrl = ''

    console.log(data);
    return (
        <>
            <div className="set-row set-row-trird">
                <div className="row justify-content-between pe-5">
                    <div className="col-1 set-categori-textt"><span>Category</span></div>
                </div>
                <div className="row justify-content-between set-inner-row">
                    <div className="col-4 text-discover ">
                        Discover Project <br />
                        By Category
                    </div>
                    <div className="col-8">
                        <div className="row  justify-content-between">
                        {data.map((item, index) => {
                            return (
                                <div key={index} className="col-3" style={
                                    {
                                        display: 'flex',
                                        width:'243px',
                                        height: '243px',
                                        flexDirection: 'column',
                                        marginBottom: '20px',
                                        backgroundColor: '#FAFAFA',
                                        borderRadius: '10px',
                                        padding: '10px',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.10)',
                                     
                                    }
                                }>
                                    <Link to={`/project-detail/${item._id}`} className=" text-dark" style={{
                                        width: '100%',
                                        height: '100%',
                                        }}>
                                    
                                        <img src={`http://localhost:3777/get-img/${item.img}`} alt="" style={{ width: '100%', height: '70%' }} />
                                        {item.title}
                                        {item.description}
                                    </Link>
                                </div>
                            );
                        })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

DiscoverProject.propTypes = {
    data: propTypes.array
}

export default DiscoverProject;
