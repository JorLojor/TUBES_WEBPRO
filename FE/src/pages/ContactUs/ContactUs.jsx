import'./ContactUs.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import culocation from '../../assets/culocation.png'
import cumail from '../../assets/cumail.png'
import cutelephone from '../../assets/cutelephone.png'
import culayer from '../../assets/culayer.jpg'

const ContactUs =() => {

    return(
        <>
        <Navbar/>
        
        <div>
            <div className ="container-fluid text-center">
                 <h1 className="contactus">Contact Us</h1>
                 <p className="csinfo"> 
                     contact us for further information regarding products and
                    our services as well as to provide suggestions<br/> and criticism, we will respond as quickly as possible

                 </p>
            </div>
                <div className="row justify-content-center mt-5" >

                    <div className="col-3 row">
                        <div className="col-3 ps-4">
                            <div className="icon-cu">
                                <img className="m-3" src={cutelephone} alt=""/>
                            </div>
                        </div>
                        <div className="col-6 pt-3 cstxt">
                            <h2>Telephone</h2>
                            <p>0896-3727-8577</p>
                        </div>
                    </div>

                    <div className="col-3 row">
                        <div className="col-3 ps-4">
                            <div className="icon-cu">
                                <img className="m-3" src={cumail} alt=""/>
                            </div>
                        </div>
                        <div className="col-6 pt-3 cstxt">
                            <h2>Mail</h2>
                            <p>supportCrowdlab@gmail.com</p>
                        </div>
                    </div>


                    <div className="col-3 row">
                        <div className="col-3 ps-4">
                            <div className="icon-cu">
                                <img className="m-3" src={culocation} alt=""/>
                            </div>
                        </div>
                        <div className="col-6 pt-3 cstxt">
                            <h2>Our Address</h2>
                            <p>sukabirus samping warteg,kost88,Bandung</p>
                        </div>
                    </div>

                    <div className="mt-5 ayip  position-relative mb-5">
                        <img className="" src={culayer} alt=""/>

                            
                                <div className="boxx container-fluid border mt-4 p-4 ">

                                    <h2>Write us a message</h2>

                                    <div className="d-flex  justify-content-between">
                                        <div className="col-12">
                                            <p>Full Name</p>
                                            <input type="text" style={{width:"100%"}}/>
                                            <br />
                                            <br />
                                            <p>Phone Number</p>
                                            <input type="text"style={{width:"100%"}} />
                                        </div>
                                    </div>
                                    <div className="d-flex   justify-content-between">
                                        <div className="col-12" >
                                            <p>Email Address</p>
                                            <input type="text"style={{width:"100%"}}/>
                                            <br />
                                            <br />
                                            <p>Company Name</p>
                                            <input type="text"style={{width:"100%"}}/>
                                        </div>
                                    </div>

                                    <div className="d-flex seeepdah  ">
                                        <div className="col-12">
                                            <p>Message</p>
                                            <input type="text"style={{width:"100%"}}/>
                                        </div>
                                    </div>
                                    <div className="d-flex form-check justify-content-end gap-3 align-center" >
                                        <div className="mt-3">
                                            <input className="form-check-input border border-2" type="checkbox" value="" id="flexCheckDefault" style={{width:"20px",height:"25px"}}/>
                                            <label className="form-check-label mt-1" htmlFor="flexCheckDefault">
                                                I agree to the terms & conditions
                                            </label>
                                        </div>
                                        <button className="btn btn-primary mt-3">Send Message</button>
                                    </div>
                                    
                                    

                                </div>
                            
                    </div>

                    
                </div>
            {/* <div  className="row">Home</div> */}



        </div>

        <Footer/>
        </>
       
    )
}

export default ContactUs;
