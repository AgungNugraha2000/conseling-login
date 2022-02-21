// import Google from '../img/google.png';
import React from "react";
import Facebook from '../img/facebook.png';
import Github from '../img/github.png';
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate()
    const onSuccess = (res) => {
        console.log(res.profileObj)
        alert("Congrats you're has login")
        Cookies.set("email", res.profileObj.email);
        Cookies.set("image", res.profileObj.imageurl);
        navigate("/")
    }

    const onFailure = (res) => {
        console.log(res)
    }
    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <GoogleLogin
                        clientId="648982168253-5360vpv4c5n3bushheqpps8r466l7ek6.apps.googleusercontent.com"
                        buttonText="Login With Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                        className="loginButton email"
                    />
                    {/* <div className="loginButton google">
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div> */}
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;