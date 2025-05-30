/*
  File: Navbar.jsx
  Description: Sticky navigation bar with react-scroll navigation.
  Author: Kendrick Tan
*/
import React from "react";

// Logo
import pcc_logo from "../../assets/pcc_logo.png";

const Navbar = () => {
  // Map Navbar items for convenience
  const navItems = ["HOME", "ABOUT", "PRODUCT", "ROOTS", "CONTACT"];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-offwhite">
      {/* ==== Logo ==== */}
      <img
        src={pcc_logo}
        alt="PCC Logo"
        className="w-24 h-auto cursor-pointer"
      />

      {/* ==== Navbar Items (Desktop) ==== */}
      <ul className="hidden sm:flex gap-6 text-charcoal font-sans">
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
      <span
        className="sm:invisible material-symbols-outlined text-charcoal cursor-pointer"
        style={{ fontSize: "32px", lineHeight: "1" }}
      >
        menu
      </span>
    </nav>
  );
};

export default Navbar;
