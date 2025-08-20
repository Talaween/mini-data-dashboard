'use client'
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-xl px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-purple-500/20">
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden flex items-center mr-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
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
      <div className="flex items-center space-x-3 ml-auto lg:ml-0">
        <div className="p-2 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl shadow-lg">
          <Image
            src="/logo.png"
            alt="Store Logo"
            className="w-6 h-6 object-contain filter brightness-0 invert"
            width={24}
            height={24}
          />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Example Store
        </span>
      </div>
      {/* Navigation menu */}
      <ul
        className={`
          flex-col lg:flex-row flex items-center space-y-4 lg:space-y-0 lg:space-x-8
          absolute lg:static top-16 left-0 w-full lg:w-auto 
          bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 lg:bg-transparent 
          z-20 transition-all duration-300 ease-in-out
          ${menuOpen ? "flex py-6 shadow-xl border-t border-purple-500/20" : "hidden"} lg:flex
        `}
      >
        <li>
          <Link href="/" className="text-gray-200 font-medium hover:text-purple-300 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10">
            Products
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-200 font-medium hover:text-purple-300 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10">
            Shipping
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-200 font-medium hover:text-purple-300 transition-all duration-200 px-4 py-2 rounded-lg hover:bg-white/10">
            Contact
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;