import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const CartCheckout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const totalCost = cartItems.reduce((acc, item) => acc + item.price / 100, 0);

    const handlePlaceOrder = () => {
        setShowPopup(true);

        // Clear the cart and close popup after 2 seconds, then redirect
        setTimeout(() => {
            dispatch(clearCart());
            setShowPopup(false);
            navigate("/");
        }, 2000);
    };

    return (
        <div className="container mx-auto p-6 grid grid-cols-3 gap-6 relative">
            {/* Left side: Cart Items */}
            <div className="col-span-2 space-y-4">
                <h1 className="text-3xl font-bold mb-4">Cart Items</h1>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
               ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">₹ {item.price / 100}</p>
                            </div>
                            <button
                                onClick={() => dispatch(removeItem(index))}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Right side: Summary and Checkout */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="bg-gray-100 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal</span>
                        <span>₹ {totalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Discount</span>
                        <span>₹ 0.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₹ {totalCost.toFixed(2)}</span>
                    </div>
                </div>
                
                {/* Coupon Code Input */}
                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                
                {/* Address Input */}
                <textarea
                    rows="3"
                    placeholder="Enter Delivery Address"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></textarea>

                {/* Submit Button */}
                <button
                    onClick={handlePlaceOrder}
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    disabled={!address}
                >
                    Place Order
                </button>
            </div>

            {/* Popup Message */}
            {showPopup && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartCheckout;
