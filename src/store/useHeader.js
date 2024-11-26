import debounce from "lodash/debounce";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { create } from "zustand";

const useTouch = create((set) => ({
  isTouched: false,
  touch: () => set(() => ({ isTouched: true })),
  untouch: () => set(() => ({ isTouched: false })),
}));

const touchCond = () => window.scrollY < 20;

const useHeader = () => {
  const { isTouched, touch, untouch } = useTouch();
  const location = useLocation();
  const isHome = location.pathname.includes("home");

  const handleTouch = (isHome) => {
    console.log({ isHome, touchCond: touchCond() });
    if (isHome && touchCond()) touch();
    else untouch();
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      handleTouch(isHome);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    handleTouch(isHome);
  }, [isHome]);

  return { isTouched };
};

export default useHeader;
