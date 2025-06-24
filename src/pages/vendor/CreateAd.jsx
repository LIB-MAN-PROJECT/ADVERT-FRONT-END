import React, { useState } from 'react';

const CreateAd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
    images: [],
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'images') {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally you'd post to backend here
    console.log('Submitting:', formData);

    setStatus('Ad posted successfully!');
    setFormData({
      title: '',
      description: '',
      category: '',
      price: '',
      location: '',
      images: [],
    });

    // Reset file input manually if needed
    e.target.reset();
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
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Post a New Recipe or Cookbook</h2>

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
          placeholder="Price (e.g., 15)"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g., Lagos, Nigeria)"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Submit Ad
        </button>
      </form>
    </div>
  );
};

export default CreateAd;
