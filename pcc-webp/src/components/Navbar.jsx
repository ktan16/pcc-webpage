/*
  File: Navbar.jsx
  Description: Sticky navigation bar with react-scroll navigation.
  Author: Kendrick Tan
*/
import React, { useEffect, useState } from "react";

import pcc_logo from "../assets/pcc_logo.png";
import menu_icon from "../assets/menu.png";
import close_icon from "../assets/close.png";

const Navbar = () => {
  const navItems = ["HOME", "ABOUT", "PRODUCT", "CONTACT"];
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* ==== NAVBAR ==== */}
      <nav className="sticky top-0 z-50 h-32 flex items-center justify-between px-6 py-4 bg-offwhite/95 backdrop-blur border-b border-black/10">
        <img
          src={pcc_logo}
          alt="PCC Logo"
          className="w-24 h-auto cursor-pointer"
        />

        <span className="hidden sm:inline font-serif text-3xl text-charcoal cursor-pointer">
          Pacific Cordage Corp.
        </span>

        {/* Desktop items */}
        <ul className="hidden lg:flex gap-10 text-charcoal font-sans">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <img
          src={menu_icon}
          alt="Menu"
          onClick={() => setMobileMenu(true)}
          className="block lg:hidden cursor-pointer"
        />
      </nav>

      {/* Dark overlay of mobile menu */}
      {mobileMenu && (
        <div
          aria-hidden
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/50 z-[80]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 w-[300px] h-screen bg-offwhite shadow-lg px-6 py-12 flex flex-col gap-10 text-charcoal text-right font-sans z-[90] transform transition-transform duration-300
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
        // Stop clicks inside the panel from closing it
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-end">
          <img
            src={close_icon}
            alt="Close"
            onClick={() => setMobileMenu(false)}
            className="w-6 h-6 cursor-pointer mb-2"
          />
        </div>

        {/* Mobile menu items */}
        {navItems.map((item) => (
          <button
            key={item}
            className="text-left hover:text-accent transition-colors duration-200"
            onClick={() => setMobileMenu(false)}
          >
            {item}
          </button>
        ))}
      </aside>
    </>
  );
};

export default Navbar;
