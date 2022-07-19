import React from 'react'
import './Registeruser.css';
import { Link } from 'react-router-dom';



function Registeruser(props) {
    const { registeruser, handleRegisterInputs, RegisterPostData } = props

    return (
        <div>
            <div className='login_logo'>
                <Link to="/"><img src="./img/img/core-img/logo.png" alt="" /></Link>
            </div>
            <div className="form_wrapper">
                <div className="">

                    <div className="">
                        <h4> Registration Form</h4>
                    </div>
                    
                    <div className="">
                        <div className="">
                            <form onSubmit={RegisterPostData} className="register">
                                <div className=''>
                                    <label htmlFor='firstname'>First Name:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="firstname" placeholder="First Name" value={registeruser.firstname} onChange={handleRegisterInputs} />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor='lastname'>Last Name:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="lastname" placeholder="Last Name" value={registeruser.lastname} onChange={handleRegisterInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor="email">Enter your Email:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input type="email" name="email" placeholder="Email" value={registeruser.email} onChange={handleRegisterInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor='phonenumber'>Enter Phone Number:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                            <input type="number" name="phonenumber" placeholder="Phone Number" value={registeruser.phonenumber} onChange={handleRegisterInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor="password">Enter password:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                            <input type="password" name="password" placeholder="Password" value={registeruser.password} onChange={handleRegisterInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <label htmlFor="checkpassword">Re-enter password:
                                        <div className=""> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                            <input type="password" name="checkpassword" placeholder="Re-type Password" value={registeruser.checkpassword} onChange={handleRegisterInputs} required />
                                        </div>
                                    </label>
                                </div>

                                <div className=''>
                                    <Link to='/' className='loginregister'><button className="button" type='submit'> Login </button></Link>  <button className="button" type='submit'> Register </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registeruser