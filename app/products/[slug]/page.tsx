import React from 'react';
import Product from '@/blocks/product';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.slug, 10);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto py-8">
        <Product productId={productId} />
      </div>
    </main>
  );
}