'use client'
import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden flex items-center mr-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {/* Logo and store name */}
      <div className="flex items-center space-x-2 ml-auto lg:ml-0">
        <Image
          src="/logo.png"
          alt="Store Logo"
          className="w-8 h-8 object-contain"
          width={32}
          height={32}
        />
        <span className="text-xl font-bold text-green-700">Example Store</span>
      </div>
      {/* Left menu */}
      <ul
        className={`
          flex-col lg:flex-row flex items-center space-y-4 lg:space-y-0 lg:space-x-8
          absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent z-20
          transition-all duration-200
          ${menuOpen ? "flex" : "hidden"} lg:flex
        `}
      >
        <li>
          <a href="#" className="text-gray-700 font-medium hover:text-green-600 transition">Products</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 font-medium hover:text-green-600 transition">Shipping</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 font-medium hover:text-green-600 transition">Contact</a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;