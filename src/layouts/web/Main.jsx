import { useLocation } from "react-router";
import { MainWrapper } from "../../components/layout/styles/main.styles";

const Main = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname.includes("home");

  return <MainWrapper $isHome={isHome}>{children}</MainWrapper>;
};

export default Main;
