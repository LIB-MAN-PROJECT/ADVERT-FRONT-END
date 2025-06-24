import React, { useState, useEffect } from 'react';

const EditAd = () => {
  // Simulating the ad to be edited
  const existingAd = {
    title: 'Keto Vegan Cookbook',
    description: 'A full vegan guide to fat-burning recipes.',
    category: 'Special Diet - Vegan',
    price: 18,
    location: 'Abuja, Nigeria',
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    // Load ad data into form on mount
    setFormData(existingAd);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Ad:', formData);
    setStatus('Ad updated successfully!');
  };

  const categoryOptions = [
    'Course - Appetizer',
    'Course - Main',
    'Course - Dessert',
    'Cuisine - Nigerian',
    'Cuisine - Italian',
    'Technique - Grilling',
    'Special Diet - Vegan',
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Edit Your Ad</h2>

      {status && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{status}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">-- Select Category --</option>
          {categoryOptions.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAd;
