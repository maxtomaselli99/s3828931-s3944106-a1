import React from "react";
import logo from '../logo.svg';

const Navbar = () => {
  return (
        <nav
            class="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                
                <div
                    class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContent1"
                    data-twe-collapse-item>
                    
                    <a
                        class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                        href="#">
                        <img
                          src={logo}
                            alt="TE Logo"
                            loading="lazy" />
                    </a>
                    <ul
                        class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                        data-twe-navbar-nav-ref>
                        <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            
                            <a
                                class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Home</a
                            >
                      </li>

                        <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <a
                                class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Store</a
                            >
                        </li>
                        
                        <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                            <a
                                class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Our Goals</a
                            >
                        </li>
                    </ul>
                    
                </div>

                
                <div class="relative flex items-center">

                  <div
                      class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                      id="navbarSupportedContent1"
                      data-twe-collapse-item>

                      <a
                          class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                          href="#">
                          <img
                              src={logo}
                              alt="TE Logo"
                              loading="lazy" />
                      </a>
                      <ul
                          class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                          data-twe-navbar-nav-ref>
                          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>

                              <a
                                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                  href="#"
                                  data-twe-nav-link-ref
                              >Profile</a
                              >
                          </li>

                          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                              <a
                                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                  href="#"
                                  data-twe-nav-link-ref
                              >Sign in</a
                              >
                          </li>

                          <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                              <a
                                  class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                  href="#"
                                  data-twe-nav-link-ref
                              >Shopping Cart</a
                              >
                          </li>
                      </ul>

                  </div>
                </div>
                
            </div>
        </nav>
  );
};

export default Navbar;
