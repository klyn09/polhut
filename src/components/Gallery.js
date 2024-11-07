// src/components/Gallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api-kawal-desa.lskk.co.id/api/report/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10&type=activity');
                if (response.data.status) {
                    setImages(response.data.data);
                }
            } catch (error) {
                console.error("Gagal memuat gambar:", error);
            }
        };
        fetchImages();
    }, []);

    return (
        <section id="gallery" className="p-4">
            <h2 className="text-2xl font-bold">Galeri Kegiatan</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`https://bucket-2.nos.wjv-1.neo.id/${image.file || ""}`}  // perbaiki penggunaan variabel image
                        alt={image.description || `Kegiatan ${index + 1}`}
                        className="object-cover h-48 w-full"
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
