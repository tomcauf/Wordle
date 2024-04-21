import { create } from "zustand";

type GuideDialogState = {
  isOpen: boolean;
};

type GuideDialogActions = {
  open: () => void;
  close: () => void;
};

const initialState: GuideDialogState = {
  isOpen: false,
};

export const useGuideDialog = create<GuideDialogState & GuideDialogActions>(
  (set) => ({
    ...initialState,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }),
);
