import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {

    return(
        <>
        <div className="navbar-container py-4">
            <div className="row justify-content-between">
                <div className="col-2 ">
                    <div className="d-flex set-logo-nav my-3">
                        <img src={Logo} alt="" />
                        <h3 className="pt-2 ps-2">Crowd<span>Lab</span></h3>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center gap-5 align-items-center ">
                    <li className="mx-3 set-li-nsv"><Link to={"/"} style={{color:'#1b1b1b',fontWeight:'600',fontSize:'20px'}}>Home</Link></li>
                    <li className="mx-3 set-li-nsv"><Link to={"/project"} style={{color:'#1b1b1b',fontWeight:'600',fontSize:'20px'}}>Project</Link></li>
                    <li className="mx-3 set-li-nsv"><Link to={"/about"} style={{color:'#1b1b1b',fontWeight:'600',fontSize:'20px'}}>About</Link></li>
                    <li className="mx-3 set-li-nsv"><Link to={"/contact"} style={{color:'#1b1b1b',fontWeight:'600',fontSize:'20px'}}>Contact Us</Link></li>
                </div>
                <div className="col-2 ">
                    <button className="btn-pp-nav text-center text-light my-3">
                        Profile
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;



{/* <ul className="d-flex justify-content-center set-menu-nav gap-5" style={{listStyleType: "none",textDecoration:'none',alignItems:'center',fontSize:'1.2rem',marginTop:'40px'}}> 

</ul> */}
