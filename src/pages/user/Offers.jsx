import React from 'react';

const Offers = () => {
  return (
    <section className="bg-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Offers & Discounts</h2>
        <p className="text-gray-600 mb-10">
          Limited-time deals to spice up your kitchen! Try a world-class recipe today at an unbeatable price.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🎁 20% Off Your First Booking</h3>
            <p className="text-gray-600">Book a chef for a live session or event and save big!</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🍽️ Buy 1 Recipe, Get 1 Free</h3>
            <p className="text-gray-600">Perfect for foodies who want to try something new every week.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🌎 Global Bundle - 30% Off</h3>
            <p className="text-gray-600">Get curated recipes from 5 continents in one discounted bundle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;