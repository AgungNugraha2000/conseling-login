import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogout } from 'react-google-login';

const clientId = "648982168253-5360vpv4c5n3bushheqpps8r466l7ek6.apps.googleusercontent.com"

const Navbar = ({ user }) => {
    // const logout = () => {
    //     window.open("http://localhost:5000/auth/logout", "_self");
    //     alert("You're logged out is successfully")
    // };
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        setEmail(Cookies.get("email"))
        setImage(Cookies.get("image"))
    }, [])

    const logout = (res) => {
        Cookies.remove("email");
        Cookies.remove("image");
        Cookies.remove("token");
        Cookies.remove("jwt");
        signOut();
        console.log("Logout Success");

        navigate.reload();
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onFailure,
        onLogoutSuccess,
    })

    const onFailure = () => {
        console.log("Logout is failed")
    }

    const onLogoutSuccess = (res) => {
        console.log("Congrats you've logout")
        alert("Congrats you've logout")
    }

    return (
        <div className='navbar'>
            <span className='logo'>
                <Link className='link' to="/">Conseling App</Link>
            </span>
            {email ? (
                <ul className='list'>
                    <li className="listItem">
                        <img
                            src={image}
                            alt=""
                            className="avatar"
                        />
                    </li>
                    <li className='listItem'>{email}</li>
                    <li className='listItem' onClick={logout}>Logout</li>
                </ul>
            ) : (<Link to="login" className='link'>Login</Link>)}



            {/* {user ? (
                <ul className='list'>
                    <li className="listItem">
                        <img
                            src={user.photos[0].value}
                            alt=""
                            className="avatar"
                        />
                    </li>
                    <li className='listItem'>{user.displayName}</li>
                    <li className='listItem' onClick={logout}>Logout</li>
                </ul>
            ) : ()} */}
        </div>
    )
}

export default Navbar;