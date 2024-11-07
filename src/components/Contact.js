// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="p-4">
            <h2 className="text-2xl font-bold">Kontak Kami</h2>
            <form className="mt-4">
                <div>
                    <label className="block">Nama:</label>
                    <input type="text" className="border p-2 w-full" />
                </div>
                <div className="mt-2">
                    <label className="block">Email:</label>
                    <input type="email" className="border p-2 w-full" />
                </div>
                <div className="mt-2">
                    <label className="block">Pesan:</label>
                    <textarea className="border p-2 w-full" rows="4"></textarea>
                </div>
                <button type="submit" className="mt-2 bg-green-600 text-white p-2">Kirim</button>
            </form>
        </section>
    );
};

export default Contact;
