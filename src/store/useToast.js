import { create } from "zustand";
import { uuid } from "../lib/util";

const createToast = (content, options) => {
  const toast = {
    id: uuid(),
    content,
  };
  if (!validateOptions(options)) {
    console.warn(
      "[Warn: createToast in useToast]: options가 잘 전달되지 않았습니다.",
    );
    return toast;
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

const addToast = (toasts, content, options) => {
  const toast = createToast(content, options);
  return [...toasts, toast];
};

const validateOptions = (options) => {
  return (
    typeof options === "object" &&
    !Array.isArray(options) &&
    !(options instanceof Function)
  );
};
const useToast = create((set) => ({
  toasts: [], // toast 객체의 배열
  remove: (targetId) =>
    set((state) => ({
      toasts: removeToast(state.toasts, targetId),
    })),
  add: (content = "", options = {}) =>
    set((state) => ({
      toasts: addToast(state.toast, content, options),
    })),
}));

export default useToast;
