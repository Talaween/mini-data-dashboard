import Image from "next/image";
import React from "react";
import { Product } from "../types/product";

const ProductCard: React.FC<Product> = ({ image, title, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
    <Image
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
      width={256}
      height={160}
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-xl font-bold text-green-600">${price}</p>
    </div>
  </div>
);

export default ProductCard;