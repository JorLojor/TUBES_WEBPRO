/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';

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
                                <div key={index} className="col-3">
                                    <img src={`../../../../../BE/Upload/`} alt="" className="img-fluid" />
                                    {item.title}
                                    {item.description}
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
