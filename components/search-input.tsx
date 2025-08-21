import React, { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useShopControlsStore } from '../store/shop-controls';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search products...", 
  className = "" 
}) => {

  const { searchInputValue, setSearchInputValue, setSearchValue } = useShopControlsStore();
  

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <HiMagnifyingGlass className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                setSearchValue(searchInputValue);
            }
        }}
        placeholder={placeholder}
        className="w-half pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
      />
    </div>
  );
};

export default SearchInput;