import debounce from "lodash/debounce";
import { useEffect } from "react";
import { create } from "zustand";

const useTouch = create((set) => ({
  isTouched: false,
  touch: () => set(() => ({ isTouched: true })),
  untouch: () => set(() => ({ isTouched: false })),
}));

const useHeader = () => {
  const { isTouched, touch, untouch } = useTouch();

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY < 20) {
        touch();
      } else {
        untouch();
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isTouched };
};

export default useHeader;
