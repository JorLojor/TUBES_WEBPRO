import { useEffect, useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import img from '../../assets/image306.png';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });


    useEffect(()=>{
        window.localStorage.removeItem('accessToken');
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3777/api/users/login', formData);

            if (response.status === 200) {
                const accessToken = response.data.data.token;
                localStorage.setItem('accessToken', accessToken);
                alert('Login Successful');
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error.message);
            alert('Login Failed');
        }
    };

    const updateForm = (e) => {
        e.persist();
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <>
            <div className="container-fluid">
                <div className="row set-row-login">
                    <div className="col-6 set-bg-login">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="box-login-page">
                            <h1>Buat Akun</h1>
                            <p> 
                                Follow the instructions to make it easier to register and you will be 
                                able to explore CrowdLab
                            </p>
                         
                                <input
                                    type="text"
                                    className="form-control input-user-name"
                                    id="name"
                                    name="name"
                                    placeholder='username'
                                    onChange={updateForm}
                                    value={formData.name}
                                />
                        
                         
                                <input
                                type="password"
                                className="form-control input-user-name mt-4"
                                id="password"
                                name="password"
                                placeholder='password'
                                onChange={updateForm}
                                value={formData.password}
                                />
                            
                            {/* <div className="input-user-name mt-4">
                                
                            </div> */}

                            <div className="button-login mt-4 text-center">
                                <button type="button" className="text-light  mt-3 mb-3" onClick={handleSubmit}>Login</button>
                                {/* <p>Atau gunakan</p> */}
                                {/* <button type="button" className="btn-login-google mt-1" onClick={handleSubmit}>
                                    <img src="../assets/image4.png" alt=""/> Google
                                </button> */}

                            </div>  

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;



// <div className="container-fluid">
//                 <div className="card">
//                     <div className="card-body">
//                         <h1>Login Page</h1>
//                         <label htmlFor="name">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="name"
//                             name="name"
//                             onChange={updateForm}
//                             value={formData.name}
//                         />
//                         <label htmlFor="password" className="form-label">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             name="password"
//                             onChange={updateForm}
//                             value={formData.password}
//                         />
//                     </div>
//                     <button
//                         className="btn rounded w-100"
//                         style={{ background: '#121122', color: '#fff' }}
//                         onClick={handleSubmit}
//                     >
//                         Login
//                     </button>
//                 </div>
//             </div>
