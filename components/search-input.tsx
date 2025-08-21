import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useShopControlsStore } from '../store/shop-controls';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Search products...", 
  className = "" 
}) => {

  const { searchInputValue, setSearchInputValue, setSearchValue } = useShopControlsStore();
  

  const handleSearch = () => {
    setSearchValue(searchInputValue);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiMagnifyingGlass className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyDown={(e) => {
              if (e.key === 'Enter') {
                  handleSearch();
              }
          }}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
        />
      </div>
      <button
        onClick={handleSearch}
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        <HiMagnifyingGlass className="h-4 w-4" />
        Search
      </button>
    </div>
  );
};

export default SearchInput;