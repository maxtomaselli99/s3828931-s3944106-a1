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
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                      {/*content*/}
                                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                          <h3 className="text-3xl font-semibold">
                                            Shopping Cart
                                          </h3>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                          <Cart></Cart>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                          <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button" onClick={() => setOpen(false)}>
                                            Close
                                          </button>
                                        </div>
                                      </div>
                                    </div>
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
