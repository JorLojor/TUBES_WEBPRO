import './OurGroup.css';
// img
import hanip from '../../../assets/hanip.png';
import jorss from '../../../assets/jorss.png';
import geo from '../../../assets/geo.png';
import pute from '../../../assets/pute.png';
import rama from '../../../assets/rama.png';



const OurGroup = () => {

    return(
        <>
            <div className="cover-fisi-misi mt-5" style={{paddingLeft:'10%',paddingRight:'10%'}}>
                <div className="row  position-relative justify-content-center text-center">
                    <h1>
                        We Can Do No Great Things, Only Small Things <br /> With Great Love
                    </h1>
                    <div className="col-4 mt-5">
                        <div className="box-poto m-auto">
                            <img src={hanip} alt="" />
                        </div>
                        <h3>hanif fikri</h3>
                        <p>FE & HORE TEAM & style react</p>
                    </div>

                    <div className="col-4 mt-5">
                        <div className="box-poto m-auto">
                            <img src={jorss} alt="" />
                        </div>
                        <h3>geore ibrahim hanif</h3>
                        <p>BE / FE</p>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="box-poto m-auto">
                            <img src={geo} alt="" />
                        </div>
                        <h3>geonanda</h3>
                        <p>FE component react</p>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="box-poto m-auto">
                            <img src={pute} alt="" />
                        </div>
                        <h3>Putrie Risky</h3>
                        <p>FE pages & component</p>
                    </div>
                    <div className="col-4 mt-5">
                        <div className="box-poto m-auto">
                            <img src={rama} alt="" />
                        </div>
                        <h3>Ramadhani Dwi</h3>
                        <p>UI UX & progress report</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default OurGroup;
