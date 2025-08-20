import React from "react";
import ProductGrid from "@/components/product-grid";

export default async function Home() {

  // Fetch products from the API on the server side
  const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  const products = await res.json();
  
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-700 text-center">Product Catalog</h1>
      <ProductGrid products={products} />
    </main>
  );
}
