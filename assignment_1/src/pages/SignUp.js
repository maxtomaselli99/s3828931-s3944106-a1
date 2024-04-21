"use client";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom"

// used to validate user input
import {
    isValidEmail,
    isStrongPassword,
} from './validation';

// interface for form data
export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
    });

    // initialises message for future display
    const [message, setMessage] = useState("");

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
    }, []); // Empty dependency array to run this effect only once when the component mounts

    // updates form data when user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const getCurrentDate = (separator='/') =>{

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate a UUID for userID
        const userID = uuidv4();

        // Add userID to the formData
        const formDataWithUserID = {
            ...formData,
            userID,
        };

        if (localStorage.getItem(formData.email) != null) {
            setMessage(
                "User already exists, try logging in or choosing a new username."
            );
            return;
        }

        // Validate the form data
        if (!isValidEmail(formData.email)) {
            setMessage("Please enter a valid email address");
            return;
        }

        if (!isStrongPassword(formData.password)) {
            setMessage(
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
            );
            return;
        }
        

        var userObj = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            name: formData.name,
            dateJoined: getCurrentDate(),
        }
        localStorage.setItem(formData.email, JSON.stringify(userObj));
        localStorage.setItem("LoggedUser", formData.email);
        window.location.href = "/";
        // Send the form data to the server
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 mb-40 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-black">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Username"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
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
                    <div className="mb-4 flex flex-col">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-6"
                        >
                            Register
                        </button>
                        <Link to="/signin">
                            <button className="text-gray-700 font-bold">
                                Already a user? Sign In
                            </button>
                        </Link>
                    </div>
                    <div className="text-red-500 text-sm">{message}</div>
                </form>
            </div>
        </div>
    );
}
