import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';


function Login(props) {
    const { loginUser, handleInputs, LoginData } = props
    return (
        <div>
            <div className='login_logo'>
                <Link to="/"><img src="./img/img/core-img/logo.png" alt="" /></Link>
            </div>
            <div className="form_wrapper">
                <div className="">
                    <div className="">
                        <h4> Login Form</h4>
                    </div>
                    <div className="">
                        <div className="">
                            <form onSubmit={LoginData} className='loginform'>
                                <div className=''>
                                    <label htmlFor="email">Enter your Email:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="email" name="email" placeholder="Email" value={loginUser.email} onChange={handleInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor="password">Enter password:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                            <input type="password" name="password" placeholder="Password" value={loginUser.password} onChange={handleInputs} required />
                                        </div>
                                    </label>
                                </div>


                                <div className=''>
                                    <Link to='/register' className='loginregister'><button className="button" type='submit'> Register </button></Link> <button className="button" type='submit'> Login </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login