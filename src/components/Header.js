import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleLoginLogout = () =>{
        setLoggedIn(!isLoggedIn);
    }
    console.log("rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
                <h1>Foodie</h1>
            </div>  
            <div className="navitems">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li>Cart</li>
                    <button 
                        className={`login ${isLoggedIn ? 'logout' : ''}`} 
                        onClick={handleLoginLogout}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </ul> 
            </div> 
        </div> 
    )
};

export default Header;