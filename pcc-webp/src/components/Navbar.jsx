/*
  File: Navbar.jsx
  Description: Sticky navigation bar with react-scroll navigation.
  Author: Kendrick Tan
*/
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import pcc_logo from "../assets/pcc_logo.png";
import menu_icon from "../assets/menu.png";
import close_icon from "../assets/close.png";

const OFFSET = -128; // h-navbar => 128px. Gives space for titles from sticky navbar.
const DURATION = 500;

const NAV_LINKS = [
  { label: "HOME", to: "hero" }, // label = nav items, to = react-scroll Element name
  { label: "ABOUT", to: "about" },
  { label: "PRODUCT", to: "product" },
  { label: "CONTACT", to: "contact" },
];

const Navbar = () => {
  // Boolean to hide/show mobile menu (based on screen size)
  const [mobileMenu, setMobileMenu] = useState(false);
  // For mobile menu: closes menu before scrolling to section
  const closeMenuAndScroll = () => setMobileMenu(false);

  return (
    <>
      {/* ==== NAVBAR ==== */}
      <nav className="sticky top-0 z-50 h-32 flex items-center justify-between px-6 py-4 bg-offwhite/95 backdrop-blur border-b border-black/10">
        {/* Logo -> scroll to hero/top */}
        <button
          onClick={() =>
            scroll.scrollToTop({ duration: DURATION, smooth: true })
          }
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Go to top"
        >
          <img src={pcc_logo} alt="PCC Logo" className="w-24 h-auto" />
        </button>

        {/* Brand text -> scroll to hero/top */}
        <span
          className="hidden sm:inline font-serif text-3xl text-charcoal cursor-pointer"
          onClick={() =>
            scroll.scrollToTop({ duration: DURATION, smooth: true })
          }
        >
          Pacific Cordage Corp.
        </span>

        {/* Desktop items */}
        <ul className="hidden lg:flex gap-10 text-charcoal font-sans">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={DURATION}
                offset={OFFSET}
                spy // actively watches page position
                activeClass="text-accent font-semibold" // applies accent to currently viewed section
                className="cursor-pointer transition-colors duration-200 hover:text-accent"
              >
                {label}
              </Link>
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
        className={`fixed top-0 right-0 w-[300px] h-screen bg-offwhite shadow-lg px-6 py-12 flex flex-col gap-8 text-charcoal text-right font-sans z-[90] transform transition-transform duration-300
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()} // allows for clicks within the mobile drawer
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex justify-end">
          <img
            src={close_icon}
            alt="Close"
            onClick={() => setMobileMenu(false)}
            className="w-6 h-6 cursor-pointer mb-2"
          />
        </div>

        {/* Mobile menu items (use Link so tapping also scrolls, then closes drawer) */}
        <nav className="flex flex-col items-end gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={DURATION}
              offset={OFFSET}
              onClick={closeMenuAndScroll}
              className="cursor-pointer hover:text-accent transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
