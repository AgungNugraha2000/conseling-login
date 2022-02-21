import Navbar from "./component/Navbar";
import React, { useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    // const [user, setUser] = useState(null);

    useEffect(() => {
        //     const getUser = () => {
        //         fetch("http://localhost:5000/auth/login/success", {
        //             method: "GET",
        //             credentials: "include",
        //             headers: {
        //                 Accept: "application/json",
        //                 "Content-Type": "application/json",
        //                 "Access-Control-Allow-Credentials": true,
        //             },
        //         })
        //             .then((response) => {
        //                 if (response.status === 200) return response.json();
        //                 throw new Error("authentication has been failed!");
        //             })
        //             .then((resObject) => {
        //                 setUser(resObject.user);
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             });
        //     };
        //     getUser();
    }, []);
    // console.log(user)

    return (
        <BrowserRouter>
            <div>
                <Navbar email={email} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={email ? <Navigate to="/" /> : <Login />}
                    // element={<Login />}
                    />
                    <Route
                        path="/post/:id"
                        element={email ? <Post /> : <Navigate to="/login" />}
                    // element={<Post />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;