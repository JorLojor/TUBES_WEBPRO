import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {

    return(
        <>
        <div className="container-fluid navbar-container">
            <div className="row justify-content-between">
                <div className="col-2">
                    <div className="d-flex set-logo-nav">
                        <img src={Logo} alt="" />
                        <h3 className="pt-2 ps-2">Crowd<span>Lab</span></h3>
                    </div>
                </div>
                <div className="col-6 ">
                        <ul className="nav-links d-flex justify-content-center set-menu-nav gap-5" style={{listStyleType: "none",textDecoration:'none',alignItems:'center',fontSize:'1.2rem',marginTop:'40px'}}> 
                            <li className="mx-1"><Link to={"/"} >Home</Link></li>
                            <li className="mx-1"> <Link to={"/project"}>Project</Link></li>
                            <li className="mx-1"><Link to={"/about"}>About</Link></li>
                            <li className="mx-1"><Link><a href="/">Contact Us</a></Link></li>
                        </ul>
                </div>
                <div className="col-2">
                    <button className="btn-pp-nav text-center text-light">
                        Profile
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
