import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="py-3 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 align-middle">
                                <a target="_blank" href="https://codechefvit.com" rel="noreferrer">
                                    <h1 style={{
                                        color: 'white',
                                        fontFamily: 'Inter',
                                        fontWeight: 'bold'
                                    }}>
                                        C<span className="text-cchover font-bold">E</span>T
                                    </h1>
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 navitems" >
                                    <a
                                        href="#"
                                        className="hover:bg-cchover text-white px-3 py-2 rounded-md text-lg font-medium"
                                        style={{ fontFamily: 'Inter' }}>
                                        Home
                                        <Link to="#" />
                                    </a>
                                    <a
                                        href="#about"
                                        className="hover:bg-cchover text-white px-3 py-2 rounded-md text-lg font-medium"
                                        style={{ fontFamily: 'Inter' }}>
                                        About
                                        <Link to="#about" />
                                    </a>

                                    <a
                                        href="#partners"
                                        className="hover:bg-cchover text-white px-3 py-2 rounded-md text-lg font-medium"
                                        style={{ fontFamily: 'Inter' }}>
                                        Partners
                                        <Link to="#partners" />
                                    </a>

                                    <a
                                        href="#contact"
                                        className="hover:bg-cchover text-white px-3 py-2 rounded-md text-lg font-medium"
                                        style={{ fontFamily: 'Inter' }}>
                                        Contact Us
                                        <Link to="#contact" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="font-bold inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="https://cet.codechefvit.com"
                                    className="font-bold hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="font-bold hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>

                                <a
                                    href="/partners"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Partners
                                </a>

                                <a
                                    href="/contactus"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default NavBar;
