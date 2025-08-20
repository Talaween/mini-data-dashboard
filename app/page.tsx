import React from "react";
import Shop from "@/blocks/shop";

export default async function Home() {

  // Fetch products from the API on the server side the preffered method
  //const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
  //const products = await res.json();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Product Catalog
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our curated collection of premium products, handpicked for quality and style.
          </p>
        </div>
        <Shop />
      </div>
    </main>
  );
}
