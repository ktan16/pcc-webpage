/*
  File: Hero.jsx
  Description: Hero section.
  Author: Kendrick Tan
*/

import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center p-20 bg-offwhite">
      {/* Text Container */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-10">
        {/* Main Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal max-w-xl mx-auto md:mx-0">
          Engineered Strength, Rooted in Nature.
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-charcoal mt-4 max-w-md mx-auto md:mx-0">
          Supplying high-quality rope products across industries worldwide.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-accent text-white rounded-full">
            View Products
          </button>
          <button className="px-6 py-3 border border-charcoal text-charcoal rounded-full">
            Our Story
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={hero}
          alt="Hero"
          className="max-w-full min-w-[500px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
