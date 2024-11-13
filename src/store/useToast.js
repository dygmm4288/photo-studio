import { create } from "zustand";
import { uuid } from "../lib/util";

const createToast = (options = {}) => {
  const toast = {
    id: uuid(),
  };

  if (!validateOptions(options)) {
    console.warn(
      "[Warn: createToast in useToast]: options가 잘 전달되지 않았습니다.",
    );
    return null;
  }

  return toast;
};

const removeToast = (toasts, targetId) => {
  if (!toasts || Array.isArray(toasts)) {
    console.error(
      "[Error: removeToast in useToast]: toasts가 없거나 toasts가 배열이 아닙니다.",
    );
    return;
  }

  return toasts.filter((toastId) => toastId !== targetId);
};

const addToast = (toasts, options) => {
  const toast = createToast(options);
  if (toast) return [...toast, toast];
  return toasts;
};

const validateOptions = (options) => {
  // check type
  if (
    !(
      typeof options === "object" &&
      !Array.isArray(options) &&
      !(options instanceof Function)
    )
  )
    return false;

  // check required option

  if (!options.message) return false;

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
}));

export default useToast;
