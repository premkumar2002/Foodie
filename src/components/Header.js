import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
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
            </div>  
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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