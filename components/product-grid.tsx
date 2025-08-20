import React from "react";
import ProductCard from "./product-card";
import { Product } from "../types/product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24">
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  </div>
);

export default ProductGrid;