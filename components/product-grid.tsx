import React from "react";
import ProductCard from "./product-card";
import { Product } from "../types/product";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, error }) => (
  <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        products.map((product, idx) => (
          <ProductCard
            key={idx}
            image={product.image}
            title={product.title}
            price={product.price} 
          />
        )))}
    </div>
  </div>
);

export default ProductGrid;