import React from "react";
import { useGoogleLogout } from 'react-google-login';

const clientId = "648982168253-5360vpv4c5n3bushheqpps8r466l7ek6.apps.googleusercontent.com"

function Logout() {
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
        <button onClick={signOut}>
            <span>Logout</span>
        </button>
    )
}

export default Logout;