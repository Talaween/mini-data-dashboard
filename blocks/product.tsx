'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AddToCartButton from '../components/add-to-cart-button';
import Rating from '../components/rating';
import { LoadingSpinner } from '../components/loading';
import Link from 'next/link';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductProps {
  productId: number;
}

const Product: React.FC<ProductProps> = ({ productId }) => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-2">Failed to load product</div>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-slate-700 text-lg font-semibold mb-2">Product not found</div>
          <p className="text-slate-600">The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart functionality - placeholder for now
    console.log('Added to cart:', product.title);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-purple-600 transition-colors duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>
      </div>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl p-8 shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            {/* Category */}
            <div className="inline-flex">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full capitalize">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-800 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <Rating rating={product.rating.rate} totalRatings={product.rating.count} />
              <span className="text-sm text-slate-500">
                {product.rating.rate.toFixed(1)} out of 5
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-purple-600">
                ${product.price}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800">Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <AddToCartButton 
                onClick={handleAddToCart} 
                label="Add to Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;