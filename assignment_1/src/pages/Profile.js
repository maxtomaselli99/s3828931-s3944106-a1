import React, { useEffect, useState } from "react";
import edit_logo from "./util/edit_logo.svg";
import delete_logo from "./util/delete_logo.svg";
import { Link } from "react-router-dom";

const Profile = () => {
    var email = localStorage.getItem("LoggedUser");
    var user = JSON.parse(localStorage.getItem(email));

    const [hasBio, getBio] = useState("");
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    useEffect(() => {
        // Perform localStorage action
        getBio(user.bio);
    }, []);

    const handleDelete = () => {
        localStorage.removeItem(email);
        localStorage.setItem("LoggedUser", "");
        setShowDeletePopup(true);
        setTimeout(() => {
            window.location.href = "/"; 
        }, 3000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            {showDeletePopup ? (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-center">Profile successfully deleted!</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md w-3/4 mb-40 text-center relative">
                    <div className="absolute top-0 right-0 flex items-center">
                        <Link to="/EditProfile">
                            <img src={edit_logo} alt="edit button" />
                        </Link>
                        <button onClick={handleDelete}>
                            <img src={delete_logo} alt="delete button" />
                        </button>
                    </div>
                    <h2 className="text-3xl font-semibold mb-2 text-black">{user.name}</h2>
                    <hr className="mx-auto my-4 border-black" />
                    <h3 className="text-2xl font-semibold mb-4 text-black">User details</h3>
                    <p>Date joined: {user.dateJoined}</p>
                    {hasBio ? (
                        <p>About: {user.bio}</p>
                    ) : (
                        <></>
                    )}
                </div>
            )}
        </div>
    );
};


export default Profile;