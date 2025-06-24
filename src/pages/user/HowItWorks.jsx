import React from "react";
import works1 from "../../assets/works1.mp4";
import works2 from "../../assets/works2.mp4";
import works3 from "../../assets/works3.mp4";

const steps = [
  {
    title: "1. Discover Chefs",
    description: "Browse through our global network of culinary creators.",
    video: works1,
  },
  {
    title: "2. Purchase Recipes",
    description:
      "Buy authentic, chef-curated recipes and cookbooks with a few clicks.",
    video: works2,
  },
  {
    title: "3. Cook & Enjoy",
    description:
      "Recreate dishes in your kitchen, straight from world-class chefs.",
    video: works3,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        How It Works
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-200 hover:shadow-xl transition duration-500"
          >
            {/* Video */}
            <div className="w-full h-60 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={step.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Text */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
