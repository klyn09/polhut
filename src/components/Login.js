// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-green-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Website Polisi Kehutanan</h1>
                <nav>
                    <ul className="flex space-x-6">
                        {['Home', 'About', 'News', 'Services', 'Gallery', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={#${item.toLowerCase()}} 
                                    className="hover:underline transition duration-300 hover:text-yellow-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;