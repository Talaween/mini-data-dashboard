import { create } from 'zustand';

interface ShopControlsState {
  searchValue: string;
  searchInputValue: string;
  sortValue: string;
  setSearchValue: (value: string) => void;
  setSearchInputValue: (value: string) => void;
  setSortValue: (value: string) => void;
  resetFilters: () => void;
}

export const useShopControlsStore = create<ShopControlsState>((set) => ({
  searchValue: '',
  searchInputValue: '',
  sortValue: '',
  setSearchValue: (value: string) => set({ searchValue: value }),
  setSortValue: (value: string) => set({ sortValue: value }),
  resetFilters: () => set({ searchValue: '', sortValue: '', searchInputValue: '' }),
  setSearchInputValue: (value: string) => set({ searchInputValue: value }),
}));