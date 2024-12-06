import { create } from "zustand";

const useModal = create((set) => ({
  isShow: false,
  component: null,
  show: () => set(() => ({ isShow: true })),
  hide: () => set(() => ({ isShow: false })),
}));

export default useModal;
