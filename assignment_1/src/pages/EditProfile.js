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
export default function EditProfile() {

    var email = localStorage.getItem("LoggedUser")
    var user = JSON.parse(localStorage.getItem(email));

    const [formData, setFormData] = useState({
        newPassword: "",
        name: "",
        email: "",
        password: "",
        confirmNewpassword: "",
        bio: "",
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
    

    const handleSubmit = (e) => {
        e.preventDefault();


        // Validate the form data

        if (formData.password !== user.password && formData.password !== "") {
            setMessage(
                "Incorrect password. Please try again."
            );
            return;
        }

        if (formData.newPassword !== formData.confirmNewpassword && formData.newPassword !== "") {
            setMessage(
                "Passwords do not match. Please try again."
            );
            return;
        }
        
        var name = user.name;
        var password = user.password;
        var bio = user.bio;

        if (formData.name !== "") {
            name = formData.name;
        }
        if (formData.newPassword !== "") {
            password = formData.newPassword;
        }
        if (formData.bio !== "") {
            bio = formData.bio;
        }

        var userObj = {
            email: user.email,
            password: password,
            name: name,
            dateJoined: user.dateJoined,
            bio: bio,
        }
        localStorage.setItem(user.email, JSON.stringify(userObj));
        localStorage.setItem("LoggedUser", user.email);
        window.location.href = "/profile";
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 mb-40 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-black">Edit details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email (unchangable)
                        </label>
                        <input
                            type="email"
                            readOnly={true}
                            id="email"
                            name="email"
                            className="w-full border rounded-md py-2 px-3 text-black"
                            placeholder={user.email}
                            value={formData.email}
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
                            placeholder={user.name}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Old Password
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Password"
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmNewpassword">
                             Confirm new Password
                        </label>
                        <input
                            type="password"
                            id="confirmNewpassword"
                            name="confirmNewpassword"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="Password"
                            value={formData.confirmNewpassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                            About
                        </label>
                        <textarea
                            type="text"
                            id="bio"
                            name="bio"
                            className="w-full border rounded-md py-2 px-3 text-gray-700"
                            placeholder="A short bio"
                            value={formData.bio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-6"
                        >
                            Update
                        </button>
                    </div>
                    <div className="text-red-500 text-sm">{message}</div>
                </form>
            </div>
        </div>
    );
}
