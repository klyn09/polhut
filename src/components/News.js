// src/components/News.js
import React, { useEffect, useState } from 'react';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://api-kawal-desa.lskk.co.id/api/report/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10&type=news');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNewsData(data.data); // Menyimpan data berita ke dalam state
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching news: {error.message}</p>;
    }

    return (
        <section id="news" className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-green-800 text-center">Berita Terbaru</h2>
                <div className="mt-8 space-y-4">
                    {newsData.map(news => (
                        <article key={news._id} className="p-4 bg-white shadow rounded-lg">
                            <h3 className="font-bold">{news.description}</h3>
                            <p className="text-gray-600">
                                {news.reportDateTime ? new Date(news.reportDateTime.date).toLocaleDateString() : "Tanggal tidak tersedia"}
                            </p>
                            <img 
                                src={`https://bucket-2.nos.wjv-1.neo.id/${news.file || ""}`} 
                                alt={news.description} 
                                className="mt-2 rounded w-full h-auto object-cover" 
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
