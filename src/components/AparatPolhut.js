import React, { useEffect, useState } from 'react';
import timImagePlaceholder from '../assets/polisi.png';

const AparatPolhut = () => {
  const [aparatData, setAparatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api-kawal-desa.lskk.co.id/api/village/profile?guid=2305e536-0ef6-48e7-9aac-79ca236433fa') // Ganti dengan URL API Anda
      .then((response) => response.json())
      .then((data) => {
        setAparatData(data.vaillage.organizationalStructure);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Daftar Tim Kami</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aparatData.map((aparat, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{aparat.name}</h2>
              <p className="text-gray-600">{aparat.position}</p>
              <img 
                src={`https://bucket-2.nos.wjv-1.neo.id/${aparat.file || ""}`} 
                onError={(e) => (e.target.src = timImagePlaceholder)}
                alt={aparat.name} 
                className="w-full h-40 object-cover mt-2 rounded" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AparatPolhut;
