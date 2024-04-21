"use client";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Signin() {
    // interface for form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // initialises message for future display
    const [message, setMessage] = useState("");

    const [showConfirmation, setShowConfirmation] = useState(false);

    // Function to clear the message
    const clearMessage = () => {
        setMessage("");
    };

    // Add a click event listener when the component mounts
    useEffect(() => {
        document.addEventListener("click", clearMessage);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", clearMessage);
        };
    }, []);

    // updates form data when user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // validation logic
        if (localStorage.getItem(formData.email) == null) {
            setMessage(
                "User does not exist, try checking your spelling or signing up."
            );
            return;
        }
        var user = JSON.parse(localStorage.getItem(formData.email));
        if (formData.password !== user.password) {
            setMessage(
                "Incorrect password. Please try again."
            );
            return;
        }
        localStorage.setItem("LoggedUser", formData.email);
        setShowConfirmation(true);
        setTimeout(() => {
            window.location.href = "/Profile";
        }, 2000);
    };

    // renders the signin page
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 mb-40 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-black">Welcome back!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-red-500 font-bold">{message}</div>
                    <div className="mb-4 flex flex-col">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-6"
                        >
                            Sign In
                        </button>
                        <Link to="/Signup">
                            <button className="text-gray-700 font-bold">
                                New user? Sign Up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-center">Successfully logged in!</p>
                        {/* You can add additional content or actions for the popup */}
                    </div>
                </div>
            )}
        </div>
    );
}
// export default SignIn;