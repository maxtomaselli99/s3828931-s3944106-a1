import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import Cart from './ShoppingCart';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedUser, setLoggedUser] = React.useState("");
    useEffect(() => {
      // Perform localStorage action
      setLoggedUser(localStorage.getItem("LoggedUser"));
  }, [])

  const handleLogout = () => {
    // set loggedUser to null in localStorage
    localStorage.setItem("LoggedUser", "");
    // Refresh the component by forcing a page reload
    window.location.href = "/";
};


  return (
        <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                
                <div>
                    <ul class="list-style-none flex lg:flex-row gap-4">

                      <Link className="text-white/60 underline" to="/">Home</Link>

                      <button class="text-white/60 underline">Store</button>
                      <button class="text-white/60 underline">Our Goals</button>

                    </ul>
                </div>

                
                <div class="relative flex items-center">
                  <div>
                      <ul class="list-style-none flex lg:flex-row gap-4">

                        {loggedUser ? (
                          <>
                            <Link class="text-white/60 underline" to="/Profile">Profile</Link>
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

                          <button onClick={() => setOpen(!open)} class="text-white/60 underline">Shopping Cart</button>
                          {open && (
                              <div class="bg-white shadow-md">
                                  <Cart></Cart>
                              </div>
                          ) }

                      </ul>
                  </div>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
