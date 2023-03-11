import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './register.css'

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: "",
        password: undefined,
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            console.log(credentials);
            await axios.post("/auth/register", credentials)
            const res = await axios.post("/auth/login", {username: credentials.username, password: credentials.password});
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate(-1)
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
            console.log(err.response.data)
        }
    }


    return (
        <>
        <Navbar type = "register" />
        <div className='container register register-ctn' >
            <div className="text-center ">
                <div className="form-signin w-100 m-auto">
                    <form>
                        <h1
                            className="mb-4"
                            alt=""
                            width="72"
                            height="57"
                        >EatEase</h1>
                        <h1 className="h3 mb-3 fw-normal">Register Here</h1>

                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Username"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button disabled={loading} onClick={handleClick} className="w-100 btn btn-lg btn-primary mb-5" type="submit" style={{ backgroundColor: "#DD5642" }}>
                            Register
                        </button>
                <div>
                {error && <span>{error.match(/Error: (.+)</)[1].split("<br>")[0]}</span>}
                </div>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Register
