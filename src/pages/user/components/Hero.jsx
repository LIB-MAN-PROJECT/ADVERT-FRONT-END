import React from "react";
import backgroundVideo from "../../../assets/background.mp4.mp4"; // ✅ adjust path if needed

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Cook, Share, Inspire.
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6">
          Discover curated cookbooks and global chef recipes delivered to your
          table.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-white font-semibold transition">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Hero;
