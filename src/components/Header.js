import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [showCartMessage, setShowCartMessage] = useState(false);
    const navigate = useNavigate();

    const handleLoginLogout = () => {
        setLoggedIn(!isLoggedIn);
    };

    // subscribing to store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const handleCartClick = () => {
        if (cartItems.length > 0) {
            navigate("/checkout");
        } else {
            setShowCartMessage(true);
            setTimeout(() => setShowCartMessage(false), 2000);
        }
    };

    return (
        <div className="relative flex justify-between px-8 py-4 bg-indigo-950 shadow-sm">
            <div className="flex space-x-1">
                <img className="w-24" src={LOGO_URL} alt="Logo" />
                <h1 className="text-stone-50 text-3xl ml-2 mt-5">Foodie</h1>
            </div>
            <div className="navitems">
                <ul className="flex px-4 py-8 space-x-5 text-stone-50">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li>
                        <button onClick={handleCartClick} className="relative">
                            <span className="absolute -top-3 -right-2 text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                            🛒
                        </button>
                    </li>
                    <button 
                        className={`login ${isLoggedIn ? 'logout' : ''}`} 
                        onClick={handleLoginLogout}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </ul>
            </div>

            {/* Message displayed when cart is empty */}
            {showCartMessage && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-1 px-3 rounded-md">
                    Add at least one item
                </div>
            )}
        </div>
    );
};

export default Header;
