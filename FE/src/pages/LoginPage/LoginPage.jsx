import { useEffect, useState } from 'react';
import axios from 'axios';

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
                <div className="card">
                    <div className="card-body">
                        <h1>Login Page</h1>
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={updateForm}
                            value={formData.name}
                        />
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={updateForm}
                            value={formData.password}
                        />
                    </div>
                    <button
                        className="btn rounded w-100"
                        style={{ background: '#121122', color: '#fff' }}
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
