import debounce from "lodash/debounce";
import { useEffect, useState } from "react";
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
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (!isHome) {
        return;
      }
      if (touchCond()) {
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

  useEffect(() => {
    const nextIsHome = location.pathname.includes("home");
    setIsHome(nextIsHome);

    if (!nextIsHome) untouch();
    else if (nextIsHome && touchCond()) touch();
  }, [location, isHome]);

  return { isTouched };
};

export default useHeader;
