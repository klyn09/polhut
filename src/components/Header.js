// src/components/Header.js
import React from 'react';

const Header = () => {
    const handleLoginClick = () => {
        window.location.href = 'https://kawal-desa.lskk.co.id/login';
    };

    return (
        <header className="bg-green-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Website Polisi Kehutanan</h1>
                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        {['Home', 'About', 'News', 'Services', 'Gallery', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    className="hover:underline transition duration-300 hover:text-yellow-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Tombol Login */}
                    <button 
                        onClick={handleLoginClick}
                        className="bg-yellow-300 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                    >
                        Login
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
