import { create } from 'zustand';

interface ShopControlsState {
  searchValue: string;
  sortValue: string;
  setSearchValue: (value: string) => void;
  setSortValue: (value: string) => void;
  resetFilters: () => void;
}

export const useShopControlsStore = create<ShopControlsState>((set) => ({
  searchValue: '',
  sortValue: '',
  setSearchValue: (value: string) => set({ searchValue: value }),
  setSortValue: (value: string) => set({ sortValue: value }),
  resetFilters: () => set({ searchValue: '', sortValue: '' }),
}));