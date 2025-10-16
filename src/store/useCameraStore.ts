import { create } from "zustand";

type CameraState = {
  animations: Record<string, boolean>;
  play: (name: string) => void;
  stop: (name: string) => void;
  toggle: (name: string) => void;
  reset: () => void;
};

export const useCameraStore = create<CameraState>((set) => ({
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
}));
