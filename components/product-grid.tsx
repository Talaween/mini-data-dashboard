import React from "react";
import ProductCard from "./product-card";
import { Product } from "../types/product.type";
import { ProductGridSkeleton } from "./loading";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, error }) => {
  if (loading) {
    return <ProductGridSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-2">Oops! Something went wrong</div>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center p-16">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No Products Found</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            We couldn&apos;t find any products at the moment. Please check back later or try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            image={product.image}
            title={product.title}
            price={product.price} 
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;