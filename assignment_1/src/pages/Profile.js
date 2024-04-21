import React, { useEffect } from "react";
import edit_logo from "./util/edit_logo.svg"
import { Link } from "react-router-dom"

const Profile = () => {
    var email = localStorage.getItem("LoggedUser")
    var user = JSON.parse(localStorage.getItem(email));

    const [hasBio, getBio] = React.useState("");
        useEffect(() => {
        // Perform localStorage action
        getBio(user.bio);
        }, [])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-3/4 mb-40 text-center relative">
                <Link to="/EditProfile" className="absolute top-0 right-0">
                    <img src={edit_logo} alt="edit button" />
                </Link>
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
        </div>
    );
};


export default Profile;