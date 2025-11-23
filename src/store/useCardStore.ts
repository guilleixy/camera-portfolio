import { create } from "zustand";

type CardModelStore = {
  card: number;
  setCard: (card: number) => void;
};

export const useCardStore = create<CardModelStore>((set) => ({
  card: 0,
  setCard: (card) => set({ card }),
}));
