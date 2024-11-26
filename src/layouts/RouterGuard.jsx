import { Navigate, useLocation } from "react-router";

const RouterGuard = ({ children }) => {
  const location = useLocation();

  if (location.pathname === "/") return <Navigate to='/home' />;
  return children;
};

export default RouterGuard;
