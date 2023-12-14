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
                 <p className="csinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
                 dolore magna aliqua.</p>
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
                            <p>394-091-3312</p>
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
                            <p>support@crowdlab.com</p>
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
                            <p>832  Thompson Drive, San Fransisco
                                CA 94107, United States</p>
                        </div>
                    </div>

                    <div className="mt-5 ayip bg-primary position-relative">
                        <img className="" src={culayer} alt=""/>

                            <div className="boxx"> 
                                <div className="col-5 bg-warning ps-2 mt-4">

                                    <h2>Write us a message</h2>

                                    <div className="row bg-secondary mt-2">
                                        <div className="col-6">
                                            <p>Full Name</p>
                                            <input type="text"/>
                                            <p>Phone Number</p>
                                            <input type="text"/>
                                        </div>
                                        <div className="col-6" >
                                            <p>Email Address</p>
                                            <input type="text"/>
                                            <p>Company Name</p>
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="row bg-warning">
                                        <div className="col-6">
                                            <p>Message</p>
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="row bg-primary">
                                        <div className="col-9">
                                            <p>Accept terms & conditions</p>
                                        </div>
                                        <div className="col-3 ">
                                            <button className="btn-msg text-center text-light mt-5">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                    

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

