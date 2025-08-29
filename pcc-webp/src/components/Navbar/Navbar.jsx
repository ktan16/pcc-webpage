/*
  File: Navbar.jsx
  Description: Sticky navigation bar with react-scroll navigation.
  Author: Kendrick Tan
*/
import React, { useState } from "react";

// Asset imports
import pcc_logo from "../../assets/pcc_logo.png";
import menu_icon from "../../assets/menu.png";
import close_icon from "../../assets/close.png";

const Navbar = () => {
  // Map Navbar items for convenience
  const navItems = ["HOME", "ABOUT", "PRODUCT", "CONTACT"];

  // useState to set mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="relative z-50 h-32 flex items-center justify-between px-6 py-4 bg-offwhite">
      {/* ==== Logo ==== */}
      <img
        src={pcc_logo}
        alt="PCC Logo"
        className="w-24 h-auto cursor-pointer"
      />
      <span className="font-serif text-3xl text-charcoal cursor-pointer">
        Pacific Cordage Corp.
      </span>

      {/* ==== Navbar Items (Desktop) ==== */}
      <ul className="hidden lg:flex gap-10 text-charcoal font-sans">
        {/* Display each item with given CSS */}
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* ==== Menu Icon (Mobile) ==== */}
      <img
        src={menu_icon}
        alt="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}
        className="block lg:hidden cursor-pointer"
      />

      <>
        {/* ==== Mobile Menu ==== */}
        {mobileMenu && (
          <div
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 bg-black/50 lg:hidden z-40"
          ></div>
        )}

        {/* Animated sliding menu */}
        <ul
          className={`fixed top-0 right-0 w-[300px] h-screen bg-offwhite shadow-lg px-6 py-13 flex flex-col gap-10 text-charcoal text-right font-sans lg:hidden z-50 transform transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="flex justify-end">
            <img
              src={close_icon}
              alt="Close"
              onClick={() => setMobileMenu(false)}
              className="w-6 h-6 cursor-pointer mb-2"
            />
          </div>

          {/* Navbar items (mobile) */}
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-accent transition-colors duration-200 cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    </nav>
  );
};

export default Navbar;
