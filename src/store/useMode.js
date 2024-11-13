import { useEffect } from "react";
import { create } from "zustand";

const detectMode = () => {
  const width = window.innerWidth;

  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "web";
};

const useMode = create((set) => ({
  mode: "web",
  setMode: () =>
    set(() => ({
      mode: detectMode(),
    })),
}));

export const useLayoutModeEffect = () => {
  const { setMode } = useMode();

  const handleResize = () => {
    setMode();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};

export default useMode;
