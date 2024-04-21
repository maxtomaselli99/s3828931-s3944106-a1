import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import logo from '../logo.svg';
import Signin from "./SignIn";

const Navbar = () => {

  const [loggedUser, setLoggedUser] = React.useState("");
    useEffect(() => {
      // Perform localStorage action
      setLoggedUser(localStorage.getItem("LoggedUser"));
  }, [])

  const handleLogout = () => {
    // set loggedUser to null in localStorage
    localStorage.setItem("LoggedUser", "");
    // Refresh the component by forcing a page reload
    window.location.reload();
};

  return (
        <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                
                <div>
                    <ul class="list-style-none flex lg:flex-row gap-4">
                      <Link className="text-white/60 underline" to="/">Home</Link>
                      <a class="text-white/60 underline" href="#">Store</a>
                      <a class="text-white/60 underline" href="#">Our Goals</a>
                    </ul>
                </div>

                
                <div class="relative flex items-center">
                  <div>
                      <ul class="list-style-none flex lg:flex-row gap-4">
                        {loggedUser ? (
                          <>
                            <a class="text-white/60 underline" href="#">Profile</a>
                            <button
                              className="text-white/60 underline"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <>
                            <Link className="text-white/60 underline" to="/SignIn">Sign in</Link>
                          </>
                        )}
                          {/* <a class="text-white/60 underline" href="#">Profile</a>
                          <Link className="text-white/60 underline" to="/SignIn">Sign in</Link> */}
                          <a class="text-white/60 underline" href="#">Shopping Cart</a>
                      </ul>
                  </div>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
