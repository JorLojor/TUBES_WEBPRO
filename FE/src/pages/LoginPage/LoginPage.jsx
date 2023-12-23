import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
                const ress = response.data.data.user.name;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('user', ress);
                alert('Login Successful',{ress});
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
                            <div className="button-login mt-4">
                                <button type="button" className="text-light  mt-3 mb-3" onClick={handleSubmit}>Login</button>
                                <p> belum punya akun</p>
                                
                                    <Link to="/register">
                                        Register
                                    </Link>
                           

                            </div>  

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
