/*
  File: Navbar.jsx
  Description: Sticky navigation bar with react-scroll navigation.
  Author: Kendrick Tan
*/
import React, { useState } from "react";

// Asset imports
import pcc_logo from "../../assets/pcc_logo.png";
import menu_icon from "../../assets/menu.png";

const Navbar = () => {
  // Map Navbar items for convenience
  const navItems = ["HOME", "ABOUT", "PRODUCT", "ROOTS", "CONTACT"];

  // useState to set mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-offwhite">
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
      <img
        src={menu_icon}
        alt="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}
        className="block sm:hidden cursor-pointer"
      />

      {mobileMenu && (
        <ul className="absolute top-full right-0 w-[150px] h-[85vh] bg-offwhite shadow-lg p-6 flex flex-col gap-6 text-charcoal text-right font-sans sm:hidden z-50">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-accent transition-colors duration-200 cursor-pointer"
              onClick={() => setMobileMenu(false)} // Close on click
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
