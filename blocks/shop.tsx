'use client'
import React, { useState, useEffect } from 'react'
import ProductGrid from '../components/product-grid'
import ShopControls from './shop-controls'

const Shop = () => {

    const [products, setProducts] = useState([]);
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
  
  return (
    <>
    <ShopControls 
        searchValue={''}
        onSearchChange={() => {}}
        sortValue={''}
        onSortChange={() => {}}
    />
    <ProductGrid products={products} loading={loading} error={error} />
    </>
  )
}

export default Shop