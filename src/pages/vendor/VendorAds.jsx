import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import background from "../../assets/background.jpg";
import about from "../../assets/aboutFood1.jpg"
const sampleAds = [
  {
    id: 1,
    title: "Spicy Nigerian Jollof",
    category: "Cuisine - West African",
    price: 10,
    views: 124,
    status: "active",
    image: background,
  },
  {
    id: 2,
    title: "Keto Vegan Cookbook",
    category: "Special Diet - Vegan",
    price: 18,
    views: 202,
    status: "active",
    image: about,
  },
];

const VendorAds = () => {
  const [ads, setAds] = useState(sampleAds);

  const handleDelete = (id) => {
    const updatedAds = ads.filter((ad) => ad.id !== id);
    setAds(updatedAds);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Your Posted Ads
      </h2>

      {ads.length === 0 ? (
        <p className="text-gray-500">You haven’t posted any ads yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="bg-white rounded shadow overflow-hidden"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">{ad.title}</h3>
                <p className="text-sm text-gray-500">{ad.category}</p>
                <p className="text-sm text-gray-600">Price: ${ad.price}</p>
                <p className="text-sm text-gray-600">Views: {ad.views}</p>
                <p className="text-sm text-green-600">Status: {ad.status}</p>

                <div className="flex gap-4 justify-end mt-3">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(ad.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorAds;
