// src/components/Home.js
import React from 'react';

const Home = () => {
    return (
        <section id="home" className="p-8 bg-green-100">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-green-800">Selamat Datang di Website Polisi Kehutanan</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Kami berkomitmen untuk menjaga kelestarian hutan dan melindungi lingkungan.
                </p>
                <a href="#services" className="mt-6 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                    Lihat Layanan Kami
                </a>
            </div>
        </section>
    );
};

export default Home;
