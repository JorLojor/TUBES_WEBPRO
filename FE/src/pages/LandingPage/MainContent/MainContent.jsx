import gambar from '../../../assets/image-intro-lp.png';

const MainContent = ()=>{

    return(
        <>
               <div className="row justify-content-between set-row">

                   <div className="col-12 col-md-6">
                        <div className="container-text-intro-lp">
                            <div className="text-start">
                                <div className=""style={{marginLeft:'-350px',marginBottom:'50px'}}>
                                    <h1>Together We can</h1>
                                    <h1>Grow up Together</h1>
                                </div>
                                <p>
                                    We are a crowdfunding company founded to help startups<br/>
                                    who want to start their business to accelerate their<br/>
                                    achievements, Start your business here
                                </p>
                            </div>
                            <div className="d-flex justify-content-start" style={{marginTop:'50px'}}>
                               
                                <button className="btn-findap">Find project</button>
                              
                                <button className="btn-howitw">How its works</button>
                            </div>
                        </div>
                   </div>

                   <div className="col-12 col-md-5 d-flex justify-content-end">
                        <img src={gambar} alt="Group-1" border="0" />
                        <div className="container-img-intro-lpposition-relative">
                            <div className="border-img-lp">

                            </div>
                        </div>
                   </div>

                </div>
        </>
    )
    
}

export default MainContent;
