import imgch from '../../../assets/choseus.png';
import './ChoseUs.css';

const ChoseUs = () => {
    return(
        <>
            <div className="cover-fisi-misi mt-5" style={{paddingLeft:'10%',paddingRight:'10%',backgroundColor:'#3252DF'}}>
                <div className="row  position-relative justify-content-center">
                     <div className="col-6">
                        <div className="box-why-chose text-light p-5">
                            <h1 className='text-light text-start mb-5'>
                                Why You Need To <br /> Choose Us?
                            </h1>

                            <ul>

                                <li className='d-block'>
                                    <div className="d-flex">
                                        <div className="boxch-no pt-2">
                                            1
                                        </div>
                                        <h2 className='mt-3 ms-5'>Trustworthy</h2>
                                    </div>
                                    <div className="text-why-ch">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat.
                                        </p>
                                    </div>

                                </li>

                                <li className='d-block'>
                                    <div className="d-flex">
                                        <div className="boxch-no pt-2">
                                            2
                                        </div>
                                        <h2 className='mt-3 ms-5'>Wide Networking</h2>
                                    </div>
                                    <div className="text-why-ch">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat.
                                        </p>
                                    </div>

                                </li>

                                <li className='d-block'>
                                    <div className="d-flex">
                                        <div className="boxch-no pt-2">
                                            3
                                        </div>
                                        <h2 className='mt-3 ms-5'>24/5 Customer Service</h2>
                                    </div>
                                    <div className="text-why-ch">
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat.
                                        </p>
                                    </div>

                                </li>



                            </ul>
                        </div>
                     </div>
                     <div className="col-5 imggggggggggg">
                            <img src={imgch} alt="" className="img-fluid" />
                     </div>
                </div>
            </div>

        </>
    )
}

export default ChoseUs;
