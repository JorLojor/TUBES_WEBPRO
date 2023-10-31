import './intro.css';
import gambar from '../../../assets/image-intro-lp.png';


const IntroLP = () => {

    return(
        <>
            <div className="container-intro-lp">
                <div className="row justify-content-between set-row">

                   <div className="col-12 col-md-5">
                        <div className="container-text-intro-lp">
                            <div className="text-intro-lp">
                                <h1>
                                Together We can<br/>
                                Grow up Together
                                </h1>
                                <p>
                                    We are a crowdfunding company founded to help startups<br/>
                                    who want to start their business to accelerate their<br/>
                                    achievements, Start your business here
                                </p>
                            </div>
                            <div className="button-intro-lp">
                                <button className="btn-find-ap">Get Started</button>
                                <button className="btn-how-itw">Learn More</button>
                            </div>
                        </div>
                   </div>

                   <div className="col-12 col-md-5">
                        <div className="container-img-intro-lp position-relative">
                            <img src={gambar} alt="Group-1" border="0" />
                            <div className="border-img-lp">

                            </div>
                        </div>
                   </div>

                </div>
                <div className="set-row set-row-sec">
                    <div className="box-info-intro-lp row">

                        <div className="col-12 col-md-3 text-center set-review">
                            <p>Collected</p>
                            <h1>10.000+</h1>
                            
                        </div>
                        <div className="col-12 col-md-3 text-center set-review">
                            <p>Backings</p>
                            <h1>10.000.000</h1>
                            
                        </div>
                        <div className="col-12 col-md-3 text-center set-review">
                            <p>Project Started</p>
                            <h1>20.000+</h1>
                            
                        </div>
                        <div className="col-12 col-md-3 text-center set-review">
                            <p>Project</p>
                            <h1>100+</h1>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="set-row set-row-trird">
                   <div className="row justify-content-between pe-5">
                        <div className="col-1 set-categori-textt">Category</div>
                        
                   </div>
                   <div className="row justify-content-between set-inner-row">
                        <div className="col-4 text-discover ">
                            Discover Project <br/>
                            By Category
                        </div>
                        <div className="col-8">
                            <div className="row  justify-content-between">

                                <div className="col-3  ">
                                    <div className="box-content-discover">
                                        
                                    </div>
                                </div>
                                <div className="col-3 ">
                                    <div className="box-content-discover">
                                        
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="box-content-discover">
                                        
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    
                   </div>
                </div>
                <div className="set-row set-row-four">

                    <div className="cover-features-title">
                        <p>Featured</p>
                        <h1>Featured Project</h1>
                        <p>We are a crowdfunding company founded to help startups
                            who want to start their<br/> business to accelerate their
                            achievements
                        </p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-3  ">

                            <div className="box-content-features">
                                <div className="image-content-features" style={{backgroundImage: `url(${gambar})`}}>

                                    <div className="row text-image-content">
                                        test test test
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-12">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.
                                    </div>

                                    <div className="col-12">
                                        <div className="outer-bar-features">
                                            <div className="inner-bar-features"></div>
                                        </div>
                                    </div>

                                    <div className="col-11">
                                        <div className="row justify-content-between set-data-per-features">
                                            <div className="col-2 text-start"> 75% </div>
                                            <div className="col-2 text-end"> $1000.000</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-3 ">
                            <div className="box-content-features">
                                    p
                                </div>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <div className="box-content-features">
                                p
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            
            <br />

        </>
    )
}

export default IntroLP;
