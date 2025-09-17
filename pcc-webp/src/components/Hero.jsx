/*
  File: Hero.jsx
  Description: Hero section with background image and overlay.
  Author: Kendrick Tan
*/

import hero from "../assets/hero.jpg";
import { Link } from "react-scroll";

const OFFSET = -128; // h-navbar => 128px. Gives space for titles from sticky navbar.
const DURATION = 500;

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
      id="hero"
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
          <Link
            to="product"
            smooth
            duration={DURATION}
            offset={OFFSET}
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-accent text-white rounded-full transition duration-200 hover:bg-[#b4621e]"
          >
            View Products
          </Link>

          <Link
            to="contact"
            smooth
            duration={DURATION}
            offset={OFFSET}
            className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border border-white text-white rounded-full transition duration-200 hover:bg-white hover:text-charcoal"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
