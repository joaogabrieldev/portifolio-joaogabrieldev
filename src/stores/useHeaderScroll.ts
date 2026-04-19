import { create } from "zustand";

interface IScrollState {
  isScrolled: boolean;
  setIsScrolled: (state: boolean) => void;
}

export const useHeaderScroll = create<IScrollState>((set) => ({
  isScrolled: false,
  setIsScrolled: (state) => set({ isScrolled: state }),
}));
