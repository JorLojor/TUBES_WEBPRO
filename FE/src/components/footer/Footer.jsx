import './Footer.css';

const Footer = () => {
    return (
    
            <footer className="row text-light mt-5 set-footer ">
                <div className="col-12 col-md-3 pt-5">
                    <div className="  text-center mt-5 text-light">
                        <h2>CrowdLab</h2>
                        <p className='mt-4'>Copyright © 2023.<br/>
                            All Rights Reserved.</p>
                    </div>
                </div>


                <div className="col-12 col-md-2">
                    
                    <ul className='page-menus-footer'>
                        <li><h3>Page Menus</h3></li>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>My account</li>
                    </ul>
                </div>
                <div className="col-12 col-md-2">
                <ul className='page-menus-footer'>
                        <li><h3>Our Product</h3></li>
                        <li>Crowd Project</li>
                        <li>Find Investors</li>
                    </ul>
                </div>
                <div className="col-12 col-md-2">
                <ul className='page-menus-footer'>
                        <li><h3>Social Media</h3></li>
                        <li>Twitter</li>
                        <li>Tiktok</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </footer>

    )
}

export default Footer;
