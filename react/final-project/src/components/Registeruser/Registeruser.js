import axios from 'axios';
import React, { useState } from 'react'
//import {useHistory} from 'react-router-dom'
import './Registeruser.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Registeruser() {
    const nav = useNavigate();
    //const history = useHistory();
    const [user, setUser] = useState({
        email: "", password: "", checkpassword: "", firstname: "", lastname: "", phonenumber: ""
    });

    let name, value;

    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }


    const PostData = (e) => {
        e.preventDefault()
        console.log(user)
        const { firstname, lastname, email, password, checkpassword, phonenumber } = user
        if (firstname && lastname && phonenumber && email && password && (password === checkpassword)) {
            let formdata = new FormData(e.target);
            const url = "http://localhost:8080/items/registeruser"
            fetch(url, {
                method: "POST",
                body: new URLSearchParams(formdata)
            }).then(res => res.json()).then(response => {
                
                nav("/login")
                console.log(response);
            }).catch(function (response) {
                //handle error
                console.log(response);
            });
        } else {
            alert("Password not match")
        }




        // if(data.status === 422 || !data) {
        //     window.alert("invalid Registration");
        //     console.log("invalid registration")
        // } else {
        //     window.alert("Registration succesful");
        //     console.log("Registration successful");


        // }
    }

    return (
        <div>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2> Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={PostData} className="register">
                                <div className='register'>
                                <label htmlFor="email">Enter your Email:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} required />
                                    </div>
                                </label>
                                </div>

                                <div className='register'>
                                <label htmlFor="password">Enter password:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} required />
                                    </div>
                                </label>
                                </div>

                                <div className='register'>
                                <label htmlFor="checkpassword">Re-enter password:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="checkpassword" placeholder="Re-type Password" value={user.checkpassword} onChange={handleInputs} required />
                                    </div>
                                </label>
                                </div>

                                <div className='register'>
                                <label htmlFor='phonenumber'>Enter Phone Number:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                        <input type="number" name="phonenumber" placeholder="Phone Number" value={user.phonenumber} onChange={handleInputs} required />
                                    </div>
                                </label>
                                </div>

                                <div className='register'>
                                <label htmlFor='firstname'>First Name:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputs} />
                                    </div>
                                </label>
                                </div>
                                


                                <div className='register'>
                                <label htmlFor='lastname'>Last Name:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                        <input type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputs} required />
                                    </div>
                                </label>
                                </div>
                                



                                <div className='register'>
                                <Link to='/login' className='loginregister'><button className="button" type='submit'> Login </button></Link><button className="button" type='submit'> Register </button> 

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