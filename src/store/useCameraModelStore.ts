import { create } from "zustand";
import { Mesh } from "three";

type CameraModelRefs = {
  Lens_Vorhang: React.RefObject<Mesh | null> | null;
  Lens_3: React.RefObject<Mesh | null> | null;
  Lens_2: React.RefObject<Mesh | null> | null;
  Lens_Fenster: React.RefObject<Mesh | null> | null;
  Lens_Glass: React.RefObject<Mesh | null> | null;
  Tapa: React.RefObject<Mesh | null> | null;
  Lens_Innen_Hüle: React.RefObject<Mesh | null> | null;
};

type CameraModelState = {
  animations: Record<string, boolean>;
  play: (name: string) => void;
  stop: (name: string) => void;
  toggle: (name: string) => void;
  reset: () => void;
};

type CameraModelStore = CameraModelRefs & {
  setRefs: (refs: CameraModelRefs) => void;
};

export const useCameraModelStore = create<CameraModelStore & CameraModelState>(
  (set) => ({
    Lens_Vorhang: null,
    Lens_3: null,
    Lens_2: null,
    Lens_Fenster: null,
    Lens_Glass: null,
    Tapa: null,
    Lens_Innen_Hüle: null,
    setRefs: (refs: CameraModelRefs) => set(() => ({ ...refs })),
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
