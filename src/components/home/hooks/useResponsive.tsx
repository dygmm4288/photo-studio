import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return { isMobile };
}
