'use client'
import React, { useState, useEffect } from 'react'
import ProductGrid from '../components/product-grid'
import ShopControls from './shop-controls'
import { useShopControlsStore } from '../store/shop-controls'
import { Product } from '../types/product.type'

const Shop = () => {
    const { searchValue, sortValue, setSearchValue, setSortValue, resetFilters } = useShopControlsStore();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error as string);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Filter products based on search value
    const filteredProducts = products.filter(product => {
        if (!searchValue) return true;
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    // Sort products based on sort value
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortValue === 'price-asc') return Number(a.price) - Number(b.price);
        if (sortValue === 'price-desc') return Number(b.price) - Number(a.price);
        return 0;
    });

  return (
    <>
    <ShopControls 
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        sortValue={sortValue}
        onSortChange={setSortValue}
        onReset={resetFilters}
    />
    <ProductGrid products={sortedProducts} loading={loading} error={error} />
    </>
  )
}

export default Shop