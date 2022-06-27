import axios from 'axios';
import React, {useState} from 'react'
//import {useHistory} from 'react-router-dom'
import './Registeruser.css';
import {Navigate} from "react-router-dom";

function Registeruser() {
    //const history = useHistory();
    const [user, setUser] = useState({
        email: "", password: "", checkpassword: "", firstname: "", lastname: "", phonenumber: ""
    });

    let name, value;

    const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value});

    }
    

    const PostData =  (e) => {
        e.preventDefault()
        console.log(user)
        let formdata = new FormData(e.target);
        const url = "http://localhost:8080/items/registeruser"
        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formdata)
        }).then(res => res.json()).then(response => {
            console.log(response);
            return <Navigate to="/login" />
        }).catch(function (response) {
            //handle error
            console.log(response);
          });
        
         
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
                        <h2>Responsive Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={PostData}>
                                <label htmlFor="email">Enter your Email:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} required />
                                    </div>
                                </label>

                                <label htmlFor="password">Enter password:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} required />
                                    </div>
                                </label>

                                <label htmlFor="checkpassword">Re-enter password:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="checkpassword" placeholder="Re-type Password" value={user.checkpassword} onChange={handleInputs} required />
                                    </div>
                                </label>

                                <label htmlFor='phonenumber'>Enter Phone Number:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                        <input type="number" name="phonenumber" placeholder="Phone Number" value={user.phonenumber} onChange={handleInputs}required />
                                    </div>
                                </label>

                                <div className="row clearfix">
                                    <div className="col_half">
                                        <label htmlFor='firstname'>First Name:
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="firstname" placeholder="First Name" value={user.firstname} onChange={handleInputs} />
                                            </div>
                                        </label>
                                    </div>

                                    <div className="col_half">
                                        <label htmlFor='lastname'>Last Name:
                                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                <input type="text" name="lastname" placeholder="Last Name" value={user.lastname} onChange={handleInputs} required />
                                            </div>
                                        </label>
                                    </div>
                                </div>


                                <div className="input_field checkbox_option">
                                    <input type="checkbox" id="cb1" />
                                    <label htmlFor="cb1">I agree with terms and conditions</label>
                                </div>

                                <button className="button" type='submit'> Register </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registeruser