import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarState = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

type SidebarOptionsState = {
  optionState: number[];
  toggleOptionState: (id: number) => void;
};

export const useToggleSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const initialState = {
  optionState: [0, 0, 0, 0, 0, 0, 0],
};

export const useToggleSidebarOption = create<SidebarOptionsState>((set) => ({
  ...initialState,
  toggleOptionState: (id: number) => {
    set((state: any) => {
      const updatedOptionState = [...state.optionState];
      updatedOptionState[id] = 1 - updatedOptionState[id]; // Toggle 0 to 1 and 1 to 0
      return { optionState: updatedOptionState };
    });
  },
}));
