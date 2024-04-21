import React from "react";
import logo from '../logo.svg';

const Navbar = () => {
  return (
        <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                
                <div>
                    <ul class="list-style-none flex lg:flex-row gap-4">
                      <a class="text-white/60 underline" href="#">Home</a>
                      <a class="text-white/60 underline" href="#">Store</a>
                      <a class="text-white/60 underline" href="#">Our Goals</a>
                    </ul>
                </div>

                
                <div class="relative flex items-center">
                  <div>
                      <ul class="list-style-none flex lg:flex-row gap-4">
                          <a class="text-white/60 underline" href="#">Profile</a>
                          <a class="text-white/60 underline" href="#">Sign in</a>
                          <a class="text-white/60 underline" href="#">Shopping Cart</a>
                      </ul>
                  </div>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
