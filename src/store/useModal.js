import { create } from "zustand";

const useModal = create((set) => ({
  isShow: false,
  Component: null,
  show: (Component) => set(() => ({ isShow: true, Component })),
  hide: () => set(() => ({ isShow: false, Component: null })),
}));

export default useModal;
