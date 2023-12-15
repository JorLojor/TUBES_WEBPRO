/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeaturedProjectLP = ({ data }) => {
    console.log(data);

    return (
        <>
            <div className="set-row set-row-four">
                <div className="cover-features-title">
                    <span>Featured</span>
                    <h1>Featured Project</h1>
                    <p>We are a crowdfunding company founded to help startups who want to start their<br /> business to accelerate their achievements</p>
                </div>
                <div className="row ms-2 mt-5 justify-content-center">
                    {data.map((item, index) => (
                        <div key={item._id} className="col-12 col-md-3 mt-5 ">
                            <div className="box-content-features border border-dark">
                                <div className="image-content-features">
                                    <img src={`http://localhost:3777/get-img/${item.img[0]}`} alt="" style={{ width: '100%', height: '100%' }} />
                                    <div className="text-image-content">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="row ps-2">
                                    <div className="col-12 mt-3">
                                        {item.description}
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="outer-bar-features">
                                            <div className="inner-bar-features"></div>
                                        </div>
                                    </div>
                                    <div className="col-11 mt-2">
                                        <div className="row justify-content-between set-data-per-features">
                                            <div className="col-2 text-start set-pecents"> 75% </div>
                                            <div className="col-2 text-end set-price">{item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-3 text-center">
                        <button className="view-more-button">View More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

FeaturedProjectLP.propTypes = {
    data: propTypes.array,
};

export default FeaturedProjectLP;
