import { ThemeMode } from "@/utils/theme";
import { create } from "zustand";

export type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "light",
  setMode: (mode) => set({ mode }),
}));
