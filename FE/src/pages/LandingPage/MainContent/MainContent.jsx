import gambar from '../../../assets/image-intro-lp.png';
import './MainContent.css';

const MainContent = ()=>{

    return(
        <>
               <div className="row justify-content-between set-row">

                   <div className="col-12 col-md-7">
                       
                            
                            <div className="set-main-text text-start"style={{marginBottom:'50px'}}>
                            <h1>Together We can<br/>Grow up Together</h1>
                                <p>
                                    We are a crowdfunding company founded to help startups<br/>
                                    who want to start their business to accelerate their<br/>
                                    achievements, Start your business here
                                </p>
                            </div>
                           
                            <div className="d-flex justify-content-start gap-4" style={{marginTop:'50px'}}>
                               
                                <button className="btn-findap text-light">Find project</button>
                              
                                <button className="btn-howitw text-light">How its works</button>
                            </div>
                       
                   </div>

                   <div className="col-12 col-md-5 d-flex justify-content-end">
                        <img src={gambar} alt="Group-1" border="0" />
                    
                   </div>

                </div>
        </>
    )
    
}

export default MainContent;
