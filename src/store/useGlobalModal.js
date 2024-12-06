import { create } from "zustand";

export const useSetGlobalModalStore = create()((set) => ({
  stack: [],
  // footer: null,
  setModal: (title, component) =>
    set((state) => ({ stack: [...state.stack, { title, component }] })),
  // setFooter: (component: JSX.Element | null) => set({ component }),
  onClose: () =>
    set((state) => {
      const newStack = state.stack.slice();
      newStack.pop();
      return { stack: newStack };
    }),
  onCloseAll: () => set({ stack: [] }),
}));