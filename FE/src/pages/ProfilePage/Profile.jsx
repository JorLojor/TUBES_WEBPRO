/* eslint-disable no-unused-vars */
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    const url = 'http://localhost:3777/api/users/';

    const [user, setUser] = useState();

    useEffect(() => {
        getUser();
    }, []);
    useEffect(() => {
        getUser();
    }, [id]);


    const getUser = async () => {
        console.log(id);
        axios.get(`${url}${id}`)
            .then((res) => {
                setUser(res.data.data);
                console.log(res.data.data.name);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // console.log(user.name);





    return(
        <>
         <div className="container-fluid" style={{position:'fixed',zIndex:'1', 
                backgroundColor:'white',width:'100%',height:'10vh',top:'0',left:'0'}}>
                <Navbar/>
        </div>

        {
            user && (
                <div className="container-fluid" style={{marginTop:'50vh'}}>
                <div className="row">
                    <div className="col-3">
                        <div className="box-profile-page">
                            <div className="d-flex justify-content-center">
                                <h3>{user.name}</h3>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>{user.email}</h5>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>{user.phone}</h5>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5>{user.address}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )

            
            
        }
        </>
    )
};


export default Profile;
