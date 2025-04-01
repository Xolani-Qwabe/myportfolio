'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faAt, faInfoCircle, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const menuItems = [
    { link: '/', icon: faHome, text: 'Home' },
    { link: '/about', icon: faInfoCircle, text: 'About' },
    { link: '/skills', icon: faToolbox, text: 'SKills' },
    { link: '/contact', icon: faAt, text: 'Contact' },
];

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-transparent shadow-md gap-4 p-4 z-50 border-b-2">
                {/* Logo Container */}
                <div className="flex min-w-[80%] mx-auto justify-between items-center">
                    <div className="flex ">
                        <Link href="/">
                            <div className="flex items-baseline cursor-pointer gap-1">
                                <img className="h-8" src="x.png" alt="logo" />
                                <h1 className="font-extrabold text-2xl text-black hover:text-green-500 transition duration-300 font-poppins">
                                    Q<span className="text-green-400">86</span>
                                </h1>
                            </div>


                        </Link>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex gap-4 items-center">
                        <div
                            className="text-black hover:text-green-500 cursor-pointer text-2xl"
                            onClick={() => setMenuOpen(true)}
                        >
                            <FontAwesomeIcon icon={faThLarge} />
                        </div>
                        <div className="text-black hover:text-green-500 cursor-pointer text-2xl ">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✖
                    </button>
                    <ul className="text-white text-3xl space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:text-green-400">
                                <Link href={item.link} onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={item.icon} />
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navigation;
