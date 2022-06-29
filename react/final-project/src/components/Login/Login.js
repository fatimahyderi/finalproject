
import axios from 'axios';
import React, {useState,useEffect} from 'react'
//import {useHistory} from 'react-router-dom'
import './Login.css';

    
function Login() {
    //const history = useHistory();
    const [loginUser, setLoginUser] = useState({
        email: "", password: "" 
    });

    let name, value;

    const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setLoginUser({ ...loginUser, [name]:value});

    }
    
    // const [loginUserData, getLoginUserData] = useState([]);
    // const getUserData = () => {
    //     const userEmail = loginUser.email
    //     axios.get(`http://localhost:8080/items/users/${userEmail}`)
    //         .then(function (response) {
    //             // handle success
    //             getLoginUserData(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }

    // useEffect(() => {
    //     getUserData()
    // }, []);

    const LoginData =  (e) => {
        e.preventDefault()
        console.log(loginUser)
        
            const userEmail = loginUser.email
            axios.get(`http://localhost:8080/items/users/${userEmail}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log("email not match");
                })
        
        // let formdata = new FormData(e.target);
        // const url = "http://localhost:8080/items/registeruser"
        // fetch(url, {
        //     method: "POST",
        //     body: new URLSearchParams(formdata)
        // }).then(res => res.json()).then(response => {
        //     console.log(response);
        // }).catch(function (response) {
        //     //handle error
        //     console.log(response);
        //   });

        
        
        
        
         
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
                            <form onSubmit={LoginData}>
                                <label htmlFor="email">Enter your Email:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" value={loginUser.email} onChange={handleInputs} required />
                                    </div>
                                </label>

                                <label htmlFor="password">Enter password:
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Password" value={loginUser.password} onChange={handleInputs} required />
                                    </div>
                                </label>


                                <button className="button" type='submit'> Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login