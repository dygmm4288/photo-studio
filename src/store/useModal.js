import { create } from "zustand";

const useModal = create((set) => ({
  isShow: false,
  component: null,
  show: () => set(() => ({ isOpen: true })),
  hide: () => set(() => ({ isOpen: false })),
}));

export default useModal;
