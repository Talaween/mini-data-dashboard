import React from 'react';
import SearchInput from '../components/search-input';
import Select from '../components/select';
import { HiXMark } from 'react-icons/hi2';
import { useShopControlsStore } from '../store/shop-controls';

const ShopControls: React.FC = () => {

  const { searchValue, sortValue, resetFilters, setSearchValue, setSortValue } = useShopControlsStore();

  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Input - Left side */}
      <div className="flex-1">
        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search products..."
        />
      </div>
      
      {/* Sort Dropdown - Right side */}
      <div className="w-full sm:w-64">
        <Select
          value={sortValue}
          onChange={setSortValue}
          options={sortOptions}
          placeholder="Sort by..."
        />
      </div>
      
      {/* Reset Button */}
      {(searchValue || sortValue) && (
        <div className="w-full sm:w-auto">
        <button
          onClick={resetFilters}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-700 rounded-xl transition-colors duration-200 w-full sm:w-auto"
        >
          <HiXMark className="w-4 h-4" />
          Reset
        </button>
      </div>
      )}
    </div>
  );
};

export default ShopControls;