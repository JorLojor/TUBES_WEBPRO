import { Link } from 'react-router-dom';
import img from '../../assets/iconbKP.png'
import './BookingPageStepThree.css'


function BookingPageStepThree () {

    
    return(
        <>
            <div className ="container-fluid text-center title-header">
                Crowd<span>Lab.</span>
            </div>
            <div className ="container-fluid">
                <div className ="row justify-content-center">
                    <div className ="col-4 set-bk-title text-center">
                        Yay! Completed
                    </div>
                </div>
            </div>
            <div className ="container-fluid">
                    <div className ="row justify-content-center">
                    <div className ="col-8 set-bk-title text-center">
                        <img src={img} alt=""/>
                        
                    </div>
                </div>
                <div className ="row justify-content-center">
                    <div className ="col-2">
                        <Link to ="/">
                            <button className  ="btn-find-ap">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BookingPageStepThree;
