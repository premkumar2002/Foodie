import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setLoggedIn(!isLoggedIn);
    };

    console.log("rendered");

    return (
        <div className="flex justify-between px-8 py-4 bg-indigo-950 shadow-sm">
            <div className="flex space-x-1">
                <img className="w-24" src={LOGO_URL}/>
                <h1 className="text-stone-50 text-3xl ml-2 mt-5">Foodie</h1>
            </div>
            <div className="navitems">
                <ul className="flex px-4 py-8 space-x-5 text-stone-50">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li><Link to="/groceries">Groceries</Link></li>
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
    );
};

export default Header;