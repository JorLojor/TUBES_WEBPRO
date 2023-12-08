import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import img from '../../assets/image306.png';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
    });

    useEffect(() => {
        window.localStorage.removeItem('accessToken');
    }, []);

    const updateForm = (e) => {
        e.persist();
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3777/api/users/register', formData);
            if (response.status === 200) {
                alert('Register Successful');
                // Menggunakan react-router-dom untuk navigasi ke halaman login
                window.location.href = '/login';
            }
        } catch (error) {
            console.log(error.message);
            // Sesuaikan pesan alert berdasarkan respons server yang diterima
            alert('Register Failed');
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row set-row-login">
                <div className="col-6 set-bg-login">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="box-login-page">
                            <h1>Register</h1>
                            <p> 
                                Follow the instructions to make it easier to register and you will be 
                                able to explore CrowdLab
                            </p>
                            <input
                                type="text"
                                className="form-control input-user-name"
                                id="name"
                                name="name"
                                placeholder="username"
                                onChange={updateForm}
                                value={formData.name}
                            />
                            {/* ... */}
                            <input
                                type="password"
                                className="form-control input-user-name mt-4"
                                id="password"
                                name="password"
                                placeholder="password"
                                onChange={updateForm}
                                value={formData.password}
                            />
                            {/* ... */}
                            <input
                                type="password"
                                className="form-control input-user-name mt-4"
                                id="email"
                                name="email"
                                placeholder="email"
                                onChange={updateForm}
                                value={formData.email}
                            />
                            {/* ... */}
                            <div className="button-login mt-4">
                                <button type="button" className="text-light mt-3 mb-3" onClick={handleSubmit}>
                                    Register
                                </button>
                                <p>belum punya akun</p>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
