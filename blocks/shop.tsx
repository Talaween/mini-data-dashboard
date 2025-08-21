'use client'
import React, { useState, useEffect, useMemo } from 'react'
import ProductGrid from '../components/product-grid'
import ShopControls from './shop-controls'
import { useShopControlsStore } from '../store/shop-controls'
import { Product } from '../types/product.type'

const Shop = () => {
    const { searchValue, sortValue } = useShopControlsStore();

    const [initProducts, setInitProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/products`);
                const data = await response.json();
                setInitProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error as string);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Filter products based on search value
    const filteredProducts = useMemo(() => initProducts.filter(product => {
        if (!searchValue) return true;
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    }), [initProducts, searchValue]);

    // Sort products based on sort value
    const sortedProducts = useMemo(() => {
        if (!sortValue) return initProducts;
        return filteredProducts.sort((a, b) => {
            if (sortValue === 'price-asc') return Number(a.price) - Number(b.price);
            if (sortValue === 'price-desc') return Number(b.price) - Number(a.price);
            return 0;
        });
    }, [initProducts, filteredProducts, sortValue]);

  return (
    <>
    <ShopControls />
    <ProductGrid products={sortedProducts} loading={loading} error={error} />
    </>
  )
}

export default Shop