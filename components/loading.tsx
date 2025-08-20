import React from 'react';

const ProductCardSkeleton = () => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden w-64 border border-purple-100/50 animate-pulse">
    <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
    <div className="p-5">
      <div className="space-y-3">
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-3/4"></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
        <div className="h-8 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg"></div>
      </div>
    </div>
  </div>
);

const ProductGridSkeleton = () => (
  <div className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
      {Array.from({ length: 8 }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-4 border-purple-200"></div>
      <div className="w-12 h-12 rounded-full border-4 border-purple-600 border-t-transparent animate-spin absolute top-0 left-0"></div>
    </div>
    <span className="ml-4 text-slate-600 font-medium">Loading products...</span>
  </div>
);

export { ProductCardSkeleton, ProductGridSkeleton, LoadingSpinner };