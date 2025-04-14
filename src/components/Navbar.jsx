import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll'



const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    useEffect(() => {
        var tl = gsap.timeline()
        tl.from("nav h1, nav a, nav button", {
            y: -10,
            duration: 1,
            delay:1,
            opacity: 0,
          });
        tl.to("nav h1, nav a, nav button", {
            y: 0,
            opacity: 1, 
            duration: 1,
            stagger: 0.2,
          });
    }, []);

    return (
        <nav className="bg-[#0F1321] rounded-lg fixed w-full opacity-70 hover:opacity-100 z-[9999]">
            <div className="mx-auto    max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                // Close icon
                                <svg
                                    className="block size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Menu icon
                                <svg
                                    className="block size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo and menu items */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0  mx-1">
                            <h1 className="text-4xl items-start  font-bold text-white text-center tracking-wide">Portfolio</h1>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link
                                    to="app" smooth={true} duration={500}
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                    aria-current="page"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="skills" smooth={true} duration={500}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Skills
                                </Link>
                                <Link
                                    to="Projects" smooth={true} duration={500}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="Contact" smooth={true} duration={500}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Notification and profile */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Notification Button */}
                        {/*<button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>*/}

                        {/* Profile dropdown */}
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                                    id="user-menu-button"
                                    aria-expanded={userMenuOpen}
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <Link
                                    to="Aboutme" smooth={true} duration={500} >
                                    <div className="flex justify-center items-center  hover:bg-gray-700 hover:rounded-full">
                                        <div><img
                                            className="size-8 rounded-full p-1"
                                            src="https://i.pinimg.com/736x/80/ad/66/80ad663e5c06d3d2463f2614fc920d94.jpg"
                                            alt="" />
                                        </div>
                                        <div>
                                            <h1 className="aboutme text-gray-300 font-medium m-1 p-1">About me</h1>
                                        </div>
                                    </div> </Link>
                                </button>
                            </div>

                            {/* Dropdown menu */}
                            {/*{userMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    to="section1" smooth={true} duration={500}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="section1" smooth={true} duration={500}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <Link
                    to="section1" smooth={true} duration={500}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              )}*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link
                            to="app" smooth={true} duration={500}
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="skills" smooth={true} duration={500}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Skills
                        </Link>
                        <Link
                            to="Projects" smooth={true} duration={500}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Projects
                        </Link>
                        <Link
                            to="Contact" smooth={true} duration={500}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

