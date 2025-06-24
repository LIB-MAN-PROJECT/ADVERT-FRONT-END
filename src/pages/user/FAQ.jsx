import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a chef?",
    answer:
      "You can browse chef profiles and click 'Book Now' to reserve a live session or culinary event. You'll receive confirmation by email.",
  },
  {
    question: "What do I get when I purchase a recipe?",
    answer:
      "Each recipe includes detailed instructions, ingredients, cultural background, and video guidance from the chef.",
  },
  {
    question: "Are refunds available?",
    answer:
      "Refunds are available for bookings canceled at least 24 hours in advance. Digital recipe purchases are non-refundable.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Get answers to common questions about bookings, recipes, and your Forked
        experience.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-orange-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-semibold text-lg focus:outline-none hover:bg-orange-50 transition"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index ? "rotate-180 text-orange-500" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
