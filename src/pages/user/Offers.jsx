import React from "react";
import {
  Gift,
  UtensilsCrossed,
  Globe2,
} from "lucide-react";

const offers = [
  {
    title: "20% Off Your First Booking",
    description: "Book a chef for a live session or event and save big!",
    icon: <Gift size={48} className="text-orange-500" />,
  },
  {
    title: "Buy 1 Recipe, Get 1 Free",
    description: "Perfect for foodies who want to try something new every week.",
    icon: <UtensilsCrossed size={48} className="text-green-500" />,
  },
  {
    title: "Global Bundle - 30% Off",
    description: "Get curated recipes from 5 continents in one discounted bundle.",
    icon: <Globe2 size={48} className="text-blue-500" />,
  },
];

const Offers = () => {
  return (
    <section className="bg-orange-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Offers & Discounts</h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Limited-time deals to spice up your kitchen! Try a world-class recipe today at an unbeatable price.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl min-h-[280px] p-10 border border-orange-200 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-6 flex justify-center">{offer.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{offer.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
