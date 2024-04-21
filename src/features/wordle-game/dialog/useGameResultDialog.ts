import { create } from "zustand";

type GameResultDialogState = {
  isOpen: boolean;
};

type GameResultDialogActions = {
  open: () => void;
  close: () => void;
};

const initialState: GameResultDialogState = {
  isOpen: false,
};

export const useGameResultDialog = create<
  GameResultDialogState & GameResultDialogActions
>((set) => ({
  ...initialState,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
