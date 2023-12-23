import '../BookingPage/BookingPageStepTwo.css';
import bca from '../../assets/bca.png';
import mandiri from '../../assets/mandiri.png';
import { Link } from 'react-router-dom';

function BookingPageStepTwo(){

    return(
        
        <>
    <div style={{width: '100vw', height: '100vh'}}>
    <div className="container-fluid text-center title-header">
        Crowd<span>Lab.</span>
    </div>
    <div className="container-fluid set-container">
        <div className="row mt-5 justify-content-center">

            <div className="col-6 d-flex justify-content-center">
                <div className="circle bg-primary text-dark">
                    1
                </div>
                <div className="circle bg-primary text-dark">
                    2
                </div>
                <div className="circle">
                    3
                </div>
            </div>
            
        </div>

        <div className="row mt-5 justify-content-center">
            <div className="col-7">
                <h1>Payment</h1>
                <p className="instructions">Kindly follow the instructions below</p>
            </div>
        </div>

        <div className="row mt-5 justify-content-center">
            <div className="col-5 ps-5 mt-5">
                <div className="box-payment-method">
                    <p className="mb-4">Transfer Pembayaran:</p>
                    <p>Tax: <span>10%</span> </p>
                    <p>Sub total: <span>$1000 USD</span></p>
                    <p>Total: <span>$1010 USD</span></p>
                </div>

                <div className="row">
                    <div className="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                            <circle cx="17" cy="17.5" r="17" fill="#E5E5E5"/>
                            <circle cx="17" cy="17.5" r="10" fill="#3252DF"/>
                          </svg>
                    </div>
                    <div className="col-3">
                        <img className="mt-1" src={bca} alt=""/>
                    </div>
                    <div className="col-5 set-bank">
                        Bank Central Asia<br/>
                        2208 1996<br/>
                        CrowdLab<br/>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                            <circle cx="17" cy="17.5" r="17" fill="#E5E5E5"/>
                            <circle cx="17" cy="17.5" r="10" fill="#A1A1A3"/>
                          </svg>
                    </div>
                    <div className="col-3">
                        <img className="mt-1" src={mandiri} alt=""/>
                    </div>
                    <div className="col-5 set-bank">
                        Bank Mandiri<br/>
                        2208 1996<br/>
                        CrowdLab<br/>
                    </div>
                </div>
            </div>

            <div className="col-1 d-flex justify-content-center">
                <div className="mid-line">

                </div>
            </div>
            <div className="col-5  mt-5 " style={{
                paddingLeft: '16%'
            }}>
                <div className="data-payment">
                    <p>Upload Bukti Transfer</p>
                    <input type="file"/>
                </div>
                <div className="data-payment mt-3">
                    <p>Asal Bank</p>
                    <input type="text"/>
                </div>
                <div className="data-payment mt-3">
                    <p>Nama Pengirim</p>
                    <input type="text"/>
                </div>
            </div>
        </div>

        <div className="row mt-5 justify-content-center">
            <div className="col-3 ps-5 ">
                <Link to="/booking/final">
                    <button className ="btn-find-apppp">Continue</button>
                </Link>
                
            </div>
        </div>
        <div className="row mb-5  justify-content-center">
            <div className="col-3 ps-5 ">

                <Link to="/">
                    <button className ="btn-how-itw mt-3 me-1">Cancel</button>
                </Link>
            </div>
        </div>

    </div>

    </div>
    
        </>

    )
}

export default BookingPageStepTwo;
