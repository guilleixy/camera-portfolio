import { create } from "zustand";
import { Mesh } from "three";

type SDCardModelRefs = {
  SDCard_Body: React.RefObject<Mesh | null> | null;
};

type SDCardModelState = {
  animations: Record<string, boolean>;
  play: (name: string) => void;
  stop: (name: string) => void;
  toggle: (name: string) => void;
  reset: () => void;
};

type SDCardModelStore = SDCardModelRefs & {
  setRefs: (refs: SDCardModelRefs) => void;
};

export const useSDCardModelStore = create<SDCardModelStore & SDCardModelState>(
  (set) => ({
    SDCard_Body: null,
    setRefs: (refs: SDCardModelRefs) => set(() => ({ ...refs })),
    animations: {},
    play: (name: string) =>
      set((s) => ({ animations: { ...s.animations, [name]: true } })),
    stop: (name: string) =>
      set((s) => ({ animations: { ...s.animations, [name]: false } })),
    toggle: (name: string) =>
      set((s) => ({
        animations: { ...s.animations, [name]: !s.animations[name] },
      })),
    reset: () => set({ animations: {} }),
  })
);
