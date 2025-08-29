/*
  File: Hero.jsx
  Description: Hero section with background image and overlay.
  Author: Kendrick Tan
*/

import React from "react";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* ==== Dark overlay ==== */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ==== Content ==== */}
      <div className="relative z-10 text-center md:text-left max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-offwhite drop-shadow-lg">
          Engineered Strength,
          <br className="hidden md:inline" /> Rooted in Nature.
        </h1>

        <p className="text-base md:text-lg text-offwhite mt-4 max-w-md mx-auto md:mx-0 drop-shadow-md">
          Supplying high-quality rope products across industries worldwide.
        </p>

        {/* ==== Buttons ==== */}
        <div className="mt-6 flex gap-3 justify-center md:justify-start flex-wrap">
          <button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-accent text-white rounded-full transition duration-200 hover:bg-[#b4621e]">
            View Products
          </button>

          <button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border border-white text-white rounded-full transition duration-200 hover:bg-white hover:text-charcoal">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
