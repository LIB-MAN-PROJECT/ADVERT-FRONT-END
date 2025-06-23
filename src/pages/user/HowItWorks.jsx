import React from 'react';

const steps = [
  {
    title: '1. Discover Chefs',
    description:
      'Browse through our global network of culinary creators.',
  },
  {
    title: '2. Purchase Recipes',
    description:
      'Buy authentic, chef-curated recipes and cookbooks with a few clicks.',
  },
  {
    title: '3. Cook & Enjoy',
    description:
      'Recreate dishes in your kitchen, straight from world-class chefs.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-orange-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center p-6 border border-orange-200 bg-white rounded-lg shadow-sm"
          >
            <div className="text-5xl font-bold text-orange-500 mb-4">{step.title.split('.')[0]}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
