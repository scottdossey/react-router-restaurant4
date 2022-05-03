//Normally we'd create a lot of files, one for each Component...
//but in the interest of three things we are going to make this
//project exist entirely within index.js....
//These reasons are:
//1. Simplicity of demonstration.
//2. Ease of creation.
//3. To demonstrate to a certain extend how project can get
//   messy, and why you would split them up.

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

function Home(props) {
    const {state} = useLocation();
    
    let value = "not logged in.";
    if (state) {
        value = "Login: "+state.login;
    }
    return (
        <div>
            <h1>React Router Restaurant</h1>
            <h4>Serving up URLs like Momma used to make!</h4>
            <img src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?" /> 
            {value}
        </div>
    );
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>We here at the Triple-R love fresh URLs, 
                    especially ones tied to awesome React Components.</p>
                <p>It's even better when you can switch between 
                    those URLs with ease and share them with friends and family</p>                    
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <div>
                    Check out our amazing 24/7 menu:
                    <ul>
                        <li>Lazy Loading</li>
                        <li>Dynamic Route Matching</li>
                        <li>Location Transition Handling</li>
                    </ul>
                </div>
            </div>
        );
    }
}

function LoginButton(props) {
    let navigate = useNavigate();

    function handleButton(event)
    {
        navigate("/", { replace: true, state: { login: props.login}} );
    }

    return <button onClick={handleButton}>Push</button>;
}

//function Home(props) {
//    const {state} = useLocation();   
//    return <h1>Login is {state.login}</h1>;
//}

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <LoginButton login="Scott"/>
            </div>
        );
    }
}

class MyRoutes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}


ReactDOM.render(
    <React.StrictMode>
        <MyRoutes />
    </React.StrictMode>,
    document.getElementById("root")
);
