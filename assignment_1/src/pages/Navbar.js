import React from "react";
import Cart from './ShoppingCart';
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
        <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                
                <div>
                    <ul class="list-style-none flex lg:flex-row gap-4">
                      <button class="text-white/60 underline">Home</button>
                      <button class="text-white/60 underline">Store</button>
                      <button class="text-white/60 underline">Our Goals</button>
                    </ul>
                </div>

                
                <div class="relative flex items-center">
                  <div>
                      <ul class="list-style-none flex lg:flex-row gap-4">
                          <button class="text-white/60 underline">Profile</button>
                          <button class="text-white/60 underline">Sign in</button>
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
