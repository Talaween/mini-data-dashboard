import Image from "next/image";
import React from "react";
import { Product } from "../types/product";
import { HiShoppingCart } from "react-icons/hi2";

const ProductCard: React.FC<Product> = ({ image, title, price }) => (
  <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden w-64 transition-all duration-300 hover:scale-105 border border-purple-100/50">
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        width={256}
        height={192}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-5">
      <h2 className="text-lg font-semibold mb-3 text-slate-800 line-clamp-2 group-hover:text-purple-700 transition-colors duration-200">
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ${price}
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
          <HiShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;