import Link from "next/link";
import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-white border-t mt-12 py-6 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-500 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Example Store. All rights reserved.
      </div>
      <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
        <li>
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">Home</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">Products</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">About</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">Shipping Policy</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">Return Policy</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-green-600 transition">Contact Us</Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;