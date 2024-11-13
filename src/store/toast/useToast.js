import { create } from "zustand";
import { uuid } from "../../lib/util";
import { ToastPosition, ToastType } from "./toast.const";

const createToast = (options = {}) => {
  if (!validateOptions(options)) {
    console.warn(
      "[Warn: createToast in useToast]: options의 값을 확인하세요.",
      options,
    );
    return null;
  }

  return {
    id: uuid(),
    message: options.message || "",
    type: options.type || ToastType.INFO,
    duration: options.duration || 3000,
    position: options.position || ToastPosition.BOTTOM_CENTER,
    onClose: options.onClose,
    component: options.component || null,
    autoClose: options.autoClose === undefined ? true : options.autoClose,
    icon: options.icon,
    showCloseBtn:
      options.showCloseBtn === undefined ? false : options.showCloseBtn,
  };
};

const removeToast = (toasts, targetId) => {
  if (!toasts || !Array.isArray(toasts)) {
    console.error(
      "[Error: removeToast in useToast]: toasts가 없거나 toasts가 배열이 아닙니다.",
    );
    return toasts;
  }

  return toasts.filter((toast) => toast.id !== targetId);
};

const addToast = (toasts, options) => {
  const toast = createToast(options);
  if (toast) return [...toasts, toast];
  return toasts;
};

const validateOptions = (options) => {
  // check type
  if (
    typeof options !== "object" ||
    Array.isArray(options) ||
    options instanceof Function
  )
    return false;

  // check required option

  if (!options.message && !options.component) return false;

  if (options.onClose && !options instanceof Function) return false;

  return true;
};

const useToast = create((set) => ({
  toasts: [], // toast 객체의 배열
  remove: (targetId) =>
    set((state) => ({
      toasts: removeToast(state.toasts, targetId),
    })),
  add: (options) =>
    set((state) => ({
      toasts: addToast(state.toasts, options),
    })),
  clearAll: () => set(() => ({ toasts: [] })),
}));

export default useToast;
